"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveDemoSession } from "@/lib/demo-session";
export default function AuthForm({ signup = false }: { signup?: boolean }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const enter = (name: string, email: string) => {
    setError(""); setBusy(true);
    try { saveDemoSession({ name, email }); router.push("/admin"); }
    catch { setError("Please allow browser storage to open the demo dashboard."); setBusy(false); }
  };
  return <div className="auth-form-wrap"><span className="page-eyebrow">{signup ? "A fresh beginning" : "Your next chapter"}</span><h1 className="display">{signup ? "Make yourself at home." : "Good to see you."}</h1><p className="auth-intro">{signup ? "Create a demo account and explore the AURA admin experience." : "Log in to your space. Your winter edit is waiting."}</p><div className="auth-demo-note"><span aria-hidden="true">✦</span><p>Demo experience — use any email and a password of 6+ characters. No real account is created.</p></div>
    <form className="auth-form" onSubmit={event => { event.preventDefault(); const data = new FormData(event.currentTarget); const email = String(data.get("email")).trim(); enter(signup ? String(data.get("name")).trim() : email.split("@")[0], email); }}>
      {signup && <label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Your name" /></label>}
      <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
      <label>Password<span className="auth-password"><input name="password" type={show ? "text" : "password"} autoComplete={signup ? "new-password" : "current-password"} required minLength={6} placeholder="At least 6 characters" /><button type="button" onClick={() => setShow(value => !value)} aria-label={show ? "Hide password" : "Show password"} aria-pressed={show}>{show ? "Hide" : "Show"}</button></span></label>
      {signup && <label className="auth-consent"><input type="checkbox" required /><span>I agree to the <a href="/terms-of-service">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>.</span></label>}
      {error && <p className="auth-error" role="alert">{error}</p>}
      <button className="auth-submit" type="submit" disabled={busy}>{busy ? "Opening your dashboard…" : signup ? "Create demo account" : "Log in"}<span aria-hidden="true">↗</span></button>
    </form><div className="auth-divider"><span>or take a look around</span></div><button type="button" className="auth-demo-button" disabled={busy} onClick={() => enter("AURA Admin", "admin@aura.demo")}>Explore demo dashboard <span aria-hidden="true">→</span></button><p className="auth-switch">{signup ? "Already have an account?" : "New to AURA?"} <a href={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Sign up"}</a></p></div>;
}
