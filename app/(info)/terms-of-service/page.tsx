import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Terms of Service | AURA", description: "Information about using the AURA website, collection enquiries, and purchase details." };
export default function TermsPage() {
  return <LegalPage title="Terms of service." description="The details behind browsing AURA and exploring your next winter look." sections={[
    { title: "Using this website", text: "Use the AURA website for lawful browsing and enquiries. Do not attempt to disrupt the site, access information without permission, or misuse its content or contact channels." },
    { title: "Collection information", text: "Collection images provide styling inspiration. Colors can appear differently across screens, and product details, sizes, prices, and availability may change. Confirm the details of a specific item before making a purchase." },
    { title: "Orders and payment", text: "An enquiry does not confirm an order. Before making a payment, confirm the item, quantity, size, final price, payment method, and order arrangements with AURA. Keep a copy of your order confirmation and payment record." },
    { title: "Delivery, returns and exchanges", text: "Ask AURA to confirm delivery destinations, charges, estimated timing, and the return or exchange conditions that apply to your purchase before ordering. For help with an existing purchase, contact us with your order reference." },
    { title: "Content and external services", text: "Do not copy or reuse website content without appropriate permission from its rights holder. External websites and services linked from AURA operate under their own terms. Check those terms before using an external service." },
    { title: "Questions and changes", text: "Contact support@aurafashionhub.com if you have a question about the website or a transaction. These terms may be updated as services change. Nothing on this page is intended to remove rights that cannot lawfully be excluded." },
  ]} />;
}
