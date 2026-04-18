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
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const mediaStageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroMotionFrameRef = useRef<number | null>(null);

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
    window.addEventListener("scroll", onScroll, { passive: true });

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

  useEffect(() => {
    const updateHeroMotion = () => {
      if (!showcaseRef.current || !mediaStageRef.current || !videoRef.current) return;

      const root = showcaseRef.current;
      const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
      const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;
      const ease = (value: number) => 1 - Math.pow(1 - value, 3);
      const smooth = (value: number) => value * value * (3 - 2 * value);

      const isDesktop = window.innerWidth > 768;
      const stageRect = mediaStageRef.current.getBoundingClientRect();
      const travel = Math.max(stageRect.height - window.innerHeight, 1);
      const progress = clamp(-stageRect.top / travel, 0, 1);

      const zoomEnd = 0.22;
      const holdEnd = 0.82;
      const zoomPhase = ease(clamp(progress / zoomEnd, 0, 1));
      const holdPhase = smooth(clamp((progress - zoomEnd) / (holdEnd - zoomEnd), 0, 1));
      const exitPhase = ease(clamp((progress - holdEnd) / (1 - holdEnd), 0, 1));

      const holdMicroScale = Math.sin(holdPhase * Math.PI) * 0.02;
      const holdMicroShift = Math.sin(holdPhase * Math.PI) * -10;

      const shift =
        progress < zoomEnd
          ? lerp(48, -86, zoomPhase)
          : progress < holdEnd
            ? lerp(-86, -112, holdPhase) + holdMicroShift
            : lerp(-112, -138, exitPhase);
      const scale =
        progress < zoomEnd
          ? lerp(0.9, 1.28, zoomPhase)
          : progress < holdEnd
            ? lerp(1.28, 1.34, holdPhase) + holdMicroScale
            : lerp(1.34, 1.38, exitPhase);
      const opacity =
        progress < zoomEnd ? lerp(0.92, 1, zoomPhase) : progress < holdEnd ? 1 : lerp(1, 0.985, exitPhase);
      const tilt =
        progress < zoomEnd ? lerp(2.4, 0.2, zoomPhase) : progress < holdEnd ? 0.2 : lerp(0.2, 0, exitPhase);
      const radius =
        progress < zoomEnd ? lerp(28, 8, zoomPhase) : progress < holdEnd ? lerp(8, 2, holdPhase) : lerp(2, 0, exitPhase);
      const glow =
        progress < zoomEnd ? lerp(0.36, 0.58, zoomPhase) : progress < holdEnd ? 0.58 : lerp(0.58, 0.3, exitPhase);
      const shadow =
        progress < zoomEnd ? lerp(0.24, 0.4, zoomPhase) : progress < holdEnd ? 0.4 : lerp(0.4, 0.28, exitPhase);
      const backdrop =
        progress < zoomEnd ? lerp(0, 0.26, zoomPhase) : progress < holdEnd ? 0.26 : lerp(0.26, 0.08, exitPhase);

      root.style.setProperty("--hero-video-shift", `${shift}px`);
      root.style.setProperty("--hero-video-scale", `${scale}`);
      root.style.setProperty("--hero-video-opacity", `${opacity}`);
      root.style.setProperty("--hero-video-tilt", `${tilt}deg`);
      root.style.setProperty("--hero-video-radius", `${radius}px`);
      root.style.setProperty("--hero-video-glow-opacity", `${glow}`);
      root.style.setProperty("--hero-video-shadow-strength", `${shadow}`);
      root.style.setProperty("--hero-video-hold-progress", `${holdPhase}`);
      root.style.setProperty("--hero-backdrop-opacity", `${backdrop}`);

      const video = videoRef.current;
      if (!isDesktop) {
        root.style.setProperty("--hero-video-shift", "0px");
        root.style.setProperty("--hero-video-scale", "1");
        root.style.setProperty("--hero-video-opacity", "1");
        root.style.setProperty("--hero-video-tilt", "0deg");
        root.style.setProperty("--hero-video-radius", "20px");
        root.style.setProperty("--hero-video-glow-opacity", "0.18");
        root.style.setProperty("--hero-video-shadow-strength", "0.22");
        root.style.setProperty("--hero-video-hold-progress", "0");
        root.style.setProperty("--hero-backdrop-opacity", "0");

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
        const duration = Number.isFinite(video.duration) && video.duration > 0 ? Math.min(video.duration, 8) : 8;
        const scrubProgress = clamp((progress - zoomEnd) / (holdEnd - zoomEnd), 0, 1);
        const targetTime = duration * scrubProgress;

        if (Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime;
        }
      }

      heroMotionFrameRef.current = null;
    };

    const onScroll = () => {
      if (heroMotionFrameRef.current !== null) return;
      heroMotionFrameRef.current = window.requestAnimationFrame(updateHeroMotion);
    };

    updateHeroMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeroMotion);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeroMotion);
      if (heroMotionFrameRef.current !== null) {
        window.cancelAnimationFrame(heroMotionFrameRef.current);
      }
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

        <div className="hero-copy">
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
        </div>

        <div className="hero-showcase" ref={showcaseRef}>
          <div className="hero-media-stage" ref={mediaStageRef}>
            <div className="hero-media-backdrop" />
            <div ref={nextRevealRef()} className="hero-dashboard-wrap fade">
              <div className="hero-dashboard-sticky">
                <div className="hero-dashboard-motion">
                  <div className="hero-dashboard">
                    <div className="hero-dashboard-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <video
                      ref={videoRef}
                      className="hero-dashboard-video"
                      src="/hero-demo.mp4"
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                </div>
              </div>
            </div>
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
              <div
                key={plan.name}
                ref={nextRevealRef()}
                className={`price-card fade ${plan.highlighted ? "highlight" : ""}`}
              >
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
      <section className="faq" id="faq">
        <div className="section-center">
          <div className="section-eyebrow">Domande frequenti</div>
          <h2 className="section-title">FAQ</h2>
        </div>

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
  );
}
