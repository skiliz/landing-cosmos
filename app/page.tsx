"use client";

import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger: any = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">

      {/* HERO */}
      <section className="px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-6xl text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold md:text-7xl"
          >
            Il tuo autopilota
            <br />
            per i social media
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70 md:text-xl"
          >
            Gestisci contenuti, caption e pubblicazione da un unico sistema intelligente.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-white px-6 py-3 text-black font-semibold"
            >
              Start free
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-white/20 px-6 py-3"
            >
              Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
        >
          {[
            "Piani editoriali intelligenti",
            "Caption con AI",
            "Analisi performance",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-white/10" />
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-2 text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
        >
          {[
            { value: "120+", label: "clienti" },
            { value: "3x", label: "velocità" },
            { value: "24/7", label: "online" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-4xl font-bold">{item.value}</div>
              <div className="text-white/60">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
        >
          {["Starter", "Growth", "Scale"].map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-2xl font-semibold">{plan}</h3>
              <div className="mt-4 text-3xl font-bold">€{i * 50 + 29}</div>
              <p className="mt-2 text-white/60">
                Perfetto per iniziare e scalare il tuo workflow.
              </p>
              <button className="mt-6 w-full rounded-full bg-white py-2 text-black">
                Start
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold">
            Porta il tuo workflow al livello successivo
          </h2>
          <p className="mt-4 text-white/70">
            Automatizza, analizza e pubblica meglio.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 rounded-full bg-white px-6 py-3 text-black font-semibold"
          >
            Prova gratis
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}