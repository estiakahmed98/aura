"use client";
import { useState } from "react";
import Image from "next/image";

const collections = [
  { title: "Simple casual", image: "drop1.jpg", category: "Everyday", description: "Easy layers. An effortless point of view." },
  { title: "Hangout dress", image: "drop2.jpg", category: "Everyday", description: "Made for wherever the day takes you." },
  { title: "Cozy anywhere", image: "drop3.jpg", category: "Winter", description: "Comfort at the center of every look." },
  { title: "Tailored layers", image: "drop4.jpg", category: "Occasion", description: "Clean lines with a confident finish." },
  { title: "Winter", image: "drop5.jpg", category: "Winter", description: "Your cold-weather wardrobe, reimagined." },
  { title: "Party", image: "drop6.jpg", category: "Occasion", description: "A little more energy. A little after dark." },
  { title: "Date", image: "drop7.jpg", category: "Occasion", description: "Considered details for memorable plans." },
];

export default function CollectionGrid() {
  const [filter, setFilter] = useState("All collections");
  const visible = collections.filter(item => filter === "All collections" || item.category === filter);
  return <>
    <div className="collection-toolbar"><div className="collection-filters" role="group" aria-label="Filter collections">{["All collections", "Everyday", "Winter", "Occasion"].map(label => <button key={label} type="button" aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}</div><span role="status">{visible.length} collections</span></div>
    <div className="collection-grid">{visible.map((item, i) => <a href="/#shop" className="collection-card" key={item.title}>
      <div className="collection-image"><Image src={`/images/${item.image}`} alt={`${item.title} fashion collection`} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw" priority={i < 3} /><span className="collection-category">{item.category}</span><span className="collection-arrow" aria-hidden="true">↗</span></div>
      <h2 className="display">{item.title}</h2><p>{item.description}</p>
    </a>)}</div>
  </>;
}
