export default function LandingPageInspiredByElementra() {
  const services = [
    {
      title: "Piani editoriali intelligenti",
      text: "Organizza contenuti, rubriche e pubblicazioni da un'unica dashboard con supporto AI.",
    },
    {
      title: "Copy e caption assistiti",
      text: "Genera caption, hook e varianti su misura per Instagram, Facebook e TikTok.",
    },
    {
      title: "Analisi e report",
      text: "Monitora performance, crescita e confronto competitivo con insight chiari e utili.",
    },
  ];

  const stats = [
    { value: "120+", label: "brand supportati" },
    { value: "3x", label: "più velocità operativa" },
    { value: "24/7", label: "workspace online" },
  ];

  const plans = [
    {
      name: "Starter",
      price: "29€",
      desc: "Per freelance e piccoli team che vogliono centralizzare il workflow.",
      features: ["1 workspace", "Pianificazione contenuti", "Caption AI", "Report base"],
      featured: false,
    },
    {
      name: "Growth",
      price: "79€",
      desc: "Per agenzie e brand che gestiscono più clienti e più canali insieme.",
      features: ["5 workspace", "Multi-platform publishing", "Analisi avanzata", "Supporto prioritario"],
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      desc: "Per team strutturati che vogliono automazioni, integrazioni e controllo totale.",
      features: ["Workspace illimitati", "API & automazioni", "Permessi team", "Onboarding dedicato"],
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "Posso pubblicare su più piattaforme da un solo pannello?",
      a: "Sì, la landing è pensata per raccontare proprio un prodotto che centralizza pubblicazione e gestione contenuti su più canali.",
    },
    {
      q: "L'AI scrive tutto da sola?",
      a: "Ti aiuta su caption, idee, piani editoriali e analisi, ma il controllo creativo resta sempre tuo.",
    },
    {
      q: "È adatta anche a un'agenzia?",
      a: "Sì, il tono e la struttura sono studiati per funzionare bene sia per SaaS che per agency tech/marketing.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold tracking-tight">Cosmos Flow</div>
          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#stats" className="transition hover:text-white">Results</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <button className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5">
            Book a demo
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(128,90,213,0.35),transparent_30%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
                Social automation platform
              </div>
              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Shape smarter content workflows.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
                Gestisci contenuti, caption, analisi e publishing da un unico sistema progettato per team creativi, agenzie e brand in crescita.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                  Start free
                </button>
                <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
                  Watch overview
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/55">
                <span>Instagram</span>
                <span>Facebook</span>
                <span>TikTok</span>
                <span>AI Assistance</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#11111a] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Dashboard preview</p>
                      <h3 className="text-lg font-semibold">Performance overview</h3>
                    </div>
                    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      +18.4%
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/50">Posts scheduled</p>
                      <p className="mt-2 text-3xl font-semibold">248</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/50">Avg. engagement</p>
                      <p className="mt-2 text-3xl font-semibold">6.2%</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:col-span-2">
                      <p className="text-sm text-white/50">AI suggestions this month</p>
                      <div className="mt-4 h-24 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 via-violet-500/20 to-cyan-400/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Core features</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Everything your team needs to publish faster and think better.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                  <div className="mb-5 h-12 w-12 rounded-2xl bg-white/10" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className="px-6 py-10">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                <div className="text-4xl font-semibold md:text-5xl">{item.value}</div>
                <div className="mt-2 text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Pricing</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Choose the setup that fits your growth.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] border p-7 ${
                    plan.featured
                      ? "border-white/25 bg-white text-black"
                      : "border-white/10 bg-white/5 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    {plan.featured && (
                      <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-6 text-4xl font-semibold">{plan.price}</div>
                  <p className={`mt-4 leading-7 ${plan.featured ? "text-black/70" : "text-white/65"}`}>
                    {plan.desc}
                  </p>
                  <ul className={`mt-6 space-y-3 text-sm ${plan.featured ? "text-black/75" : "text-white/70"}`}>
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-black text-white hover:opacity-90"
                        : "border border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    Get started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Insights</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Turn data into better creative decisions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Non solo pubblicazione: una piattaforma che aiuta il team a capire cosa funziona, cosa replicare e dove ottimizzare.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">FAQ</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Common questions.
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-3 leading-7 text-white/65">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
