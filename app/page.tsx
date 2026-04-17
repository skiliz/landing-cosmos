"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function UpPilotLandingPage() {
  const features = [
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
      text: "Notifiche WhatsApp per conferme di pubblicazione, errori, e scadenze token. In Italia WhatsApp è il canale business numero uno.",
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
  ];

  const steps = [
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
  ];

  const pricing = [
    {
      name: "Free",
      price: "€0",
      suffix: "/mese",
      features: ["1 cliente", "30 post/mese", "Calendario", "Anteprima IG/FB", "Import CSV"],
      highlighted: false,
      cta: "Inizia gratis",
    },
    {
      name: "Pro",
      price: "€29",
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
      price: "€59",
      suffix: "/mese",
      features: [
        "10 clienti",
        "Post illimitati",
        "AI Studio (500 crediti)",
        "Calendario condiviso",
        "Google Sheets sync",
        "Supporto prioritario",
      ],
      highlighted: false,
      cta: "Contattaci",
    },
  ];

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A12] font-sans text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-transparent bg-[#0A0A12]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] text-sm font-extrabold tracking-[-0.5px] text-white">
              UP
            </div>
            <span className="text-lg font-bold tracking-tight">UpPilot</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden items-center gap-8 md:flex"
          >
            <a href="#funzionalita" className="text-sm font-medium text-white/65 transition hover:text-white">
              Funzionalità
            </a>
            <a href="#come-funziona" className="text-sm font-medium text-white/65 transition hover:text-white">
              Come funziona
            </a>
            <a href="#pricing" className="text-sm font-medium text-white/65 transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-white/65 transition hover:text-white">
              FAQ
            </a>
            <a
              href="#pricing"
              className="rounded-full bg-[#6C5CE7] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(108,92,231,0.30)] transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(108,92,231,0.45)]"
            >
              Inizia gratis
            </a>
          </motion.nav>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center md:px-8">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(108,92,231,0.15)_0%,transparent_70%)]"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[10%] top-[60%] h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(162,155,254,0.08)_0%,transparent_70%)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/30 bg-[#6C5CE7]/10 px-5 py-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7]" />
            <span className="text-[13px] font-medium tracking-[0.5px] text-[#A29BFE]">
              Automatizza la pubblicazione social
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 mt-8 max-w-4xl text-[42px] font-extrabold leading-[0.98] tracking-[-2px] md:text-[72px]"
          >
            Il tuo autopilota
            <br />
            per i social media
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mt-6 max-w-[560px] text-lg leading-8 text-white/55"
          >
            Carica il piano editoriale, importa i media, e UpPilot pubblica tutto in automatico su Instagram e Facebook. Zero passaggi manuali.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#pricing"
              className="rounded-full bg-[#6C5CE7] px-9 py-4 text-base font-semibold text-white shadow-[0_4px_30px_rgba(108,92,231,0.40)] transition hover:shadow-[0_4px_40px_rgba(108,92,231,0.60)]"
            >
              Inizia gratis
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#come-funziona"
              className="rounded-full border border-white/15 px-9 py-4 text-base font-medium text-white transition hover:border-[#6C5CE7]/50"
            >
              Guarda la demo
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 mt-16 grid grid-cols-2 gap-x-8 gap-y-8 md:flex md:flex-wrap md:justify-center md:gap-12"
          >
            {[
              { value: "60s", label: "Polling engine" },
              { value: "0", label: "Passaggi manuali" },
              { value: "24/7", label: "Pubblicazione auto" },
              { value: "∞", label: "Post programmabili" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="text-center">
                <div className="text-[32px] font-extrabold tracking-[-1px] text-[#6C5CE7]">{item.value}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[1.5px] text-white/40">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="funzionalita" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#6C5CE7]">Funzionalità</div>
            <h2 className="mt-4 text-[32px] font-extrabold tracking-[-1.5px] md:text-[44px]">
              Tutto quello che serve,
              <br />
              niente di superfluo
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.015 }}
                className="rounded-2xl border border-white/6 bg-white/[0.02] p-8 transition duration-300 hover:border-[#6C5CE7]/30 hover:bg-[#6C5CE7]/[0.05]"
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-lg font-bold tracking-[-0.3px]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="come-funziona" className="relative px-6 py-24 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(108,92,231,0.03)_50%,transparent)]" />
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="mb-16 text-center"
            >
              <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#6C5CE7]">Come funziona</div>
              <h2 className="mt-4 text-[32px] font-extrabold tracking-[-1.5px] md:text-[44px]">
                Tre passi. Poi lavora da solo.
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="relative rounded-[20px] border border-white/6 bg-white/[0.02] px-8 pb-10 pt-10"
                >
                  <div className="absolute right-6 top-3 text-[64px] font-black leading-none text-[#6C5CE7]/10">
                    {step.number}
                  </div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#6C5CE7]/20 to-[#A29BFE]/10 text-lg font-extrabold text-[#A29BFE]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold tracking-[-0.3px]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/45">{step.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#6C5CE7]">Pricing trasparente</div>
            <h2 className="mt-4 text-[32px] font-extrabold tracking-[-1.5px] md:text-[44px]">
              Scegli il piano giusto per te
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/5 p-1">
              <button className="rounded-full bg-[#6C5CE7] px-6 py-2 text-sm font-semibold text-white">Mensile</button>
              <button className="rounded-full px-6 py-2 text-sm font-semibold text-white/50">Annuale -20%</button>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`relative overflow-hidden rounded-[20px] border p-9 ${
                  plan.highlighted
                    ? "border-[#6C5CE7]/50 bg-[#6C5CE7]/[0.08]"
                    : "border-white/6 bg-white/[0.02]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute right-[-30px] top-4 rotate-45 bg-[#6C5CE7] px-8 py-1 text-[10px] font-bold uppercase tracking-[1px] text-white">
                    Popular
                  </div>
                )}

                <div className="text-sm font-semibold text-[#A29BFE]">{plan.name}</div>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-[-2px]">{plan.price}</span>
                  <span className="mb-1 text-sm text-white/35">{plan.suffix}</span>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-white/60">
                      <div className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#6C5CE7]/15 text-[11px] font-bold text-[#6C5CE7]">
                        ✓
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                  href="#"
                  className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-[#6C5CE7] text-white shadow-[0_4px_20px_rgba(108,92,231,0.30)]"
                      : "border border-white/12 text-white hover:border-[#6C5CE7]/40"
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#6C5CE7]/20 bg-gradient-to-br from-[#6C5CE7]/10 to-[#A29BFE]/5 px-8 py-6"
          >
            <div>
              <h4 className="text-base font-bold">Founding Members</h4>
              <p className="mt-1 text-sm text-white/50">€19/mese bloccato per sempre. Solo 30 posti.</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="rounded-full bg-[#6C5CE7] px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_30px_rgba(108,92,231,0.35)]"
            >
              Riserva il tuo posto
            </motion.a>
          </motion.div>
        </section>

        <section className="px-6 py-20 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-[-20px] text-[80px] font-black leading-none text-[#6C5CE7]/15">&quot;</div>
            <blockquote className="text-[20px] italic leading-9 tracking-[-0.3px] text-white/75 md:text-[24px]">
              Con UpPilot ho eliminato 3 ore al giorno di lavoro manuale. Carico il piano editoriale il lunedì e per tutta la settimana si pubblica da solo.
            </blockquote>
            <div className="mt-8 text-[15px] font-semibold">Social Media Manager</div>
            <div className="mt-1 text-[13px] text-white/40">Agenzia, 8 clienti</div>
          </motion.div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-6 py-24 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#6C5CE7]">Domande frequenti</div>
            <h2 className="mt-4 text-[32px] font-extrabold tracking-[-1.5px] md:text-[44px]">FAQ</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.q}
                variants={fadeUp}
                open={index === 0}
                className="group rounded-xl border border-white/6 bg-white/[0.02] open:border-[#6C5CE7]/30 open:bg-[#6C5CE7]/[0.05]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-left">
                  <span className="pr-4 text-[15px] font-semibold text-white">{faq.q}</span>
                  <span className="text-xl text-[#6C5CE7] transition group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-7 text-white/50">{faq.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </section>

        <section className="px-6 py-20 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#6C5CE7]/20 bg-gradient-to-br from-[#6C5CE7]/15 to-[#A29BFE]/5 px-8 py-16 text-center md:px-12"
          >
            <motion.div
              animate={{ opacity: [0.25, 0.7, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(108,92,231,0.10),transparent)]"
            />
            <h2 className="relative text-[30px] font-extrabold tracking-[-1px] md:text-[36px]">
              Pronto a mettere il pilota automatico?
            </h2>
            <p className="relative mx-auto mt-4 max-w-[520px] text-base text-white/50">
              Inizia gratis. Nessuna carta di credito. Nessun lock-in. Cancella quando vuoi.
            </p>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="relative mt-8 inline-block rounded-full bg-[#6C5CE7] px-9 py-4 text-base font-semibold text-white shadow-[0_4px_30px_rgba(108,92,231,0.35)]"
            >
              Crea il tuo account gratuito
            </motion.a>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/6 px-6 pb-8 pt-16 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mx-auto mb-12 grid max-w-7xl gap-10 md:grid-cols-4"
        >
          <motion.div variants={fadeUp} className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] text-xs font-extrabold text-white">
                UP
              </div>
              <span className="text-base font-bold">UpPilot</span>
            </div>
            <p className="mt-3 max-w-[280px] text-[13px] leading-7 text-white/35">
              Piattaforma di automazione social media per SMM e agenzie italiane. Carica, programma, pubblica — in automatico.
            </p>
            <a href="mailto:info@uppilot.com" className="mt-2 inline-block text-[13px] text-[#6C5CE7]">
              info@uppilot.com
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h5 className="mb-4 text-[13px] font-semibold uppercase tracking-[1px]">Prodotto</h5>
            <div className="space-y-2.5 text-[13px] text-white/40">
              <a href="#">Funzionalità</a>
              <a href="#" className="block">
                Pricing
              </a>
              <a href="#" className="block">
                Demo
              </a>
              <a href="#" className="block">
                API Docs
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h5 className="mb-4 text-[13px] font-semibold uppercase tracking-[1px]">Azienda</h5>
            <div className="space-y-2.5 text-[13px] text-white/40">
              <a href="#">Chi siamo</a>
              <a href="#" className="block">
                Blog
              </a>
              <a href="#" className="block">
                Contatti
              </a>
              <a href="#" className="block">
                Lavora con noi
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h5 className="mb-4 text-[13px] font-semibold uppercase tracking-[1px]">Social</h5>
            <div className="space-y-2.5 text-[13px] text-white/40">
              <a href="#">Instagram</a>
              <a href="#" className="block">
                LinkedIn
              </a>
              <a href="#" className="block">
                Twitter
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/6 pt-6 text-[12px] text-white/25 md:flex-row md:items-center md:justify-between"
        >
          <span>© 2026 UpPilot. Tutti i diritti riservati.</span>
          <div className="flex items-center gap-5">
            <a href="#">Privacy</a>
            <a href="#">Termini</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}