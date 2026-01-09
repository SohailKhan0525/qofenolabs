export default function Page() {
  const features = [
    {
      title: "Automated task orchestration",
      description: "Generate, prioritize, and assign tasks instantly with AI-driven workflows tailored to your team.",
    },
    {
      title: "Context-aware copilots",
      description: "Summarize threads, draft replies, and surface next steps across email, chat, and docs.",
    },
    {
      title: "Smart schedules",
      description: "Auto-build daily plans that balance deep work and meetings, updated in real time.",
    },
    {
      title: "Insights that act",
      description: "Dashboards that convert metrics into recommended actions you can apply in one click.",
    },
  ];

  const testimonials = [
    {
      name: "Amelia Chen",
      role: "COO, Northwind",
      quote: "TaskMind AI cut our weekly ops overhead by 40% and keeps everyone focused on the right work.",
    },
    {
      name: "Jordan Reyes",
      role: "Head of Product, Lumen",
      quote: "The AI summaries and auto-prioritized backlogs are a game changer for shipping on time.",
    },
    {
      name: "Priya Patel",
      role: "Founder, Horizon Labs",
      quote: "We replaced three tools with TaskMind AI. Our team finally has a single source of truth for execution.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$19",
      cadence: "per user / month",
      description: "For small teams getting started with AI productivity.",
      features: ["AI task generation", "Daily plan builder", "Email + Slack summaries", "Basic analytics"],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$39",
      cadence: "per user / month",
      description: "Best for scaling teams that need automation depth.",
      features: ["Everything in Starter", "Workflow automations", "Calendar optimization", "Role-based access", "Enhanced analytics"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Let’s talk",
      cadence: "",
      description: "Security, governance, and custom integrations for large teams.",
      features: ["SSO & SCIM", "Custom data regions", "Dedicated onboarding", "Premium support"],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 sm:pt-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-cyan-100 ring-1 ring-white/10">
              New · AI productivity built for teams
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              TaskMind AI
              <span className="block text-cyan-200">Automate your work with AI-powered productivity.</span>
            </h1>
            <p className="text-lg text-slate-200 sm:max-w-xl">
              Orchestrate tasks, automate busywork, and keep teams aligned with an AI layer that understands your
              priorities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-lg bg-cyan-500 px-5 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:translate-y-0.5 hover:bg-cyan-400"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="rounded-lg border border-white/20 px-5 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                View features
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Live status
              </div>
              <div>14-day trial · No credit card</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-cyan-500/10">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
                <span>Today</span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100">On track</span>
              </div>
              <div className="space-y-4">
                {["Draft Q1 plan", "Summarize sprint retro", "Respond to vendor emails", "Create launch checklist"].map(
                  (task, idx) => (
                    <div
                      key={task}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">{task}</div>
                        <div className="text-xs text-slate-300">AI-prioritized · Due today</div>
                      </div>
                      <div className="text-xs font-medium text-cyan-200">Suggested</div>
                    </div>
                  ),
                )}
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Automation: Inbox triage</span>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-100">Running</span>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/5">
                  <div className="h-2 w-3/4 rounded-full bg-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="relative border-t border-white/5 bg-slate-950/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Product</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for modern execution</h2>
            <p className="text-lg text-slate-200">
              TaskMind AI connects your tools, understands priorities, and automates the next best action for every
              teammate.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/20">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5 9.5 17 19 7.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative border-t border-white/5 bg-slate-900/70 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Testimonials</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Trusted by fast-moving teams</h2>
            <p className="text-lg text-slate-200">
              Teams ship faster and stay aligned when TaskMind AI runs the playbook.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-slate-200">“{item.quote}”</p>
                <div className="mt-6 text-sm font-semibold text-white">{item.name}</div>
                <div className="text-sm text-slate-300">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative border-t border-white/5 bg-slate-950/70 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Pricing</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Choose your plan</h2>
            <p className="text-lg text-slate-200">Transparent pricing with a 14-day free trial on every plan.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 shadow-lg backdrop-blur ${
                  plan.highlighted
                    ? "border-cyan-500/50 bg-cyan-500/10 shadow-cyan-500/30"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="text-sm text-slate-300">{plan.description}</p>
                  </div>
                  {plan.highlighted && (
                    <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-6 text-4xl font-bold text-white">
                  {plan.price}
                  {plan.cadence && <span className="text-base font-medium text-slate-300"> {plan.cadence}</span>}
                </div>
                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12.5 9.5 17 19 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="#cta"
                    className={`block w-full rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400"
                        : "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5"
                    }`}
                  >
                    Get started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="relative border-t border-white/5 bg-slate-900/80 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-slate-900 p-10 shadow-2xl shadow-cyan-500/20">
            <div className="space-y-4 text-center">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Ready to automate your work?</h3>
              <p className="text-lg text-slate-200">
                Launch TaskMind AI in minutes. Connect your tools, invite your team, and let the AI orchestrate the rest.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#pricing"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400"
                >
                  Start free trial
                </a>
                <a
                  href="mailto:hello@taskmind.ai"
                  className="rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Talk to sales
                </a>
              </div>
              <div className="text-sm text-slate-300">SOC2-ready · SSO available · 14-day free trial</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}