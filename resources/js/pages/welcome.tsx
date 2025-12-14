import { Link, usePage } from '@inertiajs/react'
import { type SharedData } from '@/types'

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
  const { auth } = usePage<SharedData>().props

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= NAVBAR ================= */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">
            Smart Faculty Evaluation
          </h1>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#feedback" className="text-gray-700 hover:text-gray-900">Feedback</a>
          </nav>

          <div className="flex items-center space-x-4">
            {auth.user ? (
              <Link
                href="/dashboard"
                className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </Link>
                {canRegister && (
                  <Link
                    href="/register"
                    className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                  >
                    Register
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-gray-900">
              Smart Faculty Evaluation System
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              A secure, fair, and data‑driven platform that modernizes faculty
              evaluation while reducing bias and improving academic quality.
            </p>

            {!auth.user && (
              <div className="mt-8 flex gap-4">
                <Link
                  href="/register"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                >
                  Get Started
                </Link>
                <a
                  href="#features"
                  className="px-6 py-3 border border-gray-900 rounded-lg hover:bg-gray-100 transition font-semibold"
                >
                  Learn More
                </a>
              </div>
            )}

            <div className="mt-10 flex gap-10">
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Anonymous Evaluation</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">Real‑Time</p>
                <p className="text-sm text-gray-600">Analytics & Reports</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
              alt="Education analytics dashboard"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Key System Features
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl border hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1581091012184-7c54c1c2d3f5?auto=format&fit=crop&w=400&q=80"
                className="w-full h-40 object-cover rounded-lg mb-6"
                alt="Admin control"
              />
              <h4 className="text-xl font-semibold mb-2">Admin‑Controlled Evaluation</h4>
              <p className="text-gray-600">
                Control evaluation schedules, academic years, and access permissions.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=400&q=80"
                className="w-full h-40 object-cover rounded-lg mb-6"
                alt="Adviser evaluation"
              />
              <h4 className="text-xl font-semibold mb-2">Adviser‑Only Evaluation</h4>
              <p className="text-gray-600">
                Students can only evaluate their assigned faculty advisers.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                className="w-full h-40 object-cover rounded-lg mb-6"
                alt="Analytics"
              />
              <h4 className="text-xl font-semibold mb-2">Analytics & Reports</h4>
              <p className="text-gray-600">
                Detect outliers, generate reports, and support data‑driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Built for Fair & Secure Evaluation
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              The Smart Faculty Evaluation System replaces manual and biased
              evaluation methods with a secure, anonymous, and structured platform.
            </p>
            <p className="text-lg text-gray-700">
              Developed using <strong>Laravel, React, Inertia.js, Tailwind CSS,</strong>
              and <strong>MySQL</strong>, this system is scalable and suitable for
              academic institutions.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="University system"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= FEEDBACK ================= */}
      <section id="feedback" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Give Your Feedback
          </h3>
          <p className="text-gray-600 mb-12">
            Your insights help improve the system and ensure fair faculty evaluation.
          </p>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
            />
            <textarea
              placeholder="Your Feedback"
              rows={5}
              className="p-4 border rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Smart Faculty Evaluation System</p>
          <p className="text-gray-400 text-sm">
            Major Individual Thesis Project
          </p>
        </div>
      </footer>

    </div>
  )
}
