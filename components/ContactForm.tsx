"use client";
import { useState } from "react";

export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  return <form className="contact-form" onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("topic")} — ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:support@aurafashionhub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }}>
    <h2 className="display">Start a conversation</h2>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
    <label>What can we help with?<select name="topic"><option>Collection & styling</option><option>Product question</option><option>Order enquiry</option><option>Something else</option></select></label>
    <label>Your message<textarea name="message" required rows={5} maxLength={4000} placeholder="Tell us a little more…" /></label>
    <p className="form-note">Your message opens in your email app, ready to send. Please avoid including payment details.</p>
    <button className="page-button" type="submit">Compose email <span aria-hidden="true">↗</span></button>
    {opened && <p role="status" className="form-status">Send the draft from your email app to complete your enquiry. You can also email support@aurafashionhub.com directly.</p>}
  </form>;
}
