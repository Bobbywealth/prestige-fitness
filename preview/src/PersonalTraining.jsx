import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Dumbbell, Users, Target, Clock, Shield, Star, Menu, X, Check, ArrowLeft } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/#programs" },
  { label: "Membership", href: "/#membership" },
  { label: "Trainers", href: "/personal-training" },
  { label: "Contact", href: "/contact" },
];

const personalTrainingPlans = [
  {
    name: "Starter",
    price: "$149",
    period: "per session",
    details: [
      "One-on-one training",
      "Custom workout plan",
      "Form correction",
      "Progress tracking",
      "30-minute sessions",
    ],
  },
  {
    name: "Transform",
    price: "$499",
    period: "per month",
    featured: true,
    details: [
      "8 personal training sessions",
      "Custom nutrition plan",
      "Weekly check-ins",
      "Form & technique mastery",
      "45-minute sessions",
      "Priority scheduling",
    ],
  },
  {
    name: "Elite",
    price: "$899",
    period: "per month",
    details: [
      "12 personal training sessions",
      "Advanced nutrition coaching",
      "Daily accountability",
      "Competition prep available",
      "60-minute sessions",
      "Recovery protocol included",
      "24/7 trainer access",
    ],
  },
];

const benefits = [
  {
    icon: Target,
    title: "Personalized Programs",
    description: "Every workout is designed specifically for your body type, fitness level, and goals.",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    description: "Certified trainers with years of experience in strength, conditioning, and transformation.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your calendar. Early morning or late night, we've got you.",
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "Our structured approach ensures measurable progress every single month.",
  },
];

export default function PersonalTrainingPage() {
  const [selectedPlan, setSelectedPlan] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Personal Training Checkout
  if (selectedPlan) {
    return (
      <div className="min-h-screen bg-[#2c2c2c] px-4 py-8 text-white pb-safe">
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => setSelectedPlan(null)}
            className="mb-6 flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-red-600 hover:text-red-500 active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" /> Back To Personal Training
          </button>

          <div className="rounded-3xl border border-white/10 bg-[#3d3d3d] p-6 shadow-[0_0_60px_rgba(185,28,28,.18)] md:p-8">
            <div className="mb-6 md:mb-0">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500 md:text-sm">
                Personal Training Checkout
              </p>
              <h1 className="mt-3 text-3xl font-black uppercase md:text-5xl lg:text-6xl">
                Start Your Transformation
              </h1>
              <p className="mt-3 text-sm text-gray-400 md:mt-4 md:text-base">
                You've selected the {selectedPlan.name} plan. Complete your information below to begin.
              </p>

              <div className="mt-6 rounded-2xl border border-red-600/40 bg-black/40 p-5 md:mt-8 md:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <Dumbbell className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase md:text-2xl">{selectedPlan.name}</h2>
                    <p className="text-sm text-gray-400">{selectedPlan.details.length} sessions included</p>
                  </div>
                </div>
                <p className="mt-4 text-4xl font-black text-red-500 md:text-5xl">
                  {selectedPlan.price}
                  <span className="text-sm text-gray-400 md:text-base">/{selectedPlan.period}</span>
                </p>
              </div>
            </div>

            <form className="mt-6 space-y-4 md:mt-8">
              <input
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                placeholder="Email Address"
                type="email"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                placeholder="Phone Number"
                type="tel"
              />
              <select
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4 text-gray-400"
              >
                <option value="">Preferred Training Time</option>
                <option value="early">Early Morning (5AM - 8AM)</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 9PM)</option>
              </select>
              <input
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                placeholder="Primary Fitness Goal"
                type="text"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                placeholder="Card Number"
                type="text"
              />

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <input
                  className="rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                  placeholder="MM/YY"
                  type="text"
                />
                <input
                  className="rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-base outline-none transition focus:border-red-600 md:rounded-2xl md:px-5 md:py-4"
                  placeholder="CVC"
                  type="text"
                />
              </div>

              <button
                type="button"
                className="mt-2 w-full rounded-full bg-red-700 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_35px_rgba(220,38,38,.55)] transition hover:scale-[1.02] hover:bg-red-600 active:scale-[0.98] md:px-8 md:py-4 md:text-base"
              >
                Start Training
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#2c2c2c] text-white">
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[280px] flex-col bg-[#3d3d3d] p-6 pt-20 shadow-2xl"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-white/20 p-2 transition hover:border-red-600 hover:text-red-500"
              >
                <X className="h-6 w-6" />
              </button>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-4 text-lg font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white active:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSelectedPlan(personalTrainingPlans[1]);
                  }}
                  className="w-full rounded-full bg-red-600 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.35)] transition hover:bg-red-500 active:scale-[0.98]"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:top-5 md:px-6 md:pt-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-3 py-2.5 shadow-[0_0_35px_rgba(0,0,0,.45)] backdrop-blur-2xl md:px-6 md:py-3">
          <Link to="/" className="flex items-center gap-2.5 md:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-red-600/60 bg-black shadow-[0_0_20px_rgba(220,38,38,.35)] md:h-11 md:w-11">
              <span className="text-xs font-black tracking-tight text-white md:text-sm">
                <span className="text-red-600">P</span>F
              </span>
            </div>
            <div className="leading-none">
              <p className="text-xs font-black uppercase tracking-[0.38em] text-white md:text-sm">Prestige</p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.55em] text-red-500 md:mt-1 md:text-[10px]">Fitness</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 rounded-full border border-white/5 bg-white/[0.03] px-6 py-2.5 text-xs font-medium text-gray-300 lg:flex lg:text-sm">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setSelectedPlan(personalTrainingPlans[1])}
            className="hidden rounded-full border border-red-500/30 bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.35)] transition hover:scale-105 hover:bg-red-500 md:px-5 md:py-2.5 md:text-sm lg:block"
          >
            Get Started
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center rounded-full border border-white/20 p-2 transition hover:border-red-600 hover:text-red-500 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden px-4 py-32 pt-36 md:min-h-[70vh] md:py-40 md:pt-44 lg:px-6">
        <div
          className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.imgur.com/9xJbf8m.jpg')",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <div className="absolute left-1/2 top-[15%] h-[400px] w-[400px] -translate-x-1/2 animate-[heroGlow_8s_ease-in-out_infinite] rounded-full bg-red-600/20 blur-[120px] md:h-[500px] md:w-[500px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 mx-auto max-w-4xl text-center px-4"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500 md:text-sm">Personal Training</p>
          <h1 className="mt-3 text-3xl font-black uppercase leading-none text-white drop-shadow-2xl sm:text-4xl md:mt-4 md:text-5xl lg:text-6xl">
            Your Transformation<br/><span className="text-red-600">Starts Here</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-sm text-gray-300 md:text-base lg:text-lg">
            One-on-one coaching designed to push your limits, correct your form, and deliver real, measurable results.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row justify-center md:mt-8">
            <button
              onClick={() => setSelectedPlan(personalTrainingPlans[1])}
              className="rounded-full bg-red-700 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.55)] transition duration-300 hover:scale-105 hover:bg-red-600 active:scale-105 md:px-10 md:py-4"
            >
              Book Free Consultation
            </button>
            <a href="#plans" className="rounded-full border border-white/20 bg-black/50 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-red-600 md:px-10 md:py-4">
              View Plans
            </a>
          </div>
        </motion.div>

        <style>{`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
          @keyframes heroGlow {
            0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
            50% { opacity: 0.8; transform: translateX(-50%) scale(1.1); }
          }
        `}</style>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm">WHY TRAIN WITH US</p>
            <h2 className="mt-2 text-2xl font-black uppercase md:text-4xl lg:text-5xl">
              More Than A Trainer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
              Our personal training isn't just about lifting weights. It's about building a partnership that transforms your entire lifestyle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#3d3d3d] p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600/20">
                  <benefit.icon className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="text-lg font-black uppercase">{benefit.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="bg-[#3d3d3d] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm">TRAINING PLANS</p>
          <h2 className="mt-2 text-2xl font-black uppercase md:text-4xl lg:text-5xl">
            Choose Your Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
            Whether you're just starting out or you're a seasoned athlete, we have a plan that fits your goals and schedule.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {personalTrainingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: personalTrainingPlans.indexOf(plan) * 0.1 }}
                className={`rounded-2xl border p-6 text-left md:rounded-[2rem] md:p-8 ${
                  plan.featured
                    ? "border-red-600 bg-red-950/30 shadow-[0_0_45px_rgba(185,28,28,.35)]"
                    : "border-white/10 bg-[#4a4a4a]"
                }`}
              >
                {plan.featured && (
                  <p className="mb-3 inline-block rounded-full bg-red-700 px-3 py-1 text-[10px] font-bold uppercase md:mb-4 md:text-xs">
                    Most Popular
                  </p>
                )}
                <h3 className="text-xl font-black uppercase md:text-2xl">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black md:text-5xl">{plan.price}</span>
                  <span className="text-sm text-gray-400 md:text-base ml-1">{plan.period}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {plan.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`mt-6 w-full rounded-full px-5 py-3.5 text-sm font-bold uppercase transition active:scale-[0.98] md:mt-8 md:px-6 md:py-4 ${
                    plan.featured
                      ? "bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,.45)] hover:bg-red-500"
                      : "border border-white/15 text-white hover:border-red-600 hover:bg-red-700"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm">SUCCESS STORIES</p>
          <h2 className="mt-2 text-2xl font-black uppercase md:text-4xl lg:text-5xl">
            Real Results
          </h2>
          
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#3d3d3d] p-6 md:p-10">
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} fill="currentColor" className="h-5 w-5" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-200 italic">
              "The trainers at Prestige don't just count reps – they transformed my entire approach to fitness. Down 40lbs in 6 months and I feel stronger than ever."
            </p>
            <div className="mt-6">
              <p className="font-bold">Marcus J.</p>
              <p className="text-sm text-gray-400">Transform Plan Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 text-center md:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,.3),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-2xl font-black uppercase md:text-4xl lg:text-5xl">
            Ready To Transform?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-300 md:text-base">
            Book your free consultation today. No commitment, no pressure – just a conversation about your goals.
          </p>
          <button
            onClick={() => setSelectedPlan(personalTrainingPlans[1])}
            className="mt-8 rounded-full bg-red-600 px-9 py-4 text-sm font-bold uppercase text-white shadow-[0_0_30px_rgba(220,38,38,.55)] transition hover:scale-105 hover:bg-red-500 active:scale-[0.98] md:mt-10 md:px-12 md:py-4"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#1f1f1f] px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-600 bg-black">
                  <span className="text-sm font-black"><span className="text-red-600">P</span>F</span>
                </div>
                <div>
                  <p className="text-sm font-black tracking-[0.2em]">PRESTIGE</p>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-red-500">FITNESS</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">Elite performance training for those who demand more from their fitness journey.</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>95 New Jersey, Premium Fitness Facility</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-4">Programs</h4>
              <ul className="space-y-2.5">
                {['Strength Training', 'HIIT Conditioning', 'Personal Training', 'Recovery Zone', 'Group Classes'].map((link) => (
                  <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-4">Company</h4>
              <ul className="space-y-2.5">
                {['About Us', 'Our Trainers', 'Membership', 'Careers', 'Press Kit'].map((link) => (
                  <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">Get exclusive offers and training tips.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter email" className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-red-600 transition-colors" />
                <button className="rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-500 transition-colors">→</button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2026 Prestige Fitness. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-xs text-gray-500 hover:text-red-500 transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
