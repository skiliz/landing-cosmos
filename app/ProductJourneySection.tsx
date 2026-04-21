"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type JourneyStep = {
  step: string;
  phase: string;
  title: string;
  description: string;
  metric: string;
  accent: string;
  tools: string[];
  mockup: "import" | "media" | "preview" | "approval" | "publish" | "alerts" | "ai";
};

const journeySteps: JourneyStep[] = [
  {
    step: "01",
    phase: "IMPORTA",
    title: "Porta dentro il piano editoriale in un attimo",
    description: "Carica un CSV o collega Google Sheets. Ogni riga diventa un contenuto programmato, ordinato e pronto da gestire.",
    metric: "42 righe mappate",
    accent: "violet",
    tools: ["CSV", "Sheets"],
    mockup: "import",
  },
  {
    step: "02",
    phase: "MEDIA",
    title: "Collega gli asset senza disordine",
    description: "Carica i file media e lascia che UpPilot abbini creatività, caption e date in un flusso pulito.",
    metric: "96% abbinati automaticamente",
    accent: "blue",
    tools: ["Media", "Cloud"],
    mockup: "media",
  },
  {
    step: "03",
    phase: "ANTEPRIMA",
    title: "Vedi il post prima che vada online",
    description: "Controlla caption, creatività, formato e orario in un’anteprima chiara, prima di pubblicare.",
    metric: "IG + FB pronti",
    accent: "violet",
    tools: ["Instagram", "Meta"],
    mockup: "preview",
  },
  {
    step: "04",
    phase: "APPROVAZIONE",
    title: "Approvazione cliente, senza attrito",
    description: "Condividi un link dedicato: il cliente rivede e approva i contenuti rapidamente, senza creare account.",
    metric: "Nessun login richiesto",
    accent: "blue",
    tools: ["Link", "Clienti"],
    mockup: "approval",
  },
  {
    step: "05",
    phase: "PUBBLICA",
    title: "Lascia che UpPilot pubblichi per te",
    description: "Dopo l’approvazione, il motore monitora, sincronizza e pubblica su Meta senza passaggi manuali.",
    metric: "Sync Meta attiva",
    accent: "violet",
    tools: ["Meta", "Autopilot"],
    mockup: "publish",
  },
  {
    step: "06",
    phase: "AVVISI",
    title: "Notifiche utili, solo quando servono",
    description:
      "Ricevi avvisi su pubblicazioni riuscite, problemi di consegna e token in scadenza senza controllare continuamente la dashboard.",
    metric: "Alert WhatsApp",
    accent: "blue",
    tools: ["WhatsApp", "Token"],
    mockup: "alerts",
  },
  {
    step: "07",
    phase: "AI STUDIO",
    title: "Strategia, scrittura e analisi nello stesso spazio",
    description: "Genera caption, costruisci piani editoriali, analizza competitor e supporta il lavoro creativo con l’AI.",
    metric: "4 flussi AI",
    accent: "violet",
    tools: ["AI", "Strategia"],
    mockup: "ai",
  },
];

const premiumEase = [0.22, 1, 0.36, 1] as const;

const stepVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 18,
    y: 18,
    filter: "blur(5px)",
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.86, ease: premiumEase, staggerChildren: 0.08 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: premiumEase } },
};

export default function ProductJourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const steps = useMemo(() => journeySteps, []);

  useEffect(() => {
    let frame: number | null = null;

    const updateActiveStep = () => {
      const viewportAnchor = window.innerHeight * 0.48;
      let nextActiveStep = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((step, index) => {
        if (!step) return;

        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(stepCenter - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextActiveStep = index;
        }
      });

      setActiveStep((currentStep) => (currentStep === nextActiveStep ? currentStep : nextActiveStep));
      frame = null;
    };

    const requestUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateActiveStep);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section className="journey-section" id="funzionalita" aria-labelledby="journey-title">
      <div className="journey-bg" aria-hidden="true" />
      <div className="journey-intro" id="come-funziona">
        <motion.div
          className="journey-intro-inner"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="journey-eyebrow">Workflow prodotto</div>
          <h2 id="journey-title">Dalla pianificazione alla pubblicazione. Un unico flusso.</h2>
          <p>
            UpPilot trasforma ogni fase della pubblicazione social in un percorso ordinato: importa, abbina,
            controlla, approva, pubblica e migliora con l’AI.
          </p>
        </motion.div>
      </div>

      <div className="journey-shell">
        <div className="journey-steps">
          <motion.span
            className="journey-progress-line"
            aria-hidden="true"
            initial={false}
            animate={{ scaleY: Math.max(0.08, (activeStep + 0.45) / steps.length) }}
            transition={{ duration: 0.72, ease: premiumEase }}
          />
          {steps.map((step, index) => (
            <motion.article
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              key={step.step}
              className={`journey-step journey-step-${step.step} ${index % 2 === 1 ? "is-reversed" : ""} ${index < activeStep ? "is-past" : ""} ${
                activeStep === index ? "is-active" : ""
              } ${index === activeStep + 1 ? "is-next" : ""}`}
              variants={stepVariants}
              custom={index % 2 === 0 ? 1 : -1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28, margin: "0px 0px -12% 0px" }}
            >
              <div className="journey-copy">
                <motion.div className="journey-step-kicker" variants={childVariants}>
                  <span>STEP {step.step}</span>
                  <span>{step.phase}</span>
                </motion.div>
                <motion.h3 variants={childVariants}>{step.title}</motion.h3>
                <motion.p variants={childVariants}>{step.description}</motion.p>
                <motion.div className="journey-step-metric" variants={childVariants}>
                  <span />
                  {step.metric}
                </motion.div>
                <motion.div className="journey-tool-row" variants={childVariants} aria-label="Integrazioni e strumenti">
                  {step.tools.map((tool) => (
                    <span key={tool} className="journey-tool-chip">
                      <i aria-hidden="true">{toolIcon(tool)}</i>
                      {tool}
                    </span>
                  ))}
                </motion.div>
              </div>

              <div className="journey-step-timeline" aria-hidden="true">
                <span className="journey-node" />
                <span className="journey-flow-dot journey-flow-dot-a" />
                <span className="journey-flow-dot journey-flow-dot-b" />
              </div>

              <motion.div
                className={`journey-mockup-card accent-${step.accent} mockup-${step.mockup}`}
                variants={childVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div className="mockup-topbar">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>{step.phase}</p>
                </div>
                <Mockup step={step} />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function toolIcon(tool: string) {
  if (tool === "CSV") return "CSV";
  if (tool === "Sheets") return "G";
  if (tool === "Media") return "◐";
  if (tool === "Cloud") return "☁";
  if (tool === "Instagram") return "IG";
  if (tool === "Meta") return "M";
  if (tool === "Link") return "↗";
  if (tool === "Clienti") return "✓";
  if (tool === "Autopilot") return "A";
  if (tool === "WhatsApp") return "W";
  if (tool === "Token") return "T";
  if (tool === "AI") return "AI";
  return "•";
}

function Mockup({ step }: { step: JourneyStep }) {
  if (step.mockup === "import") return <ImportMockup />;
  if (step.mockup === "media") return <MediaMockup />;
  if (step.mockup === "preview") return <PreviewMockup />;
  if (step.mockup === "approval") return <ApprovalMockup />;
  if (step.mockup === "publish") return <PublishMockup />;
  if (step.mockup === "alerts") return <AlertsMockup />;
  return <AiMockup />;
}

function ImportMockup() {
  return (
    <div className="mockup-body import-mockup">
      <div className="mockup-toolbar">
        <span>content-plan-april.csv</span>
        <strong>Validato</strong>
      </div>
      <div className="mini-table">
        {[
          ["Data", "Caption", "Asset", "Stato"],
          ["22 apr", "Teaser lancio", "reel-01.mp4", "Mappato"],
          ["24 apr", "Nota founder", "post-hero.jpg", "Mappato"],
          ["26 apr", "Story offerta", "story-set.zip", "Pronto"],
        ].map((row, rowIndex) => (
          <div key={row.join("-")} className={rowIndex === 0 ? "is-head" : ""}>
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="import-live-bar" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}

function MediaMockup() {
  return (
    <div className="mockup-body media-mockup">
      <div className="asset-dropzone">
        <div className="asset-stack">
          <span />
          <span />
          <span />
        </div>
        <p>18 file media caricati</p>
      </div>
      <div className="media-match-rail" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="match-list">
        {["reel-01.mp4", "post-hero.jpg", "story-set.zip"].map((file, index) => (
          <div key={file}>
            <span>{file}</span>
            <i />
            <strong>{["Teaser lancio", "Nota founder", "Story offerta"][index]}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewMockup() {
  return (
    <div className="mockup-body preview-mockup">
      <div className="social-preview">
        <div className="preview-header">
          <span />
          <div>
            <strong>UpPilot</strong>
            <p>Programmato 24 apr - 10:30</p>
          </div>
        </div>
        <div className="preview-creative">
          <span>9:16</span>
        </div>
        <div className="preview-status" aria-hidden="true">
          <i />
          Pubblicabile
        </div>
        <div className="caption-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="preview-checks">
        <span>Caption</span>
        <span>Creatività</span>
        <span>Orario</span>
      </div>
    </div>
  );
}

function ApprovalMockup() {
  return (
    <div className="mockup-body approval-mockup">
      <div className="approval-link">
        <span>client.uppilot.app/review/april</span>
        <strong>Live</strong>
      </div>
      <div className="approval-card">
        <p>Piano editoriale di aprile</p>
        <h4>12 post pronti per revisione</h4>
        <div>
          <button type="button">Approva</button>
          <button type="button">Richiedi modifica</button>
        </div>
      </div>
      <div className="approval-flow" aria-hidden="true">
        <span />
        <i />
        <strong />
      </div>
      <div className="approval-activity">
        <span />
        Maria ha approvato 8 post su 12
      </div>
    </div>
  );
}

function PublishMockup() {
  return (
    <div className="mockup-body publish-mockup">
      <div className="abstract-publish-space">
        <div className="publish-depth-grid" aria-hidden="true" />
        <div className="floating-post floating-post-a">
          <span />
          <strong>Reel Instagram</strong>
          <i>9:16</i>
        </div>
        <div className="floating-post floating-post-b">
          <span />
          <strong>Post Facebook</strong>
          <i>1:1</i>
        </div>
        <div className="floating-post floating-post-c">
          <span />
          <strong>Story Meta</strong>
          <i>Live</i>
        </div>
        <div className="publish-deploy-line" aria-hidden="true">
          <span />
        </div>
        <div className="publish-state">
          <span />
          Pubblicato su Meta
        </div>
      </div>
    </div>
  );
}

function AlertsMockup() {
  return (
    <div className="mockup-body alerts-mockup">
      <div className="notification-network-space">
        <div className="network-line line-a" aria-hidden="true" />
        <div className="network-line line-b" aria-hidden="true" />
        <div className="network-line line-c" aria-hidden="true" />
        {["Meta", "Token", "UpPilot", "WhatsApp", "Cliente"].map((node, index) => (
          <div key={node} className={`network-node network-node-${index + 1}`}>
            <span />
            <strong>{node}</strong>
          </div>
        ))}
        <div className="network-signal" aria-hidden="true" />
        <div className="network-notification">
          <span>WhatsApp</span>
          <strong>Token Meta in scadenza</strong>
          <p>Avviso inviato al team.</p>
        </div>
      </div>
    </div>
  );
}

function AiMockup() {
  return (
    <div className="mockup-body ai-mockup">
      <div className="ai-prompt">
        <span>AI Studio</span>
        <p>Crea un piano contenuti di 30 giorni per un brand skincare premium.</p>
        <i aria-hidden="true" />
      </div>
      <div className="ai-grid">
        <div>Caption</div>
        <div>Piano</div>
        <div>Competitor</div>
        <div>Strategia</div>
      </div>
      <div className="ai-insight">
        <strong>Insight</strong>
        <p>I competitor pubblicano carousel educativi 2,4x più spesso prima dei lanci.</p>
      </div>
    </div>
  );
}
