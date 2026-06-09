// Logo: Spiegelei-Bildmarke + Wortmarke "eggstra".
// size steuert die Höhe der Bildmarke in px.
export default function Logo({ size = 22, withWordmark = true }) {
  return (
    <span className="logo" style={{ '--logo-size': size + 'px' }}>
      <svg
        className="logo-mark"
        viewBox="0 0 40 34"
        width={size * 1.18}
        height={size}
        aria-hidden="true"
      >
        {/* Eiweiß */}
        <path
          d="M20 1.5c6.5 0 9.8 4.2 12.6 8.1 2.6 3.6 5.4 6.8 5.4 11.3 0 6.8-5.7 11.6-13.9 11.6-3.2 0-5.1-1.3-7.9-1.3-3.4 0-5.7 1.1-8.9-0.6C2.9 28.1 2 24.2 2 20.9c0-4.6 2.6-8 5.2-11.6C10.1 5.5 13.3 1.5 20 1.5Z"
          fill="#fff"
          stroke="#E6E2DA"
          strokeWidth="1"
        />
        {/* Eigelb */}
        <circle cx="19" cy="18" r="7.6" fill="url(#yolk)" />
        <circle cx="16.4" cy="15.2" r="2.1" fill="rgba(255,255,255,.55)" />
        <defs>
          <radialGradient id="yolk" cx="38%" cy="34%" r="70%">
            <stop offset="0%" stopColor="#FBD24E" />
            <stop offset="68%" stopColor="#F2A30E" />
            <stop offset="100%" stopColor="#E07C00" />
          </radialGradient>
        </defs>
      </svg>
      {withWordmark && <span className="logo-word">eggstra</span>}
    </span>
  )
}
