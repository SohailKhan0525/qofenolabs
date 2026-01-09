export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              High-Converting SaaS Landing Pages That Turn Visitors Into Users
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              QofenoLabs helps SaaS founders launch fast, modern, and conversion-focused landing pages.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#pricing"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12">
              {/* Problem */}
              <div>
                <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 mb-6">
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
              <div>
                <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-6">
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
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white text-2xl mb-4">
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
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white text-2xl mb-4">
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
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white text-2xl mb-4">
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
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white text-2xl mb-4">
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
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold mb-6">
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
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold mb-6">
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
              <div className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold mb-6">
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
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              <p className="mt-4 text-gray-600">Perfect for launching your MVP</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$149</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>1 custom landing page</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Mobile responsive design</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>Next.js + Tailwind CSS</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>2 rounds of revisions</span>
                </li>
                <li className="flex gap-x-3 text-gray-600">
                  <span className="text-indigo-600">✓</span>
                  <span>5-day delivery</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full rounded-md bg-indigo-600 px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-lg">
              <div className="absolute -top-4 right-8 rounded-full bg-white px-4 py-1 text-sm font-semibold text-indigo-600">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="mt-4 text-indigo-100">For serious SaaS founders</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-white">$349</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Up to 3 pages</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Advanced animations</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>SEO optimization</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex gap-x-3 text-white">
                  <span className="text-white">✓</span>
                  <span>3-day priority delivery</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-8 block w-full rounded-md bg-white px-6 py-3 text-center text-base font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 sm:py-32 bg-indigo-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to launch your high-converting landing page?
            </h2>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Join dozens of SaaS founders who've launched faster and converted better with QofenoLabs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Start Your Project
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-900 mb-2">
                  Interested Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
                >
                  <option>Starter - $149</option>
                  <option>Pro - $349</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
                  placeholder="Tell us about your SaaS and what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2026 QofenoLabs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
