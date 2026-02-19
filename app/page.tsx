export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">Dealclosr</div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-cyan-400">Features</a>
            <a href="#pricing" className="hover:text-cyan-400">Pricing</a>
            <button className="px-6 py-2 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-cyan-400">
            Close More Deals
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dealclosr is the CRM built for boat dealers. Manage leads, track deals, and close more sales with intelligent automation.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400">Start Free Trial</button>
            <button className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Management",
                description: "Organize and track all your leads in one centralized dashboard"
              },
              {
                title: "Deal Pipeline",
                description: "Visualize your sales pipeline and track deal progress in real-time"
              },
              {
                title: "Automation",
                description: "Automate repetitive tasks and focus on closing deals"
              },
              {
                title: "Analytics",
                description: "Get insights into your sales performance with detailed reports"
              },
              {
                title: "Team Collaboration",
                description: "Work seamlessly with your team with built-in communication tools"
              },
              {
                title: "Mobile App",
                description: "Manage your deals on the go with our native mobile application"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-700 p-6 rounded-lg border border-slate-600 hover:border-cyan-500 transition">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                features: ["Up to 100 leads", "Basic reporting", "Email support"]
              },
              {
                name: "Professional",
                price: "$299",
                features: ["Unlimited leads", "Advanced analytics", "Priority support", "Team collaboration"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Everything in Pro", "Custom integrations", "Dedicated account manager"]
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`rounded-lg p-8 ${plan.highlighted ? 'bg-slate-700 border-2 border-cyan-500' : 'bg-slate-800 border border-slate-700'}`}
              >
                <h3 className="text-2xl font-bold mb-2 text-cyan-400">{plan.name}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-semibold transition ${plan.highlighted ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400' : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">Ready to Close More Deals?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of boat dealers using Dealclosr to grow their business
          </p>
          <button className="px-8 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400">Start Your Free Trial Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 Dealclosr. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
