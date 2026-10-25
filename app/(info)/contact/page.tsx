import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact | AURA", description: "Get in touch with AURA for collection, styling, product, and order enquiries." };
export default function ContactPage() {
  return <section className="page-container contact-page"><PageIntro eyebrow="A little conversation" title="Let’s talk AURA." description="A question about a look? Need a little styling inspiration? We’re here to help you find your way." /><div className="contact-grid"><aside className="contact-aside"><span className="page-eyebrow">Direct, personal, simple</span><h2>Good style starts<br />with a conversation.</h2><a className="contact-email" href="mailto:support@aurafashionhub.com">support@aurafashionhub.com ↗</a><p>For collection information, product availability, and enquiries about an existing order, send us a note with the relevant details.</p><div className="contact-faq"><h3 className="display">A quick answer?</h3><p>Our FAQs cover collections, sizing, garment care, and getting in touch.</p><a href="/faqs">Visit the FAQs ↗</a></div></aside><ContactForm /></div></section>;
}
