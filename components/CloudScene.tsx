"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Transparent Three.js canvas with a soft, floating cloud that follows the pointer. */
export default function CloudScene({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 9;

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const sun = new THREE.DirectionalLight(0xbfe6ff, 2);
    sun.position.set(3, 5, 6);
    scene.add(sun);

    const cloud = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });
    const puffs: [number, number, number, number][] = [
      [0, 0, 0, 1.5], [-1.7, -0.25, 0.2, 1.1], [1.7, -0.2, 0.1, 1.2], [-0.8, 0.8, -0.2, 1.2],
      [0.9, 0.9, 0, 1.1], [-2.6, -0.5, 0, 0.7], [2.7, -0.45, 0, 0.75], [0, -0.7, 0.6, 1.1],
    ];
    const meshes = puffs.map(([x, y, z, r]) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 32), mat);
      m.position.set(x, y, z);
      m.userData.base = new THREE.Vector3(x, y, z);
      cloud.add(m);
      return m;
    });
    scene.add(cloud);

    const resize = () => {
      const w = el.clientWidth || 1, h = el.clientHeight || 1;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const target = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      if (!reduce) {
        meshes.forEach((m, i) => {
          const b = m.userData.base as THREE.Vector3;
          m.position.y = b.y + Math.sin(t * 0.9 + i) * 0.12;
          m.position.x = b.x + Math.cos(t * 0.6 + i * 1.3) * 0.08;
        });
        cloud.rotation.y += (target.x * 0.35 - cloud.rotation.y) * 0.05;
        cloud.rotation.x += (target.y * 0.15 - cloud.rotation.x) * 0.05;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      meshes.forEach((m) => m.geometry.dispose());
      mat.dispose();
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={host} className={className} aria-hidden="true" />;
}
