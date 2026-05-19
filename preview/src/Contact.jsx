import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, HeartHandshake, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/#programs" },
  { label: "Membership", href: "/#membership" },
  { label: "Trainers", href: "/" },
  { label: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["95 New Jersey Boulevard", "Premium Fitness District", "Newark, NJ 07102"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["Main: (973) 555-0123", "Membership: (973) 555-0124", "Support: (973) 555-0125"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@prestigefitness.com", "members@prestigefitness.com", "trainers@prestigefitness.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 5AM - 11PM", "Sat-Sun: 6AM - 10PM", "24/7 Member Access"],
  },
];

const faqs = [
  {
    question: "What are your membership options?",
    answer: "We offer three tiers: Essential ($49/mo), Elite ($89/mo), and Prestige Black ($149/mo). Each includes different levels of access to our facilities, classes, and amenities.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes! You can freeze your membership for up to 3 months per year at no additional charge. Perfect for extended vacations or injuries.",
  },
  {
    question: "Do you offer day passes?",
    answer: "Absolutely. Day passes are available for $25 and include full access to all facilities. Ask about our 7-day trial pass for first-time visitors.",
  },
  {
    question: "What should I bring to my first session?",
    answer: "Just bring yourself and workout clothes! We provide towels, lockers, and water. We recommend bringing a lock for the changing rooms.",
  },
];

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "", phone: "", subject: "", message: "" });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#2c2c2c] text-white">
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
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full rounded-full bg-red-600 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.35)] transition hover:bg-red-500 active:scale-[0.98]"
                >
                  Join Now
                </Link>
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

          <Link
            to="/"
            className="hidden rounded-full border border-red-500/30 bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.35)] transition hover:scale-105 hover:bg-red-500 md:px-5 md:py-2.5 md:text-sm lg:block"
          >
            Join Now
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center rounded-full border border-white/20 p-2 transition hover:border-red-600 hover:text-red-500 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-16 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(185,28,28,.2),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm">GET IN TOUCH</p>
          <h1 className="mt-3 text-4xl font-black uppercase md:text-5xl lg:text-6xl">
            Let's Start A <span className="text-red-600">Conversation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
            Have questions about membership, personal training, or just want to say hello? We're here to help you on your fitness journey.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Grid */}
      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#3d3d3d] p-6"
              >
                <item.icon className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-lg font-black uppercase">{item.title}</h3>
                <div className="mt-3 space-y-1.5">
                  {item.details.map((detail) => (
                    <p key={detail} className="text-sm text-gray-400">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Options */}
      <section className="bg-[#3d3d3d] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-black uppercase md:text-3xl">Send Us A Message</h2>
              <p className="mt-3 text-sm text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm outline-none transition focus:border-red-600"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm outline-none transition focus:border-red-600"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm outline-none transition focus:border-red-600"
                />
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm outline-none transition focus:border-red-600 text-gray-400"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="training">Personal Training</option>
                  <option value="classes">Group Classes</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm outline-none transition focus:border-red-600 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(220,38,38,.45)] transition hover:scale-[1.02] hover:bg-red-500 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-white/10 bg-[#4a4a4a] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <MessageSquare className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase">Live Chat</h3>
                    <p className="text-sm text-gray-400">Instant support available</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Chat with our team right here on the website. Available Mon-Fri, 8AM-8PM.
                </p>
                <button className="mt-4 w-full rounded-full border border-red-600 px-5 py-3 text-sm font-bold uppercase text-red-500 transition hover:bg-red-600 hover:text-white">
                  Start Chat
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#4a4a4a] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase">Schedule A Tour</h3>
                    <p className="text-sm text-gray-400">Visit our facility in person</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  See our equipment, meet the team, and experience the Prestige atmosphere firsthand.
                </p>
                <button className="mt-4 w-full rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase text-white shadow-[0_0_20px_rgba(220,38,38,.35)] transition hover:bg-red-500">
                  Book Free Tour
                </button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#4a4a4a] p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <HeartHandshake className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase">Partnerships</h3>
                    <p className="text-sm text-gray-400">Corporate wellness & more</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Looking to partner with us? We offer corporate wellness programs and group discounts.
                </p>
                <button className="mt-4 w-full rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase transition hover:border-red-600 hover:bg-red-700">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.35em] text-red-500 md:text-sm">FAQ</p>
            <h2 className="mt-3 text-2xl font-black uppercase md:text-3xl">Frequently Asked Questions</h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-[#3d3d3d] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-bold pr-4">{faq.question}</span>
                  <span className={`text-lg text-red-500 transition-transform ${expandedFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400">Still have questions?</p>
            <a href="tel:9735550123" className="mt-2 inline-flex items-center gap-2 text-lg font-black text-red-500 hover:text-red-400 transition">
              <Phone className="h-5 w-5" />
              Call Us: (973) 555-0123
            </a>
          </div>
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
                <MapPin className="h-4 w-4 shrink-0 text-red-500" />
                <span>95 New Jersey, Premium Fitness Facility</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.15em] text-white mb-4">Programs</h4>
              <ul className="space-y-2.5">
                {['Strength Training', 'HIIT Conditioning', 'Personal Coaching', 'Recovery Zone', 'Group Classes'].map((link) => (
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
