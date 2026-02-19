'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, TrendingUp, Users, BarChart3, Target, Phone, Menu, X, LogIn } from 'lucide-react'

const PHONE = "(262) 903-7212"
const APP_URL = "https://app.dealclosr.io"

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [demoFormOpen, setDemoFormOpen] = useState(false)
  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "", message: "" })

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!demoForm.name || !demoForm.email || !demoForm.company) {
      alert("Please fill in all required fields")
      return
    }
    alert("Demo request submitted! We'll contact you soon.")
    setDemoForm({ name: "", email: "", company: "", message: "" })
    setDemoFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-[color:hsl(var(--background))] text-[color:hsl(var(--foreground))]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[color:hsl(var(--border))]/50 backdrop-blur-md bg-[color:hsl(var(--background))]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[color:hsl(var(--primary))]/20 flex items-center justify-center glow-cyan">
              <TrendingUp className="w-5 h-5 text-[color:hsl(var(--primary))]" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider gradient-text">Dealclosr</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))] transition">Features</a>
            <a href="#how-it-works" className="text-sm text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))] transition">How It Works</a>
            <a href="#contact" className="text-sm text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))] transition">Contact</a>
            <button
              className="btn-outline gap-2 flex items-center"
              onClick={() => window.location.href = `${APP_URL}/api/oauth/callback`}
            >
              <LogIn className="w-4 h-4" /> Sign In
            </button>
            <button
              className="btn-primary gap-2 flex items-center"
              onClick={() => setDemoFormOpen(true)}
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[color:hsl(var(--secondary))]/50 rounded-lg transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[color:hsl(var(--border))]/50 bg-[color:hsl(var(--background))]/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))] transition py-2">Features</a>
              <a href="#how-it-works" className="block text-sm text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))] transition py-2">How It Works</a>
              <a href="#contact" className="block text-sm text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))] transition py-2">Contact</a>
              <button
                className="btn-outline w-full gap-2 flex items-center justify-center"
                onClick={() => window.location.href = `${APP_URL}/api/oauth/callback`}
              >
                <LogIn className="w-4 h-4" /> Sign In
              </button>
              <button
                className="btn-primary w-full gap-2 flex items-center justify-center"
                onClick={() => setDemoFormOpen(true)}
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:hsl(var(--primary))]/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight gradient-text leading-tight">
                Dealer CRM and Sales Management Platform
              </h1>
              <p className="text-lg sm:text-xl text-[color:hsl(var(--primary))]/80 font-semibold mb-4">
                Built by a dealer for dealers
              </p>
              <p className="text-lg sm:text-xl text-[color:hsl(var(--muted-foreground))] max-w-2xl mx-auto">
                Manage leads, track commissions, visualize your pipeline, and analyze performance with a modern sales management platform built specifically for dealerships.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="btn-primary gap-2 flex items-center"
                onClick={() => setDemoFormOpen(true)}
              >
                <ArrowRight className="w-5 h-5" /> Request Demo
              </button>
              <button className="btn-outline gap-2 flex items-center">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 border-t border-[color:hsl(var(--border))]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
              Powerful Features for All Dealerships
            </h2>
            <p className="text-lg text-[color:hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Everything you need to manage your dealership operations in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Feature 1: Lead Tracking */}
            <div className="card-glass rounded-xl p-8 space-y-4 border border-[color:hsl(var(--border))]/50 hover:border-[color:hsl(var(--primary))]/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-wide">Lead Tracking</h3>
              <p className="text-[color:hsl(var(--muted-foreground))]">
                Capture, organize, and track every lead from initial contact through conversion. Never miss a follow-up again.
              </p>
              <ul className="space-y-2 text-sm text-[color:hsl(var(--muted-foreground))]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Lead source tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Automated follow-ups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Status management
                </li>
              </ul>
            </div>

            {/* Feature 2: Commission Management */}
            <div className="card-glass rounded-xl p-8 space-y-4 border border-[color:hsl(var(--border))]/50 hover:border-[color:hsl(var(--primary))]/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-neon-green/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-wide">Commission Tracking</h3>
              <p className="text-[color:hsl(var(--muted-foreground))]">
                Automatically calculate commissions with tiered rates. Track earnings and performance metrics in real-time.
              </p>
              <ul className="space-y-2 text-sm text-[color:hsl(var(--muted-foreground))]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Tiered commission rates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  YTD earnings tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Performance analytics
                </li>
              </ul>
            </div>

            {/* Feature 3: Pipeline Visibility */}
            <div className="card-glass rounded-xl p-8 space-y-4 border border-[color:hsl(var(--border))]/50 hover:border-[color:hsl(var(--primary))]/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-wide">Pipeline Visibility</h3>
              <p className="text-[color:hsl(var(--muted-foreground))]">
                See your entire sales pipeline at a glance. Track deal stages, values, and progress in real-time.
              </p>
              <ul className="space-y-2 text-sm text-[color:hsl(var(--muted-foreground))]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Drag-and-drop pipeline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Deal stage tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Revenue forecasting
                </li>
              </ul>
            </div>

            {/* Feature 4: Performance Analytics */}
            <div className="card-glass rounded-xl p-8 space-y-4 border border-[color:hsl(var(--border))]/50 hover:border-[color:hsl(var(--primary))]/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-neon-orange/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-neon-orange" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-wide">Performance Analytics</h3>
              <p className="text-[color:hsl(var(--muted-foreground))]">
                Get real-time insights into your sales performance with detailed analytics, trends, and KPIs to optimize your dealership.
              </p>
              <ul className="space-y-2 text-sm text-[color:hsl(var(--muted-foreground))]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Sales performance metrics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Trend analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                  Custom reports
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[color:hsl(var(--card))]/50 border-t border-[color:hsl(var(--border))]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
              How It Works
            </h2>
            <p className="text-lg text-[color:hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Get started in minutes and start closing more deals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your account and set up your dealership profile" },
              { step: "2", title: "Add Leads", desc: "Import existing leads or start adding new prospects" },
              { step: "3", title: "Track Pipeline", desc: "Move deals through your sales stages and watch progress" },
              { step: "4", title: "Analyze & Grow", desc: "Review analytics and optimize your sales process" },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[color:hsl(var(--primary))]/20 flex items-center justify-center mx-auto glow-cyan">
                  <span className="font-display text-2xl font-bold text-[color:hsl(var(--primary))]">{item.step}</span>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-[color:hsl(var(--muted-foreground))]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 border-t border-[color:hsl(var(--border))]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
              Ready to Transform Your Dealership?
            </h2>
            <p className="text-lg text-[color:hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Get in touch with us to schedule a demo and see how Dealclosr can help you close more deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Phone */}
            <div className="card-glass rounded-xl p-8 space-y-4 border border-[color:hsl(var(--border))]/50 text-center">
              <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-sm text-[color:hsl(var(--muted-foreground))] mb-1">Founder & CEO</p>
              <p className="font-semibold mb-2">Zach Hartwell</p>
              <p className="text-[color:hsl(var(--muted-foreground))]">Speak with our team directly</p>
              <a href={`tel:${PHONE}`} className="text-[color:hsl(var(--primary))] font-semibold hover:underline">
                {PHONE}
              </a>
            </div>

            {/* Demo Request */}
            <div className="card-glass rounded-xl p-8 space-y-4 border border-[color:hsl(var(--border))]/50 text-center">
              <div className="w-12 h-12 rounded-lg bg-neon-green/20 flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="font-semibold text-lg">Request Demo</h3>
              <p className="text-[color:hsl(var(--muted-foreground))]">Schedule a personalized walkthrough</p>
              <button
                className="btn-primary w-full"
                onClick={() => setDemoFormOpen(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Modal */}
      {demoFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card-glass rounded-xl p-8 max-w-lg w-full border border-[color:hsl(var(--border))]/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold tracking-wider">Request a Demo</h2>
              <button
                onClick={() => setDemoFormOpen(false)}
                className="text-[color:hsl(var(--muted-foreground))] hover:text-[color:hsl(var(--foreground))]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[color:hsl(var(--muted-foreground))]">Name *</label>
                <input
                  type="text"
                  value={demoForm.name}
                  onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-[color:hsl(var(--secondary))]/50 border border-[color:hsl(var(--border))]/50 text-[color:hsl(var(--foreground))] placeholder-[color:hsl(var(--muted-foreground))]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[color:hsl(var(--muted-foreground))]">Email *</label>
                <input
                  type="email"
                  value={demoForm.email}
                  onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                  placeholder="your@email.com"
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-[color:hsl(var(--secondary))]/50 border border-[color:hsl(var(--border))]/50 text-[color:hsl(var(--foreground))] placeholder-[color:hsl(var(--muted-foreground))]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[color:hsl(var(--muted-foreground))]">Dealership Name *</label>
                <input
                  type="text"
                  value={demoForm.company}
                  onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                  placeholder="Your dealership name"
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-[color:hsl(var(--secondary))]/50 border border-[color:hsl(var(--border))]/50 text-[color:hsl(var(--foreground))] placeholder-[color:hsl(var(--muted-foreground))]"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[color:hsl(var(--muted-foreground))]">Message</label>
                <input
                  type="text"
                  value={demoForm.message}
                  onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                  placeholder="Tell us about your dealership..."
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-[color:hsl(var(--secondary))]/50 border border-[color:hsl(var(--border))]/50 text-[color:hsl(var(--foreground))] placeholder-[color:hsl(var(--muted-foreground))]"
                />
              </div>
              <button type="submit" className="btn-primary w-full font-semibold">
                Send Demo Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[color:hsl(var(--border))]/50 bg-[color:hsl(var(--secondary))]/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[color:hsl(var(--primary))]/20 flex items-center justify-center glow-cyan">
              <TrendingUp className="w-5 h-5 text-[color:hsl(var(--primary))]" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider gradient-text">Dealclosr</span>
          </div>
          <p className="text-sm text-[color:hsl(var(--muted-foreground))]">
            Dealer CRM and Sales Management Platform. Built by a dealer for dealers.
          </p>
          <p className="text-xs text-[color:hsl(var(--muted-foreground))] mt-4">
            © 2026 Dealclosr. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
