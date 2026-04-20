"use client";

// ==========================================
// 01. IMPORTS
// ==========================================
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import ProductJourneySection from "./ProductJourneySection";

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

type FooterProps = {
  opacity: MotionValue<number>;
  borderRadius: MotionValue<string>;
  revealProgress: MotionValue<number>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
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
  const heroHeadlinePhrases = useMemo(
    () => ["ADV manager", "Meta publisher", "SMM", "content planner", "AI assistant"],
    []
  );
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineVisible, setHeadlineVisible] = useState(true);

  // ==========================================
  // 06. REVEAL ANIMATION REFS
  // ==========================================
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const mediaStageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroMotionFrameRef = useRef<number | null>(null);
  const headlineLineRef = useRef<HTMLSpanElement | null>(null);
  const headlineSlotRef = useRef<HTMLSpanElement | null>(null);
  const headlineSubjectRef = useRef<HTMLSpanElement | null>(null);
  const footerRevealRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: footerRevealProgress } = useScroll({
    target: footerRevealRef,
    offset: ["start end", "end end"],
  });
  const footerSceneProgress = useTransform(footerRevealProgress, (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    const eased = clamped * clamped * (3 - 2 * clamped);
    const firstSettle = 0.035 * Math.exp(-Math.pow((clamped - 0.32) / 0.085, 2));
    const secondSettle = 0.045 * Math.exp(-Math.pow((clamped - 0.68) / 0.1, 2));
    return Math.min(Math.max(eased - firstSettle - secondSettle, 0), 1);
  });
  const footerY = useTransform(footerSceneProgress, [0, 0.42, 1], [34, 10, 0]);
  const footerOpacity = useTransform(footerSceneProgress, [0, 0.28, 1], [0.9, 0.96, 1]);
  const footerScale = useTransform(footerSceneProgress, [0, 0.5, 1], [0.985, 1, 1]);
  const footerBorderRadius = useTransform(footerSceneProgress, [0, 0.54, 1], ["30px", "18px", "0px"]);

  const setRevealRef = (index: number) => (el: HTMLElement | null) => {
    revealRefs.current[index] = el;
  };

  let revealIndex = 0;
  const nextRevealRef = () => {
    const idx = revealIndex++;
    return setRevealRef(idx);
  };

  // ==========================================
  // 07. CONTENT - PRICING
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
  // 08. CONTENT - FAQ
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
  // 09. EFFECT - NAV SCROLL + REVEAL ON SCROLL
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
  // 10. EFFECT - HERO BADGE TEXT ROTATION
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

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineVisible(false);

      setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % heroHeadlinePhrases.length);
        setHeadlineVisible(true);
      }, 240);
    }, 2600);

    return () => clearInterval(interval);
  }, [heroHeadlinePhrases.length]);

  useLayoutEffect(() => {
    const updateHeadlineOffset = () => {
      if (!headlineLineRef.current || !headlineSlotRef.current || !headlineSubjectRef.current) return;

      const slotWidth = headlineSlotRef.current.offsetWidth;
      const subjectWidth = headlineSubjectRef.current.offsetWidth;
      const offset = Math.max((slotWidth - subjectWidth) / 2, 0);

      headlineLineRef.current.style.setProperty("--hero-title-optical-offset", `${offset}px`);
    };

    updateHeadlineOffset();
    window.addEventListener("resize", updateHeadlineOffset);

    return () => window.removeEventListener("resize", updateHeadlineOffset);
  }, [headlineIndex, headlineVisible]);

  // ==========================================
  // 11. RENDER
  // ==========================================
  return (
    <div className="uppilot-page">
      <motion.main className="page-main">
        <div className="page-content">
        {/* ========================================== */}
        {/* 14. NAVBAR */}
        {/* ========================================== */}
        <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav" aria-label="Navigazione principale">
          <div className="nav-logo">
            <div className="nav-icon">UP</div>
            <span className="nav-name">UpPilot</span>
          </div>

          <div className="nav-links">
            <a href="#funzionalita">Funzionalità</a>
            <a href="#come-funziona">Come funziona</a>
            <a href="#pricing">Prezzi</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nav-actions">
            <a href="#pricing" className="nav-cta">
              Prova UpPilot
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

          <h1 ref={nextRevealRef()} className="fade hero-title">
            <span ref={headlineLineRef} className="hero-title-line" aria-live="polite">
              <span className="hero-title-line-content">
                <span className="hero-title-fixed">Il tuo</span>
                <span ref={headlineSlotRef} className="hero-title-slot">
                  <span className="hero-title-dynamic-wrap">
                    <span
                      ref={headlineSubjectRef}
                      className={`hero-title-dynamic ${headlineVisible ? "is-visible" : "is-hidden"}`}
                    >
                      {heroHeadlinePhrases[headlineIndex]}
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span className="hero-title-static">per i social media</span>
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
      {/* 16. PRODUCT JOURNEY */}
      {/* ========================================== */}
        <ProductJourneySection />

      {/* ========================================== */}
      {/* 17. PRICING */}
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
      {/* 18. TESTIMONIAL */}
      {/* ========================================== */}
        <section className="testimonial">
        <div ref={nextRevealRef()} className="testimonial-inner fade">
          <div className="testimonial-quote-mark">&quot;</div>
          <blockquote>
            Con UpPilot ho eliminato 3 ore al giorno di lavoro manuale. Carico il piano editoriale il lunedì e per
            tutta la settimana si pubblica da solo.
          </blockquote>
          <div className="testimonial-author">Social Media Manager</div>
          <div className="testimonial-role">Agenzia, 8 clienti</div>
        </div>
        </section>

      {/* ========================================== */}
      {/* 19. FAQ */}
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
      {/* 20. CTA */}
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
        </div>

        <section ref={footerRevealRef} className="footer-scene" aria-label="Finale UpPilot">
          <Footer
            opacity={footerOpacity}
            borderRadius={footerBorderRadius}
            revealProgress={footerSceneProgress}
            scale={footerScale}
            y={footerY}
          />

          <div className="footer-reveal-spacer" aria-hidden="true" />
        </section>
      </motion.main>
    </div>
  );
}

function Footer({ opacity, borderRadius, revealProgress, scale, y }: FooterProps) {
  const panelY = useTransform(revealProgress, [0, 0.34, 0.68, 1], [84, 36, 10, 0]);
  const panelScale = useTransform(revealProgress, [0, 0.38, 0.72, 1], [0.965, 0.995, 1.018, 1.028]);
  const brandY = useTransform(revealProgress, [0, 0.45, 1], [58, 22, -8]);
  const brandOpacity = useTransform(revealProgress, [0, 0.34, 0.78, 1], [0.62, 0.82, 0.96, 1]);
  const headlineY = useTransform(revealProgress, [0, 0.36, 0.72, 1], [70, 26, -4, -14]);
  const headlineOpacity = useTransform(revealProgress, [0, 0.3, 0.78, 1], [0.72, 0.9, 0.98, 1]);
  const ctaY = useTransform(revealProgress, [0, 0.42, 0.78, 1], [82, 34, 8, -2]);
  const ctaOpacity = useTransform(revealProgress, [0, 0.38, 0.82, 1], [0.62, 0.84, 0.98, 1]);
  const navigationY = useTransform(revealProgress, [0, 0.48, 0.8, 1], [92, 42, 12, 0]);
  const navigationOpacity = useTransform(revealProgress, [0, 0.42, 0.84, 1], [0.6, 0.82, 0.98, 1]);
  const navigationScale = useTransform(revealProgress, [0, 0.5, 0.82, 1], [0.975, 1, 1.018, 1.018]);

  return (
    <motion.footer
      className="site-footer"
      style={{
        borderRadius,
        opacity,
        scale,
        y,
      }}
    >
      <motion.div className="footer-panel" style={{ scale: panelScale, y: panelY }}>
        <div className="footer-hero">
          <motion.div className="footer-brand" style={{ opacity: brandOpacity, y: brandY }}>
            <div className="footer-brand-top">
              <div className="nav-icon footer-icon">UP</div>
              <span className="footer-brand-name">UpPilot</span>
            </div>
            <p>
              Piattaforma di automazione social media per SMM e agenzie italiane. Carica, programma, pubblica — in
              automatico.
            </p>
            <a href="mailto:info@uppilot.com">info@uppilot.com</a>
            <div className="footer-social-row" aria-label="Social links">
              <a href="#" aria-label="Instagram">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.15-2.32a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5.2 8.9h3.35V20H5.2V8.9Zm1.68-5.4a1.94 1.94 0 1 1 0 3.88 1.94 1.94 0 0 1 0-3.88ZM10.55 8.9h3.2v1.52h.05c.45-.86 1.55-1.77 3.2-1.77 3.42 0 4.05 2.25 4.05 5.18V20H17.7v-5.47c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.9V20h-3.23V8.9Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M13.9 10.47 21.35 2h-1.77l-6.47 7.36L7.95 2H2l7.82 11.16L2 22h1.77l6.83-7.76L16.05 22H22l-8.1-11.53Zm-2.42 2.75-.79-1.1L4.39 3.31h2.71l5.08 7.11.79 1.1 6.61 9.25h-2.71l-5.39-7.55Z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M15.62 2c.34 2.72 1.86 4.35 4.5 4.52v3.04a7.7 7.7 0 0 1-4.42-1.38v6.75c0 3.42-2.28 6.07-5.86 6.07-3.17 0-5.96-2.05-5.96-5.58 0-3.86 3.4-6.07 6.98-5.43v3.18c-1.62-.5-3.74.34-3.74 2.19 0 1.52 1.3 2.4 2.72 2.4 1.64 0 2.55-.97 2.55-2.84V2h3.23Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <div className="footer-statement">
            <span>Final destination</span>
            <motion.h2 style={{ opacity: headlineOpacity, y: headlineY }}>
              Entra nel workflow che pubblica da solo.
            </motion.h2>
            <motion.a href="#pricing" className="footer-primary-link" style={{ opacity: ctaOpacity, y: ctaY }}>
              Inizia gratis
            </motion.a>
          </div>
        </div>

        <motion.div className="footer-grid" style={{ opacity: navigationOpacity, scale: navigationScale, y: navigationY }}>
          <div className="footer-col">
            <span className="footer-card-index">01</span>
            <h5>Prodotto</h5>
            <a href="#">Funzionalità</a>
            <a href="#">Pricing</a>
            <a href="#">Demo</a>
            <a href="#">API Docs</a>
          </div>

          <div className="footer-col">
            <span className="footer-card-index">02</span>
            <h5>Azienda</h5>
            <a href="#">Chi siamo</a>
            <a href="#">Blog</a>
            <a href="#">Contatti</a>
            <a href="#">Lavora con noi</a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <span>© 2026 UpPilot. Tutti i diritti riservati.</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Termini</a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
