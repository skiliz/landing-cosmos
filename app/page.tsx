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
  description: string;
  monthly: number;
  yearly?: number;
  suffix?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
};

type PricingCategory = "creator" | "agency";

type FaqItem = {
  q: string;
  a: string;
};

type FooterProps = {
  opacity: MotionValue<number>;
  borderRadius: MotionValue<string>;
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [annual, setAnnual] = useState(false);
  const [pricingCategory, setPricingCategory] = useState<PricingCategory>("creator");
  const [hoveredPricingPlan, setHoveredPricingPlan] = useState<number | null>(null);
  const [openMobilePlan, setOpenMobilePlan] = useState(1);
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
  const [typedHeadline, setTypedHeadline] = useState("");

  // ==========================================
  // 06. REVEAL ANIMATION REFS
  // ==========================================
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const mediaStageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroMotionFrameRef = useRef<number | null>(null);
  const pricingHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousScrollYRef = useRef(0);
  const headlineLineRef = useRef<HTMLSpanElement | null>(null);
  const headlineSlotRef = useRef<HTMLSpanElement | null>(null);
  const headlineSubjectRef = useRef<HTMLSpanElement | null>(null);
  const headlineMeasureRef = useRef<HTMLSpanElement | null>(null);
  const footerRevealRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: footerRevealProgress } = useScroll({
    target: footerRevealRef,
    offset: ["start end", "end end"],
  });
  const footerSceneProgress = useTransform(footerRevealProgress, (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    return clamped * clamped * (3 - 2 * clamped);
  });
  const footerY = useTransform(footerSceneProgress, [0, 1], [10, 0]);
  const footerOpacity = useTransform(footerSceneProgress, [0, 1], [0.96, 1]);
  const footerScale = useTransform(footerSceneProgress, [0, 1], [0.997, 1]);
  const footerBorderRadius = useTransform(footerSceneProgress, [0, 1], ["18px", "0px"]);

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
  const pricingGroups: Record<PricingCategory, PricePlan[]> = useMemo(
    () => ({
      creator: [
        {
          name: "Gratuito",
          description: "Per provare il workflow UpPilot e organizzare i primi contenuti.",
          monthly: 0,
          suffix: "/mese",
          features: [
            "1 brand",
            "30 post al mese",
            "Importazione CSV",
            "Anteprima Instagram e Facebook",
            "Calendario base",
          ],
          cta: "Inizia gratis",
        },
        {
          name: "Pro",
          description: "Per creator e social manager che vogliono pubblicare con continuità.",
          monthly: 29,
          yearly: 23,
          suffix: "/mese",
          features: [
            "3 brand attivi",
            "Post illimitati",
            "Approvazione cliente",
            "Avvisi WhatsApp",
            "AI Studio con 100 crediti",
            "Analisi competitor",
          ],
          highlighted: true,
          badge: "Consigliato",
          cta: "Prova UpPilot",
        },
        {
          name: "Studio",
          description: "Per team leggeri che gestiscono più brand con un flusso pulito.",
          monthly: 49,
          yearly: 39,
          suffix: "/mese",
          features: [
            "6 brand attivi",
            "Sincronizzazione Google Sheets",
            "Abbinamento media automatico",
            "Link approvazione avanzati",
            "AI Studio con 250 crediti",
            "Supporto prioritario",
          ],
          cta: "Richiedi accesso",
        },
      ],
      agency: [
        {
          name: "Avvio",
          description: "Per piccole agenzie che vogliono centralizzare piano, revisione e pubblicazione.",
          monthly: 59,
          yearly: 47,
          suffix: "/mese",
          features: [
            "10 clienti",
            "Post illimitati",
            "Importazione CSV e Sheets",
            "Approvazioni senza login",
            "Avvisi WhatsApp",
            "AI Studio con 500 crediti",
          ],
          cta: "Contattaci",
        },
        {
          name: "Crescita",
          description: "Per agenzie in crescita con più clienti, cicli di approvazione e automazioni.",
          monthly: 129,
          yearly: 103,
          suffix: "/mese",
          features: [
            "25 clienti",
            "Flussi multi-brand",
            "Pubblicazione automatica su Meta",
            "Analisi competitor avanzata",
            "AI Studio con 1.500 crediti",
            "Supporto prioritario",
          ],
          highlighted: true,
          badge: "Più scelto",
          cta: "Richiedi accesso",
        },
        {
          name: "Scala",
          description: "Per strutture con volumi elevati, team dedicati e necessità operative avanzate.",
          monthly: 249,
          yearly: 199,
          suffix: "/mese",
          features: [
            "Clienti illimitati",
            "Ruoli e permessi avanzati",
            "Onboarding guidato",
            "Strategia AI personalizzata",
            "Report operativi",
            "Canale supporto dedicato",
          ],
          cta: "Parla con noi",
        },
      ],
    }),
    []
  );

  const pricing = pricingGroups[pricingCategory];
  const activePricingPlan = hoveredPricingPlan;

  const previewPricingPlan = (planIndex: number) => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    if (pricingHoverTimeoutRef.current) {
      clearTimeout(pricingHoverTimeoutRef.current);
    }

    if (planIndex === activePricingPlan) return;

    pricingHoverTimeoutRef.current = setTimeout(() => {
      setHoveredPricingPlan(planIndex);
      pricingHoverTimeoutRef.current = null;
    }, 95);
  };

  const clearPricingPreview = () => {
    if (pricingHoverTimeoutRef.current) {
      clearTimeout(pricingHoverTimeoutRef.current);
      pricingHoverTimeoutRef.current = null;
    }

    if (hoveredPricingPlan === null) return;

    setHoveredPricingPlan(null);
  };

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
  // 09. EFFECT - FIXED HEADER SCROLL DIRECTION
  // ==========================================
  useEffect(() => {
    const deltaThreshold = 6;
    const topThreshold = 90;
    previousScrollYRef.current = Math.max(window.scrollY, 0);

    const onScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const previousScrollY = previousScrollYRef.current;
      const scrollDelta = currentScrollY - previousScrollY;

      setScrolled(currentScrollY > 40);

      if (currentScrollY <= topThreshold) {
        setIsHeaderVisible(true);
        previousScrollYRef.current = currentScrollY;
        return;
      }

      if (Math.abs(scrollDelta) < deltaThreshold) return;

      if (currentScrollY < previousScrollY) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      previousScrollYRef.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ==========================================
  // 10. EFFECT - REVEAL ON SCROLL
  // ==========================================
  useEffect(() => {
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
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (pricingHoverTimeoutRef.current) {
        clearTimeout(pricingHoverTimeoutRef.current);
      }
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
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isCompactDesktop = viewportWidth <= 1280 || viewportHeight <= 820;
      const isMediumDesktop = !isCompactDesktop && (viewportWidth <= 1440 || viewportHeight <= 900);
      const motionRange = isCompactDesktop ? 0.46 : isMediumDesktop ? 0.54 : 0.62;
      const shiftFactor = isCompactDesktop ? 0.44 : isMediumDesktop ? 0.68 : 1;
      const scaleFactor = isCompactDesktop ? 0.42 : isMediumDesktop ? 0.66 : 1;
      const tiltFactor = isCompactDesktop ? 0.42 : isMediumDesktop ? 0.68 : 1;
      const surfaceFactor = isCompactDesktop ? 0.68 : isMediumDesktop ? 0.82 : 1;
      const stageRect = mediaStageRef.current.getBoundingClientRect();
      const travel = Math.max(stageRect.height - window.innerHeight, 1);
      const rawProgress = clamp(-stageRect.top / travel, 0, 1);
      const progress = clamp(rawProgress / motionRange, 0, 1);

      const zoomEnd = 0.28;
      const holdEnd = 0.72;
      const zoomPhase = ease(clamp(progress / zoomEnd, 0, 1));
      const holdPhase = smooth(clamp((progress - zoomEnd) / (holdEnd - zoomEnd), 0, 1));
      const exitPhase = ease(clamp((progress - holdEnd) / (1 - holdEnd), 0, 1));

      const holdMicroScale = Math.sin(holdPhase * Math.PI) * 0.02 * scaleFactor;
      const holdMicroShift = Math.sin(holdPhase * Math.PI) * -10 * shiftFactor;
      const adaptScale = (value: number) => 1 + (value - 1) * scaleFactor;

      const baseShift =
        progress < zoomEnd
          ? lerp(48, -86, zoomPhase)
          : progress < holdEnd
            ? lerp(-86, -112, holdPhase) + holdMicroShift
            : lerp(-112, -138, exitPhase);
      const shift = baseShift * shiftFactor;
      const scale =
        progress < zoomEnd
          ? lerp(adaptScale(0.9), adaptScale(1.28), zoomPhase)
          : progress < holdEnd
            ? lerp(adaptScale(1.28), adaptScale(1.34), holdPhase) + holdMicroScale
            : lerp(adaptScale(1.34), adaptScale(1.38), exitPhase);
      const opacity =
        progress < zoomEnd ? lerp(0.92, 1, zoomPhase) : progress < holdEnd ? 1 : lerp(1, 0.985, exitPhase);
      const tilt =
        progress < zoomEnd
          ? lerp(2.4 * tiltFactor, 0.2 * tiltFactor, zoomPhase)
          : progress < holdEnd
            ? 0.2 * tiltFactor
            : lerp(0.2 * tiltFactor, 0, exitPhase);
      const radius =
        progress < zoomEnd ? lerp(28, 8, zoomPhase) : progress < holdEnd ? lerp(8, 2, holdPhase) : lerp(2, 0, exitPhase);
      const glow =
        progress < zoomEnd
          ? lerp(0.36, 0.58 * surfaceFactor, zoomPhase)
          : progress < holdEnd
            ? 0.58 * surfaceFactor
            : lerp(0.58 * surfaceFactor, 0.3, exitPhase);
      const shadow =
        progress < zoomEnd
          ? lerp(0.24, 0.4 * surfaceFactor, zoomPhase)
          : progress < holdEnd
            ? 0.4 * surfaceFactor
            : lerp(0.4 * surfaceFactor, 0.28, exitPhase);
      const backdrop =
        progress < zoomEnd
          ? lerp(0, 0.26 * surfaceFactor, zoomPhase)
          : progress < holdEnd
            ? 0.26 * surfaceFactor
            : lerp(0.26 * surfaceFactor, 0.08, exitPhase);

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

        if (Math.abs(video.currentTime - targetTime) > 0.08) {
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
    const phrase = heroHeadlinePhrases[headlineIndex];
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    setTypedHeadline("");

    const typeNextCharacter = () => {
      charIndex += 1;
      setTypedHeadline(phrase.slice(0, charIndex));

      if (charIndex < phrase.length) {
        timeoutId = setTimeout(typeNextCharacter, 72);
        return;
      }

      timeoutId = setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % heroHeadlinePhrases.length);
      }, 1450);
    };

    timeoutId = setTimeout(typeNextCharacter, 260);

    return () => clearTimeout(timeoutId);
  }, [headlineIndex, heroHeadlinePhrases]);

  useLayoutEffect(() => {
    const updateHeadlineOffset = () => {
      if (!headlineLineRef.current || !headlineSlotRef.current || !headlineMeasureRef.current) return;

      const slotWidth = headlineSlotRef.current.offsetWidth;
      const subjectWidth = headlineMeasureRef.current.offsetWidth;
      const offset = Math.max((slotWidth - subjectWidth) / 2, 0);

      headlineLineRef.current.style.setProperty("--hero-title-optical-offset", `${offset}px`);
    };

    updateHeadlineOffset();
    window.addEventListener("resize", updateHeadlineOffset);

    return () => window.removeEventListener("resize", updateHeadlineOffset);
  }, [headlineIndex, heroHeadlinePhrases]);

  // ==========================================
  // 11. RENDER
  // ==========================================
  return (
    <div className="uppilot-page">
      <header className={`nav-shell ${isHeaderVisible ? "is-visible" : "is-hidden"} ${scrolled ? "is-scrolled" : ""}`}>
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
      </header>

      <motion.main className="page-main">
        <div className="page-content">
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
                      className="hero-title-dynamic is-visible"
                    >
                      {typedHeadline}
                      <span className="hero-title-cursor" aria-hidden="true" />
                    </span>
                    <span ref={headlineMeasureRef} className="hero-title-measure" aria-hidden="true">
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
                    <div className="hero-dashboard-video-frame">
                      <video
                        ref={videoRef}
                        className="hero-dashboard-video"
                        src="/hero-demo.mp4"
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    </div>
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

      {/* ========================================== */}
      {/* 17. PRICING */}
      {/* ========================================== */}
        <section className="section pricing-section" id="pricing">
        <div ref={nextRevealRef()} className="section-center fade">
          <div className="section-eyebrow">Prezzi</div>
          <h2 className="section-title">Prezzi chiari, pensati per ogni fase di crescita</h2>
          <p className="section-copy">
            Da creator indipendenti ad agenzie strutturate: scegli il workflow che ti lascia più spazio per
            strategia, contenuti e clienti.
          </p>

          <div className="pricing-controls" aria-label="Opzioni prezzo">
            <div className="pricing-segment" role="tablist" aria-label="Categoria piano">
              {(["creator", "agency"] as PricingCategory[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={pricingCategory === category}
                  className={pricingCategory === category ? "active" : ""}
                  onClick={() => {
                    if (pricingHoverTimeoutRef.current) {
                      clearTimeout(pricingHoverTimeoutRef.current);
                      pricingHoverTimeoutRef.current = null;
                    }

                    setPricingCategory(category);
                    setHoveredPricingPlan(null);
                    setOpenMobilePlan(1);
                  }}
                >
                  {category === "creator" ? "Creator" : "Agency"}
                </button>
              ))}
            </div>

            <div className="pricing-toggle pricing-toggle-top" aria-label="Periodo di fatturazione">
              <button type="button" className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>
                Mensile
              </button>
              <button type="button" className={annual ? "active" : ""} onClick={() => setAnnual(true)}>
                Annuale <span className="annual-discount">-20%</span>
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className={`pricing-stage pricing-stage-desktop ${hoveredPricingPlan !== null ? "is-hover-previewing" : ""}`}
          id="pricing-grid"
          aria-live="polite"
          onMouseLeave={clearPricingPreview}
        >
          {pricing.map((plan, index) => {
            const shownPrice = plan.yearly !== undefined && annual ? plan.yearly : plan.monthly;
            const isFocused = activePricingPlan === index;
            const galleryPosition = index === 0 ? "left" : index === 1 ? "center" : "right";

            return (
              <motion.div
                key={`${pricingCategory}-${plan.name}`}
                ref={nextRevealRef()}
                aria-current={isFocused ? "true" : undefined}
                onMouseEnter={() => previewPricingPlan(index)}
                className={`price-card fade ${plan.highlighted ? "highlight" : ""} ${
                  isFocused ? "is-focused" : "is-neutral"
                } is-${galleryPosition}`}
              >
                <div className="price-card-inner">
                  {plan.badge && <div className="price-card-badge">{plan.badge}</div>}

                  <div className="price-plan">{plan.name}</div>
                  <p className="price-description">{plan.description}</p>

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
              </motion.div>
            );
          })}
        </motion.div>

        <div className="pricing-mobile-stack" aria-live="polite">
          {pricing.map((plan, index) => {
            const shownPrice = plan.yearly !== undefined && annual ? plan.yearly : plan.monthly;
            const isOpen = openMobilePlan === index;
            const detailsId = `mobile-pricing-${pricingCategory}-${index}`;

            return (
              <div
                key={`mobile-${pricingCategory}-${plan.name}`}
                className={`mobile-price-card ${plan.highlighted ? "highlight" : ""} ${isOpen ? "is-open" : ""}`}
              >
                <div className="price-card-inner">
                  <button
                    type="button"
                    className="mobile-price-trigger"
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                    onClick={() => setOpenMobilePlan(index)}
                  >
                    <span>
                      {plan.badge && <span className="price-card-badge">{plan.badge}</span>}
                      <span className="price-plan">{plan.name}</span>
                    </span>

                    <span className="mobile-price-summary">
                      <span>{`€${shownPrice}`}</span>
                      <span>{plan.suffix ?? "/mese"}</span>
                    </span>
                  </button>

                  <motion.div
                    id={detailsId}
                    className="mobile-price-details"
                    initial={false}
                    animate={isOpen ? "open" : "collapsed"}
                    variants={{
                      open: { height: "auto", opacity: 1, marginTop: 20 },
                      collapsed: { height: 0, opacity: 0, marginTop: 0 },
                    }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={!isOpen}
                  >
                    <div className="mobile-price-details-inner">
                      <p className="price-description">{plan.description}</p>

                      <div className="price-features">
                        {plan.features.map((feature) => (
                          <div key={feature} className="price-feature">
                            <div className="price-check">✓</div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <a
                        href="#"
                        className={`price-cta ${plan.highlighted ? "primary" : "outline"}`}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {plan.cta}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={nextRevealRef()} className="founding-banner fade">
          <div>
            <h4>Accesso fondatori</h4>
            <p>€19/mese bloccato per sempre. Disponibile per i primi 30 account.</p>
          </div>
          <a href="#" className="btn-primary founding-btn">
            Riserva il tuo accesso
          </a>
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
        </div>

        <section ref={footerRevealRef} className="footer-scene" aria-label="Finale UpPilot">
          <Footer
            opacity={footerOpacity}
            borderRadius={footerBorderRadius}
            scale={footerScale}
            y={footerY}
          />

          <div className="footer-reveal-spacer" aria-hidden="true" />
        </section>
      </motion.main>
    </div>
  );
}

function Footer({ opacity, borderRadius, scale, y }: FooterProps) {
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
      <div className="footer-panel">
        <div className="footer-hero">
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
            <div className="footer-social-row" aria-label="Social links">
              <a
                href="https://instagram.com/uppilot.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.15-2.32a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/uppilot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.75c0-.92.26-1.55 1.58-1.55h1.68V4.33A22.5 22.5 0 0 0 14.3 4.2c-2.45 0-4.13 1.5-4.13 4.24v2.36H7.5V14h2.67v8h3.33Z" />
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
          </div>

          <div className="footer-statement">
            <span>Final destination</span>
            <h2>Entra nel workflow che pubblica da solo.</h2>
            <a href="#pricing" className="footer-primary-link">
              Inizia gratis
            </a>
          </div>
        </div>

        <div className="footer-grid">
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
        </div>

        <div className="footer-bottom">
          <span>© 2026 UpPilot. Tutti i diritti riservati.</span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/termini">Termini</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
