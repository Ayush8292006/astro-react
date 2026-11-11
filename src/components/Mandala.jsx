// Decorative gold mandala used behind banners and heroes.
export default function Mandala({ size = 240, opacity = 1, className, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" stroke="#D9A441" aria-hidden="true" className={className} style={{ opacity, ...style }}>
      <circle cx="100" cy="100" r="96" strokeOpacity=".3" />
      <circle cx="100" cy="100" r="80" strokeOpacity=".45" />
      <circle cx="100" cy="100" r="58" strokeOpacity=".3" strokeDasharray="2 5" />
      <circle cx="100" cy="100" r="36" strokeOpacity=".55" />
      <g strokeOpacity=".28">
        <path d="M100 4v192M4 100h192M32 32l136 136M168 32 32 168M52 17l96 166M148 17 52 183M17 52l166 96M183 52 17 148" />
      </g>
      <circle cx="100" cy="100" r="16" fill="#D9A441" fillOpacity=".2" />
    </svg>
  );
}
