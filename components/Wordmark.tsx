import Image from "next/image";

export default function Wordmark() {
  return (
    <div className="wordmark">
      <div className="wordmark-stage">
        <p className="wm-text">AURA</p>
        <svg className="wm-celestial" viewBox="0 0 1200 430" fill="none" aria-hidden="true" focusable="false">
          <ellipse cx="600" cy="225" rx="552" ry="87" transform="rotate(-12 600 225)" stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          <path d="M949 56C949 85 954 92 979 93C954 94 949 101 949 130C949 101 944 94 919 93C944 92 949 85 949 56Z" fill="currentColor" />
        </svg>
        <div className="wm-photo wm-photo-left" aria-hidden="true">
          <Image src="/images/footer1.png" alt="" fill sizes="(max-width: 700px) 18vw, 14vw" />
        </div>
        <div className="wm-photo wm-photo-right" aria-hidden="true">
          <Image src="/images/footer2.png" alt="" fill sizes="(max-width: 700px) 15vw, 11vw" />
        </div>
      </div>
      <p className="wm-tagline">Winter essentials</p>
    </div>
  );
}

