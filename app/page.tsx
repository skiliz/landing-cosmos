"use client";

// ==========================================
// 01. IMPORTS
// ==========================================
import { useEffect, useMemo, useRef, useState } from "react";

// ==========================================
// 02. TYPES
// ==========================================
type PricePlan = {
  name: string;
  monthly: number;
  yearly?: number;
  suffix?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

type FaqItem = {
  q: string;
  a: string;
};

// ==========================================
// 03. PAGE COMPONENT
// ==========================================
export default function Page() {
  // ==========================================
  // 04. UI STATE
  // ==========================================
  const [scrolled, setScrolled] = useState(false);
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // ==========================================
  // 05. ROTATING HERO BADGE TEXT
  // ==========================================
  const rotatingPhrases = useMemo(
    () => [
      "Automatizza la pubblicazione social",
      "Pubblica senza passaggi manuali",
      "Gestisci i contenuti da un solo posto",
      "Il tuo workflow, in autopilota",
      "Social posting, finalmente semplice",
    ],
    []
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);

  // ==========================================
  // 06. REVEAL ANIMATION REFS
  // ==========================================
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  const setRevealRef = (index: number) => (el: HTMLElement | null) => {
    revealRefs.current[index] = el;
  };

  let revealIndex = 0;
  const nextRevealRef = () => {
    const idx = revealIndex++;
    return setRevealRef(idx);
  };

  // ==========================================
  // 07. CONTENT - FEATURES
  // ==========================================
  const features = useMemo(
    () => [
      {
        icon: "📤",
        title: "Auto-publish",
        text: "Importa un CSV con il piano editoriale, carica i media con naming convention, e il sistema pubblica tutto automaticamente su IG e FB quando programmato.",
      },
      {
        icon: "🤖",
        title: "AI Studio",
        text: "Claude AI integrato genera caption, piani editoriali completi, e analizza i competitor. Knowledge base persistente per ogni brand.",
      },
      {
        icon: "📱",
        title: "WhatsApp alerts",
        text: "Notifiche WhatsApp per conferme di pubblicazione, errori, e scadenze token. In Italia WhatsApp è il canale business #1.",
      },
      {
        icon: "👁️",
        title: "Anteprima fedele",
        text: "Visualizza esattamente come apparirà il post su Instagram e Facebook prima di pubblicare. Mockup fedeli al layout 2026.",
      },
      {
        icon: "✅",
        title: "Approvazione cliente",
        text: "Link tokenizzato senza login: il cliente vede il piano, approva o rifiuta, riceve notifiche. Zero account da creare.",
      },
      {
        icon: "📊",
        title: "Analisi competitor",
        text: "Inserisci 2-3 account competitor e l'AI li analizza: cosa pubblicano, quando, con che risultati. Strategia basata sui dati.",
      },
    ],
    []
  );

  // ==========================================
  // 08. CONTENT - HOW IT WORKS
  // ==========================================
  const steps = useMemo(
    () => [
      {
        number: "01",
        title: "Carica il piano",
        text: "Importa il tuo piano editoriale da CSV o Google Sheets. Ogni riga è un post con data, ora, caption e nome file media.",
      },
      {
        number: "02",
        title: "Carica i media",
        text: "Upload della cartella media su Cloudinary. I file vengono abbinati automaticamente ai post tramite naming convention.",
      },
      {
        number: "03",
        title: "Si pubblica da solo",
        text: "Il motore di pubblicazione controlla ogni 60 secondi e pubblica automaticamente su Instagram e Facebook all'orario programmato.",
      },
    ],
    []
  );

  // ==========================================
  // 09. CONTENT - PRICING
  // ==========================================
  const pricing: PricePlan[] = useMemo(
    () => [
      {
        name: "Free",
        monthly: 0,
        suffix: "/mese",
        features: ["1 cliente", "30 post/mese", "Calendario", "Anteprima IG/FB", "Import CSV"],
        cta: "Inizia gratis",
      },
      {
        name: "Pro",
        monthly: 29,
        yearly: 23,
        suffix: "/mese",
        features: [
          "3 clienti",
          "Post illimitati",
          "WhatsApp alerts",
          "AI Studio (100 crediti)",
          "Approvazione cliente",
          "Analisi competitor",
        ],
        highlighted: true,
        cta: "Prova Pro",
      },
      {
        name: "Agency",
        monthly: 59,
        yearly: 47,
        suffix: "/mese",
        features: [
          "10 clienti",
          "Post illimitati",
          "AI Studio (500 crediti)",
          "Calendario condiviso",
          "Google Sheets sync",
          "Supporto prioritario",
        ],
        cta: "Contattaci",
      },
    ],
    []
  );

  // ==========================================
  // 10. CONTENT - FAQ
  // ==========================================
  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: "Come funziona la pubblicazione automatica?",
        a: "UpPilot usa le API ufficiali di Meta per pubblicare su Instagram e Facebook. Il motore controlla ogni 60 secondi se ci sono post programmati e li pubblica automaticamente all'orario impostato.",
      },
      {
        q: "Devo creare un account per i miei clienti?",
        a: "No. Il flusso di approvazione usa link tokenizzati: il cliente clicca un link, vede il piano editoriale, approva o rifiuta. Zero account, zero password.",
      },
      {
        q: "Posso importare il piano da Google Sheets?",
        a: "Sì. UpPilot si integra con Google Sheets come fonte alternativa al CSV. Se già usi Google Sheets per i piani editoriali, non devi cambiare nulla.",
      },
      {
        q: "Che AI usate?",
        a: "Claude di Anthropic. L'AI Studio genera caption, piani editoriali completi, e analizza i competitor. Ogni brand ha una knowledge base persistente che viene inviata con ogni richiesta.",
      },
      {
        q: "Posso provare prima di pagare?",
        a: "Il piano Free è gratuito per sempre: 1 cliente, 30 post al mese, tutte le funzionalità core. Nessuna carta di credito richiesta.",
      },
    ],
    []
  );

  // ==========================================
  // 11. EFFECT - NAV SCROLL + REVEAL ON SCROLL
  // ==========================================
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transitionDelay = `${(i % 6) * 0.08}s`;
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // ==========================================
  // 12. EFFECT - HERO BADGE TEXT ROTATION
  // ==========================================
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseVisible(false);

      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setPhraseVisible(true);
      }, 250);
    }, 2600);

    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  // ==========================================
  // 13. RENDER
  // ==========================================
  return (
    <>
      <div className="uppilot-page">
        {/* ========================================== */}
        {/* 14. NAVBAR */}
        {/* ========================================== */}
        <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
          <div className="nav-logo">
            <div className="nav-icon">UP</div>
            <span className="nav-name">UpPilot</span>
          </div>

          <div className="nav-links">
            <a href="#funzionalita">Funzionalità</a>
            <a href="#come-funziona">Come funziona</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#pricing" className="nav-cta">
              Inizia gratis
            </a>
          </div>
        </nav>

        {/* ========================================== */}
        {/* 15. HERO */}
        {/* ========================================== */}
        <section className="hero">
          <div className="hero-glow1" />
          <div className="hero-glow2" />

          <div ref={nextRevealRef()} className="fade">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span className={`hero-badge-text ${phraseVisible ? "is-visible" : "is-hidden"}`}>
                {rotatingPhrases[phraseIndex]}
              </span>
            </div>
          </div>

          <h1 ref={nextRevealRef()} className="fade">
            Il tuo autopilota
            <br />
            per i social media
          </h1>

          <p ref={nextRevealRef()} className="fade">
            Carica il piano editoriale, importa i media, e UpPilot pubblica tutto in automatico su Instagram e
            Facebook. Zero passaggi manuali.
          </p>

          <div ref={nextRevealRef()} className="hero-buttons fade">
            <a href="#pricing" className="btn-primary">
              Inizia gratis
            </a>
            <a href="#come-funziona" className="btn-secondary">
              Guarda la demo
            </a>
          </div>

          <div ref={nextRevealRef()} className="hero-stats fade">
            <div className="stat-item">
              <div className="stat-value">60s</div>
              <div className="stat-label">Polling engine</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">0</div>
              <div className="stat-label">Passaggi manuali</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Pubblicazione auto</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">∞</div>
              <div className="stat-label">Post programmabili</div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 16. FEATURES */}
        {/* ========================================== */}
        <section className="section" id="funzionalita">
          <div ref={nextRevealRef()} className="section-center fade">
            <div className="section-eyebrow">Funzionalità</div>
            <h2 className="section-title">
              Tutto quello che serve,
              <br />
              niente di superfluo
            </h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} ref={nextRevealRef()} className="feature-card fade">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* 17. HOW IT WORKS */}
        {/* ========================================== */}
        <section className="how-section" id="come-funziona">
          <div className="how-bg" />
          <div className="how-inner">
            <div ref={nextRevealRef()} className="section-center fade">
              <div className="section-eyebrow">Come funziona</div>
              <h2 className="section-title">Tre passi. Poi lavora da solo.</h2>
            </div>

            <div className="how-grid">
              {steps.map((step) => (
                <div key={step.number} ref={nextRevealRef()} className="how-card fade">
                  <div className="how-card-num">{step.number}</div>
                  <div className="how-card-badge">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 18. PRICING */}
        {/* ========================================== */}
        <section className="section" id="pricing">
          <div ref={nextRevealRef()} className="section-center fade">
            <div className="section-eyebrow">Pricing trasparente</div>
            <h2 className="section-title">Scegli il piano giusto per te</h2>

            <div className="pricing-toggle pricing-toggle-top">
              <button type="button" className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>
                Mensile
              </button>
              <button type="button" className={annual ? "active" : ""} onClick={() => setAnnual(true)}>
                Annuale <span className="annual-discount">-20%</span>
              </button>
            </div>
          </div>

          <div className="pricing-grid" id="pricing-grid">
            {pricing.map((plan) => {
              const shownPrice = plan.yearly !== undefined && annual ? plan.yearly : plan.monthly;

              return (
                <div key={plan.name} ref={nextRevealRef()} className={`price-card fade ${plan.highlighted ? "highlight" : ""}`}>
                  {plan.highlighted && <div className="price-card-badge">Popular</div>}

                  <div className="price-plan">{plan.name}</div>

                  <div className="price-amount">
                    <span>{`€${shownPrice}`}</span>
                    <span>{plan.suffix ?? "/mese"}</span>
                  </div>

                  <div className="price-features">
                    {plan.features.map((feature) => (
                      <div key={feature} className="price-feature">
                        <div className="price-check">✓</div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a href="#" className={`price-cta ${plan.highlighted ? "primary" : "outline"}`}>
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <div ref={nextRevealRef()} className="founding-banner fade">
            <div>
              <h4>Founding Members</h4>
              <p>€19/mese bloccato per sempre. Solo 30 posti.</p>
            </div>
            <a href="#" className="btn-primary founding-btn">
              Riserva il tuo posto
            </a>
          </div>
        </section>

        {/* ========================================== */}
        {/* 19. TESTIMONIAL */}
        {/* ========================================== */}
        <section className="testimonial">
          <div ref={nextRevealRef()} className="testimonial-inner fade">
            <div className="testimonial-quote-mark">"</div>
            <blockquote>
              Con UpPilot ho eliminato 3 ore al giorno di lavoro manuale. Carico il piano editoriale il lunedì e per
              tutta la settimana si pubblica da solo.
            </blockquote>
            <div className="testimonial-author">Social Media Manager</div>
            <div className="testimonial-role">Agenzia, 8 clienti</div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 20. FAQ */}
        {/* ========================================== */}
      <div className="faq-list">
  {faqs.map((faq, index) => {
    const isOpen = openFaq === index;
    return (
      <div key={faq.q} className={`faq-item ${isOpen ? "open" : ""}`}>
        <button type="button" className="faq-btn" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
          <span>{faq.q}</span>
          <span className="faq-icon">+</span>
        </button>
        <div className="faq-answer">
          <p>{faq.a}</p>
        </div>
      </div>
    );
  })}
</div>
              <div key={faq.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button type="button" className="faq-btn" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{faq.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================== */}
        {/* 21. CTA */}
        {/* ========================================== */}
        <section className="cta-section">
          <div ref={nextRevealRef()} className="cta-box fade">
            <div className="cta-glow" />
            <h2>Pronto a mettere il pilota automatico?</h2>
            <p>Inizia gratis. Nessuna carta di credito. Nessun lock-in. Cancella quando vuoi.</p>
            <a href="#" className="btn-primary">
              Crea il tuo account gratuito
            </a>
          </div>
        </section>

        {/* ========================================== */}
        {/* 22. FOOTER */}
        {/* ========================================== */}
        <footer>
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-top">
                <div className="nav-icon footer-icon">UP</div>
                <span className="footer-brand-name">UpPilot</span>
              </div>
              <p>
                Piattaforma di automazione social media per SMM e agenzie italiane. Carica, programma, pubblica — in
                automatico.
              </p>
              <a href="mailto:info@uppilot.com">info@uppilot.com</a>
            </div>

            <div className="footer-col">
              <h5>Prodotto</h5>
              <a href="#">Funzionalità</a>
              <a href="#">Pricing</a>
              <a href="#">Demo</a>
              <a href="#">API Docs</a>
            </div>

            <div className="footer-col">
              <h5>Azienda</h5>
              <a href="#">Chi siamo</a>
              <a href="#">Blog</a>
              <a href="#">Contatti</a>
              <a href="#">Lavora con noi</a>
            </div>

            <div className="footer-col">
              <h5>Social</h5>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 UpPilot. Tutti i diritti riservati.</span>
            <div>
              <a href="#">Privacy</a>
              <a href="#">Termini</a>
            </div>
          </div>
        </footer>
      </div>

      {/* ========================================== */}
      {/* 23. GLOBAL STYLES */}
      {/* ========================================== */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #0a0a12;
          font-family: "DM Sans", "Helvetica Neue", sans-serif;
          color: #fff;
          overflow-x: hidden;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        .fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .uppilot-page {
          background: #0a0a12;
          color: #fff;
          min-height: 100vh;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0 32px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(10, 10, 18, 0.95);
          backdrop-filter: blur(12px);
          border-bottom-color: rgba(108, 92, 231, 0.15);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6c5ce7, #a29bfe);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          color: #fff;
          letter-spacing: -0.5px;
        }

        .nav-name {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.65);
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #fff;
        }

        .nav-cta {
          padding: 10px 24px;
          border-radius: 50px;
          background: #6c5ce7;
          color: #fff !important;
          font-weight: 600;
          box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .nav-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(108, 92, 231, 0.5);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-glow1 {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-glow2 {
          position: absolute;
          top: 60%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(162, 155, 254, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid rgba(108, 92, 231, 0.3);
          background: rgba(108, 92, 231, 0.08);
          margin-bottom: 32px;
          min-height: 44px;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6c5ce7;
          animation: pulse 2s ease infinite;
        }

        .hero-badge-text {
          display: inline-block;
          font-size: 13px;
          color: #a29bfe;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: opacity 0.25s ease, transform 0.25s ease;
          will-change: opacity, transform;
        }

        .hero-badge-text.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge-text.is-hidden {
          opacity: 0;
          transform: translateY(8px);
        }

        .hero h1 {
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          max-width: 800px;
          letter-spacing: -2px;
          margin-bottom: 24px;
        }

        .hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.55);
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary {
          padding: 16px 36px;
          border-radius: 50px;
          background: #6c5ce7;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 30px rgba(108, 92, 231, 0.4);
          transition: box-shadow 0.3s, transform 0.2s;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          box-shadow: 0 4px 40px rgba(108, 92, 231, 0.6);
          transform: translateY(-1px);
        }

        .btn-secondary {
          padding: 16px 36px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          transition: border-color 0.3s, transform 0.2s;
          background: none;
          cursor: pointer;
        }

        .btn-secondary:hover {
          border-color: rgba(108, 92, 231, 0.5);
          transform: translateY(-1px);
        }

        .hero-stats {
          margin-top: 60px;
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 800;
          color: #6c5ce7;
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 4px;
        }

        .section {
          padding: 100px 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-eyebrow {
          font-size: 13px;
          color: #6c5ce7;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .section-center {
          text-align: center;
          margin-bottom: 64px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .feature-card {
          padding: 32px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(108, 92, 231, 0.3);
          background: rgba(108, 92, 231, 0.05);
          transform: translateY(-4px);
        }

        .feature-icon {
          font-size: 28px;
          margin-bottom: 16px;
        }

        .feature-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }

        .feature-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
        }

        .how-section {
          padding: 100px 32px;
          position: relative;
        }

        .how-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent, rgba(108, 92, 231, 0.03) 50%, transparent);
          pointer-events: none;
        }

        .how-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .how-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .how-card {
          position: relative;
          padding: 40px 32px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .how-card:hover {
          transform: translateY(-4px);
          border-color: rgba(108, 92, 231, 0.18);
        }

        .how-card-num {
          font-size: 64px;
          font-weight: 900;
          color: rgba(108, 92, 231, 0.1);
          position: absolute;
          top: 12px;
          right: 24px;
          line-height: 1;
        }

        .how-card-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(162, 155, 254, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 18px;
          font-weight: 800;
          color: #a29bfe;
        }

        .how-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
        }

        .how-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.7;
        }

        .pricing-toggle {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 4px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pricing-toggle-top {
          margin-top: 32px;
        }

        .pricing-toggle button {
          padding: 8px 24px;
          border-radius: 50px;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }

        .pricing-toggle button.active {
          background: #6c5ce7;
          color: #fff;
        }

        .annual-discount {
          font-size: 11px;
          color: #a29bfe;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          align-items: start;
        }

        .price-card {
          padding: 36px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.25s ease;
        }

        .price-card:hover {
          transform: translateY(-4px);
        }

        .price-card.highlight {
          border-color: rgba(108, 92, 231, 0.5);
          background: rgba(108, 92, 231, 0.08);
        }

        .price-card-badge {
          position: absolute;
          top: 16px;
          right: -28px;
          background: #6c5ce7;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 32px;
          transform: rotate(45deg);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .price-plan {
          font-size: 14px;
          font-weight: 600;
          color: #a29bfe;
          margin-bottom: 8px;
        }

        .price-amount {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 24px;
        }

        .price-amount span:first-child {
          font-size: 48px;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .price-amount span:last-child {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.35);
        }

        .price-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .price-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .price-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(108, 92, 231, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #6c5ce7;
          font-size: 11px;
          font-weight: 700;
        }

        .price-cta {
          display: block;
          text-align: center;
          padding: 14px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .price-cta.primary {
          background: #6c5ce7;
          color: #fff;
          border: none;
          box-shadow: 0 4px 20px rgba(108, 92, 231, 0.3);
        }

        .price-cta.outline {
          background: none;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .price-cta.outline:hover {
          border-color: rgba(108, 92, 231, 0.4);
        }

        .founding-banner {
          margin-top: 32px;
          padding: 24px 36px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(162, 155, 254, 0.05));
          border: 1px solid rgba(108, 92, 231, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .founding-banner h4 {
          font-size: 16px;
          font-weight: 700;
        }

        .founding-banner p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
        }

        .founding-btn {
          padding: 12px 28px;
          font-size: 14px;
        }

        .testimonial {
          padding: 80px 32px;
        }

        .testimonial-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonial-quote-mark {
          font-size: 80px;
          color: rgba(108, 92, 231, 0.15);
          font-weight: 900;
          line-height: 1;
          margin-bottom: -20px;
        }

        .testimonial blockquote {
          font-size: clamp(18px, 2.5vw, 24px);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 32px;
          letter-spacing: -0.3px;
        }

        .testimonial-author {
          font-size: 15px;
          font-weight: 600;
        }

        .testimonial-role {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 4px;
        }

        .faq {
          padding: 100px 32px;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          overflow: hidden;
          transition: all 0.3s;
        }

        .faq-item.open {
          border-color: rgba(108, 92, 231, 0.3);
          background: rgba(108, 92, 231, 0.05);
        }

        .faq-btn {
          width: 100%;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          background: none;
          cursor: pointer;
          text-align: left;
          color: inherit;
          font-family: inherit;
        }

        .faq-btn span:first-child {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          padding-right: 16px;
        }

        .faq-btn .faq-icon {
          color: #6c5ce7;
          font-size: 20px;
          transition: transform 0.2s;
          flex-shrink: 0;
        }

        .faq-item.open .faq-icon {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-answer {
          max-height: 220px;
        }

        .faq-answer p {
          padding: 0 24px 20px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
        }

        .cta-section {
          padding: 80px 32px;
        }

        .cta-box {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 48px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(108, 92, 231, 0.15), rgba(162, 155, 254, 0.05));
          border: 1px solid rgba(108, 92, 231, 0.2);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(108, 92, 231, 0.1), transparent);
          pointer-events: none;
        }

        .cta-box h2 {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
          position: relative;
        }

        .cta-box p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 32px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }

        footer {
          padding: 64px 32px 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto 48px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .footer-brand-top {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          font-size: 12px;
        }

        .footer-brand-name {
          font-size: 16px;
          font-weight: 700;
        }

        .footer-brand p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          line-height: 1.7;
          max-width: 280px;
          margin-top: 12px;
        }

        .footer-brand a {
          font-size: 13px;
          color: #6c5ce7;
          display: inline-block;
          margin-top: 8px;
        }

        .footer-col h5 {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .footer-col a {
          display: block;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 10px;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: #fff;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.25);
        }

        .footer-bottom a {
          color: rgba(255, 255, 255, 0.25);
          margin-left: 20px;
        }

        @media (max-width: 768px) {
          .nav {
            padding: 0 20px;
          }

          .nav-links a:not(.nav-cta) {
            display: none;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero-stats {
            gap: 24px;
          }

          .founding-banner {
            flex-direction: column;
            text-align: center;
          }

          .cta-box {
            padding: 48px 28px;
          }
        }

        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .footer-bottom a {
            margin-left: 0;
            margin-right: 16px;
          }
        }
      `}</style>
    </>
  );
}