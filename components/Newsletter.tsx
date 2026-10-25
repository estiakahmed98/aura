"use client";
import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="news" aria-labelledby="newsletter-title">
      <div className="news-signup">
        <h2 id="newsletter-title" className="display">Stay updated with<br />our latest deals</h2>
        <form className="news-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <label className="sr" htmlFor="em">Email</label>
          <input id="em" name="email" type="email" autoComplete="email" required placeholder="Enter your email" />
          <button className="btn-dark" type="submit"><span aria-live="polite">{done ? "Subscribed" : "Subscribe Now"}</span><span aria-hidden="true">&#8599;</span></button>
        </form>
      </div>
      <div className="news-cols">
        <nav aria-label="Footer navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#shop">Shop</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </nav>
        <div id="footer-contact" className="news-contact">
          <b>Email</b><p><a href="mailto:support@aurafashionhub.com">support@aurafashionhub.com</a></p>
          <b>Phone</b><p><a href="tel:+01234567890">+0123 456 7890</a></p>
        </div>
        <div className="news-social">
          <b>Social Media</b>
          <ul aria-label="Social platforms"><li>Instagram</li><li>YouTube</li><li>X</li><li>Facebook</li></ul>
        </div>
      </div>
      <div className="news-bottom">
        <small>&copy; {new Date().getFullYear()} Aura. All rights reserved.</small>
        <small><a href="/privacy-policy">Privacy Policy</a> <span aria-hidden="true">/</span> <a href="/terms-of-service">Terms of Service</a></small>
      </div>
    </section>
  );
}
