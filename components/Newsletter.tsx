"use client";
import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <footer className="news">
      <div>
        <h2 className="display">Stay update with<br />our latest deals</h2>
        <form className="news-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <label className="sr" htmlFor="em">Email</label>
          <input id="em" type="email" required placeholder="Enter your email" />
          <button className="btn-dark" type="submit">{done ? "Subscribed" : "Subscribe Now"}</button>
        </form>
        <small>&copy; 2025 Aura. All rights reserved.</small>
      </div>
      <div className="news-cols">
        <ul><li>Home</li><li>Shop</li><li>Collections</li><li>Contact</li><li>FAQs</li></ul>
        <div><b>Email</b><p>support@aurafashion<br />hub.com</p><b>Phone</b><p>+0123 456 7890</p></div>
        <div><b>Social Media</b><p>Instagram &#183; YouTube &#183; X &#183; Facebook</p><small>Privacy Policy | Terms of Service</small></div>
      </div>
    </footer>
  );
}
