import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
export const metadata: Metadata = { title: "Privacy Policy | AURA", description: "Read AURA’s privacy information and find out how to contact us about your personal information." };
export default function PrivacyPage() {
  return <LegalPage title="Privacy policy." description="A considered approach to the information you choose to share with AURA." sections={[
    { title: "Information you share", text: "When you contact AURA by email, your message may include your name, email address, order reference, and other information you choose to provide. Please share only what is relevant to your enquiry and avoid sending sensitive payment information." },
    { title: "Why information is used", text: "Information provided in an enquiry is used to understand and respond to that enquiry. Questions about a purchase may require order details to identify the transaction and discuss the next steps." },
    { title: "Email and service providers", text: "Messages sent by email pass through the email services used by you and the recipient. Those services handle information under their own terms and privacy notices. AURA may need to use service providers to respond to enquiries or support a transaction." },
    { title: "Website and external links", text: "Your browser and hosting services exchange technical information to load this website. Links to external websites take you to services with their own privacy practices. Review their notices before sharing information on those services." },
    { title: "Your preferences", text: "You can contact AURA to ask about information you have shared, request a correction, or ask about deletion and communication preferences. We may need additional information to identify the relevant message or transaction." },
    { title: "Contact and updates", text: "Send privacy questions to support@aurafashionhub.com. This notice may be updated as AURA’s services change; review this page when you need current privacy information." },
  ]} />;
}
