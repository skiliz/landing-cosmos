import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  intro?: string;
  children: ReactNode;
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/uppilot.ai",
    path: "M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.15-2.32a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/uppilot",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.75c0-.92.26-1.55 1.58-1.55h1.68V4.33A22.5 22.5 0 0 0 14.3 4.2c-2.45 0-4.13 1.5-4.13 4.24v2.36H7.5V14h2.67v8h3.33Z",
  },
];

export default function LegalPage({ title, updatedAt, intro, children }: LegalPageProps) {
  return (
    <div className="legal-page">
      <header className="legal-nav">
        <Link href="/" className="legal-nav-logo" aria-label="UpPilot — torna alla home">
          <span className="nav-icon">UP</span>
          <span className="nav-name">UpPilot</span>
        </Link>

        <Link href="/" className="legal-nav-back">
          <span aria-hidden="true">←</span> Torna alla home
        </Link>
      </header>

      <main className="legal-main">
        <div className="legal-shell">
          <div className="legal-hero">
            <span className="legal-eyebrow">Area legale</span>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-updated">Ultimo aggiornamento: {updatedAt}</p>
            {intro ? <p className="legal-intro">{intro}</p> : null}
          </div>

          <article className="legal-body">{children}</article>

          <div className="legal-back-row">
            <Link href="/" className="legal-back-link">
              ← Torna alla home di UpPilot
            </Link>
          </div>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <div className="legal-footer-brand">
            <div className="legal-footer-brand-top">
              <span className="nav-icon">UP</span>
              <span className="footer-brand-name">UpPilot</span>
            </div>
            <p>
              Piattaforma di automazione social media per SMM e agenzie italiane. Carica, programma, pubblica — in
              automatico.
            </p>
            <a href="mailto:info@uppilot.com">info@uppilot.com</a>
            <div className="footer-social-row" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="legal-footer-links">
            <h5>Area legale</h5>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/termini">Termini di Servizio</Link>
          </div>
        </div>

        <div className="legal-footer-bottom">
          <span>© 2026 UpPilot. Tutti i diritti riservati.</span>
          <Link href="/">uppilot.com</Link>
        </div>
      </footer>
    </div>
  );
}
