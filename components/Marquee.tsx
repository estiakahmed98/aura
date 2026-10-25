const A = "Aura creates modern fashion for bold and confident lifestyles";
const B = "and current trends — confident in what you wear";

export default function Marquee() {
  return (
    <section className="marquee">
      <div className="mq-row lime-row"><div className="mq-track">{[0, 1, 2].map((i) => <span key={i}>{A}&nbsp;&nbsp;</span>)}</div></div>
      <div className="mq-row dark-row"><div className="mq-track">{[0, 1, 2].map((i) => <span key={i}>{B}&nbsp;&nbsp;</span>)}</div></div>
      <div className="mq-photo mq-photo-left" style={{ backgroundImage: 'url("/images/Marquee 1.jpg")' }} aria-hidden="true" />
      <div className="mq-photo" style={{ backgroundImage: "url(/images/marquee.jpg)" }} />
      <div className="mq-photo mq-photo-right" style={{ backgroundImage: 'url("/images/Marquee 2.jpg")' }} aria-hidden="true" />
    </section>
  );
}
