// Inline stroke icon set (24×24). Usage: <Icon name="chart" size={24} />
const PATHS = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  home: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  chart: <><rect x="3" y="3" width="18" height="18" rx="1.5" /><path d="M3 7.5h18M3 16.5h18M7.5 3v18M16.5 3v18" /></>,
  rings: <><circle cx="9" cy="14" r="5" /><circle cx="15" cy="14" r="5" /><path d="m10 5 2-2 2 2" /></>,
  cal: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  hash: <path d="M5 9h14M5 15h14M10 3 8 21M16 3l-2 18" />,
  house: <><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="m12 11 2.5 3.5L12 18l-2.5-3.5z" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /><path d="M9 10h6M9 13.5h4" /></>,
  doc: <><path d="M5 3h9l5 5v13H5z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />,
  lamp: <><path d="M4 14c0 3 3.5 5 8 5s8-2 8-5H4z" /><path d="M12 14c-2-2-2-4 0-7 2 3 2 5 0 7z" /></>,
  temple: <path d="M12 2v3M8 9h8l-1-4H9zM6 13h12l-2-4H8zM4 21h16M5 21v-8M19 21v-8M10 21v-4h4v4" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  planet: <><circle cx="12" cy="12" r="5" /><path d="M3.5 15.5C2 17.5 2.5 19 4.5 19c3 0 8.5-3 12-6.5S22 5 19.5 5c-1 0-2.2.4-3.5 1" /></>,
  saturn: <><circle cx="12" cy="12" r="5" /><ellipse cx="12" cy="12" rx="10" ry="3.5" /></>,
  bag: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>,
  mega: <><path d="M3 10v4h4l8 5V5L7 10z" /><path d="M19 9a4 4 0 0 1 0 6" /></>,
  pin: <><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  download: <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />,
  back: <path d="m15 6-6 6 6 6" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 5 5 9-10" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16v.5" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.5 12h12L22 7H6" /></>,
  headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></>,
  share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></>,
  logo: <><circle cx="12" cy="12" r="4" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2 19 19M19 5l-2.8 2.8M7.8 16.2 5 19" /></>,
  mala: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="4" r="1.4" /><circle cx="12" cy="20" r="1.4" /><circle cx="4" cy="12" r="1.4" /><circle cx="20" cy="12" r="1.4" /><circle cx="6.3" cy="6.3" r="1.4" /><circle cx="17.7" cy="17.7" r="1.4" /><circle cx="17.7" cy="6.3" r="1.4" /><circle cx="6.3" cy="17.7" r="1.4" /></>,
  bangle: <><ellipse cx="12" cy="12" rx="9" ry="5" /><ellipse cx="12" cy="12" rx="6" ry="2.6" /></>,
};

export default function Icon({ name, size = 22, stroke = 1.8, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {PATHS[name]}
    </svg>
  );
}
