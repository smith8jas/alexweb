import { site } from "@/data";

type SocialItem = {
  label: string;
  href: string;
  path: React.ReactNode;
};

const items: SocialItem[] = [
  {
    label: "Facebook",
    href: site.social.facebook,
    path: (
      <path d="M14 9h2.5l.5-3h-3V4.5c0-.87.27-1.5 1.6-1.5H17.5V.3C17.16.26 16.1.2 14.86.2 12.28.2 10.5 1.78 10.5 4.65V6H8v3h2.5v8H14V9z" />
    )
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.6" r="1.3" />
      </>
    )
  },
  {
    label: "YouTube",
    href: site.social.youtube,
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02 15.5 12 9.75 8.98v6.04z"
      />
    )
  },
  {
    label: "TikTok",
    href: site.social.tiktok,
    path: (
      <path d="M16.5 2h-3v13.2a2.7 2.7 0 1 1-2.2-2.65V9.5a5.9 5.9 0 1 0 5.2 5.85V8.7a6.4 6.4 0 0 0 3.8 1.25V6.9a3.6 3.6 0 0 1-2.7-1.2A3.6 3.6 0 0 1 16.5 2z" />
    )
  }
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`social-row${className ? ` ${className}` : ""}`} aria-label="Redes sociales">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          title={item.label}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            {item.path}
          </svg>
        </a>
      ))}
    </div>
  );
}
