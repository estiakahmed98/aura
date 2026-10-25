export default function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-intro">
    <span className="page-eyebrow">AURA / {eyebrow}</span>
    <h1 className="display">{title}</h1>
    <p>{description}</p>
  </div>;
}
