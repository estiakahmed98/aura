import PageIntro from "./PageIntro";
export type PolicySection = { title: string; text: string };
export default function LegalPage({ title, description, sections }: { title: string; description: string; sections: PolicySection[] }) {
  return <section className="page-container legal-page"><PageIntro eyebrow="The details matter" title={title} description={description} /><div className="legal-layout"><aside><span className="page-eyebrow">On this page</span>{sections.map((s,i) => <a key={s.title} href={`#policy-${i}`}>{String(i+1).padStart(2,"0")} / {s.title}</a>)}</aside><div className="legal-copy">{sections.map((s,i) => <section key={s.title} id={`policy-${i}`}><span className="page-eyebrow">{String(i+1).padStart(2,"0")}</span><h2 className="display">{s.title}</h2><p>{s.text}</p></section>)}<div className="policy-contact"><h2 className="display">A question about the details?</h2><a href="mailto:support@aurafashionhub.com">support@aurafashionhub.com ↗</a></div></div></div></section>;
}
