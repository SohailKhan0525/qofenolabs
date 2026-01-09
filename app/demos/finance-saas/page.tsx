export default function Page() {
  const features = [
    { title: "Unified visibility", description: "Real-time cash, spend, and revenue across every bank and card." },
    { title: "Smart controls", description: "Set policies, approvals, and limits that auto-enforce across teams." },
    { title: "Predictive insights", description: "Forecast burn, runway, and collections with AI-powered models." },
    { title: "Audit-ready exports", description: "One-click statements, reconciliations, and close packages." },
  ];

  const steps = [
    { title: "Connect securely", description: "Link banks, cards, and accounting in minutes with bank-grade encryption." },
    { title: "Automate the flow", description: "Categorize, flag anomalies, and route approvals with intelligent rules." },
    { title: "Track and act", description: "Monitor KPIs, forecast scenarios, and trigger alerts before risks emerge." },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      cadence: "per month",
      description: "For lean finance teams.",
      features: ["Up to 3 bank connections", "Automated categorization", "Standard dashboards", "Email support"],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$79",
      cadence: "per month",
      description: "Best for scaling companies.",
      features: [
        "Unlimited connections",
        "Approval workflows",
        "Predictive forecasts",
        "Slack + email alerts",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "",
      description: "Controls, compliance, and custom SLAs.",
      features: ["SSO/SCIM", "Custom data regions", "Dedicated CSM", "Premium support"],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-16 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      {/* Hero */}
      <header className="relative">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 sm:pt-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-cyan-100 ring-1 ring-white/10">
              FinTrack · Trusted FinOps
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              FinTrack
              <span className="block text-cyan-200">Smart financial tracking for modern businesses.</span>
            </h1>
            <p className="text-lg text-slate-200 sm:max-w-xl">
              Stay ahead of cash, spend, and compliance with a finance platform built for control and clarity.
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
                See how it works
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Bank-grade security
              </div>
              <div>14-day trial · No credit card</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-cyan-500/10">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
                <span>Cash position</span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-100">Healthy</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-slate-300">Runway</div>
                  <div className="mt-2 text-2xl font-semibold text-white">18.4 mo</div>
                  <div className="text-emerald-300">+1.2 mo vs last</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-slate-300">Monthly burn</div>
                  <div className="mt-2 text-2xl font-semibold text-white">$142k</div>
                  <div className="text-emerald-300">-8% vs last</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Alerts</span>
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-100">Live</span>
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  {[
                    "Invoice surge detected · +24% week over week",
                    "Card spend anomaly on Marketing · flagged for review",
                    "Cash forecast updated after payroll sync",
                  ].map((alert) => (
                    <div key={alert} className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-slate-200">
                      {alert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="relative border-t border-white/5 bg-slate-950/70 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Features</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Clarity, control, and confidence</h2>
            <p className="text-lg text-slate-200">
              FinTrack centralizes financial signals and turns them into guided actions your team can trust.
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

      {/* How it works */}
      <section className="relative border-t border-white/5 bg-slate-900/70 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">How it works</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">From connect to control</h2>
            <p className="text-lg text-slate-200">Set up in minutes. FinTrack keeps your finance data clean and actionable.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/20">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-300">{step.description}</p>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Plans that scale with you</h2>
            <p className="text-lg text-slate-200">Transparent plans with bank-grade security and compliance baked in.</p>
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

      {/* CTA */}
      <section id="cta" className="relative border-t border-white/5 bg-slate-900/80 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-slate-900 p-10 shadow-2xl shadow-cyan-500/20">
            <div className="space-y-4 text-center">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Ready for financial clarity?</h3>
              <p className="text-lg text-slate-200">
                Launch FinTrack in minutes. Connect accounts, automate controls, and keep teams aligned on every dollar.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#pricing"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-cyan-400"
                >
                  Start free trial
                </a>
                <a
                  href="mailto:hello@fintrack.com"
                  className="rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Talk to sales
                </a>
              </div>
              <div className="text-sm text-slate-300">SOC2-ready · 256-bit encryption · 14-day trial</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}