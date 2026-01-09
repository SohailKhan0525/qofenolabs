import ContactForm from './components/ContactForm';

export default function Page() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 sm:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-tight">
              High-Converting SaaS Landing Pages That Turn Visitors Into Users
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              QofenoLabs helps SaaS founders launch fast, modern, and conversion-focused landing pages.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="group rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-out"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#pricing"
                className="rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm hover:shadow-md hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 ease-out"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12">
              {/* Problem */}
              <div className="group">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-50 to-orange-50 px-5 py-2.5 text-sm font-semibold text-red-700 mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="mr-2">⚠️</span>
                  The Problem
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Your SaaS is ready, but your landing page isn't converting
                </h2>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="text-red-500">✗</span>
                    <span>Generic templates that don't stand out</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-red-500">✗</span>
                    <span>Weeks spent on design instead of growth</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-red-500">✗</span>
                    <span>High bounce rates and low conversion</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-red-500">✗</span>
                    <span>No clear messaging or value proposition</span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="group">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 text-sm font-semibold text-green-700 mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="mr-2">✨</span>
                  The Solution
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Launch-ready pages designed for conversion
                </h2>
                <ul className="mt-8 space-y-4 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Custom designs tailored to your brand</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Delivered in 3-5 days, not weeks</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Conversion-optimized layouts proven to work</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Clear messaging that resonates with your audience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to convert visitors
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional landing pages built with modern tools and best practices
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Custom Design
                </h3>
                <p className="text-gray-600">
                  Tailored designs that match your brand identity and target audience perfectly.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-600">
                  Built with Next.js and optimized for performance. Score 95+ on PageSpeed.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mobile First
                </h3>
                <p className="text-gray-600">
                  Fully responsive designs that look perfect on every device and screen size.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  📈
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Conversion Focused
                </h3>
                <p className="text-gray-600">
                  Strategic layouts with clear CTAs designed to maximize user signups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From brief to launch in 3 simple steps
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Share Your Vision
                </h3>
                <p className="text-gray-600">
                  Tell us about your SaaS, target audience, and goals. We'll schedule a quick call to understand your needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  We Design & Build
                </h3>
                <p className="text-gray-600">
                  Our team crafts a custom landing page optimized for conversions. Get your first draft in 3 days.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Launch & Grow
                </h3>
                <p className="text-gray-600">
                  Review, request changes, and launch. We deliver clean code ready to deploy and start converting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that fits your needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300">
              <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              <p className="mt-4 text-gray-600">A modern, high converting SaaS landing page designed to help startups turn visitors into users.</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$150</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>3-day delivery</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>1 Revision</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Functional website</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>1 page</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Content upload</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Opt-in form</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Speed optimization</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Social media icons</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started →
              </a>
            </div>

            {/* Growth Plan */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 border-2 border-indigo-400">
              <div className="absolute -top-4 right-8 rounded-full bg-white px-4 py-1 text-sm font-semibold text-indigo-600">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white">Growth</h3>
              <p className="mt-4 text-indigo-100">An enhanced SaaS landing page with improved UI, stronger conversion sections.</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-white">$250</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>5-day delivery</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>2 Revisions</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Functional website</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>1 page</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Content upload</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Opt-in form</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Speed optimization</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full rounded-xl bg-white px-6 py-4 text-center text-base font-semibold text-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started →
              </a>
            </div>

            {/* Pro Launch Plan */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300">
              <h3 className="text-2xl font-bold text-gray-900">Pro Launch</h3>
              <p className="mt-4 text-gray-600">A premium SaaS landing page with advanced design, animations, and conversion focused structure.</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$350</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>7-day delivery</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>3 Revisions</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Functional website</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>1 page</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Content upload</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Opt-in form</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Speed optimization</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full rounded-md bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
              Ready to launch your high-converting landing page?
            </h2>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Join dozens of SaaS founders who've launched faster and converted better with QofenoLabs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your project and we'll get back to you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black py-16 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              QofenoLabs
            </p>
            <p className="text-center text-gray-400">
              © 2026 QofenoLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
