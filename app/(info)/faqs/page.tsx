import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
export const metadata: Metadata = { title: "FAQs | AURA", description: "Answers to common questions about AURA collections, sizing, garment care, and enquiries." };
const groups = [
  { title: "Finding your look", items: [
    ["Where can I explore all collections?", "Visit our Collections page to explore all seven edits. Use the Everyday, Winter, and Occasion filters to find a look that suits your plans."],
    ["How do I choose a size?", "Sizing can vary between garments. Contact us with the style you are considering and your measurements before ordering so you can ask about the fit and available size information."],
    ["Can I ask for styling help?", "Absolutely. Send us a note through the Contact page with the collection you like, the occasion, and the kind of look you have in mind."],
  ] },
  { title: "Orders & garment care", items: [
    ["How do I check availability and place an order?", "Contact support@aurafashionhub.com with the product or collection name. Confirm current stock, sizing, the final price, and how to order before making a purchase."],
    ["Where do you deliver, and how much does delivery cost?", "Delivery availability, cost, and timing depend on the order and destination. Ask our team to confirm these details before placing an order."],
    ["What about returns or exchanges?", "Ask our team for the return and exchange conditions that apply to your purchase before ordering. For an existing purchase, include your order reference when contacting us."],
    ["How should I care for my winter pieces?", "Follow the care label on your garment. Different knits, coatings, and padding need different care, so avoid assuming that every winter piece can be washed the same way."],
    ["How can I get help with an existing order?", "Email support@aurafashionhub.com with your order reference and a description of the issue. Do not include card numbers, passwords, or other sensitive payment information."],
  ] },
];
export default function FAQsPage() {
  return <section className="page-container faq-page"><PageIntro eyebrow="A little clarity" title="Good questions. Clear answers." description="Everything you need to find your AURA, care for your layers, and get a little help along the way." /><div className="faq-layout"><aside><span className="page-eyebrow">In this guide</span>{groups.map((g,i) => <a key={g.title} href={`#faq-${i}`}>{g.title} ↗</a>)}<p>Still wondering?</p><a href="/contact">Talk to us ↗</a></aside><div>{groups.map((g,i) => <section className="faq-group" id={`faq-${i}`} key={g.title}><h2 className="display">{g.title}</h2>{g.items.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</section>)}</div></div><div className="page-cta"><div><h2 className="display">Let’s find your answer.</h2><p>A personal question deserves a personal reply.</p></div><a className="page-button" href="/contact">Contact AURA ↗</a></div></section>;
}
