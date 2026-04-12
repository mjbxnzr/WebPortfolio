import { motion } from "motion/react";
import { Check, ArrowRight, Mail, Linkedin, Globe, Zap, Smartphone, ShieldCheck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-apple-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="font-semibold text-xl tracking-tight">MStudio</div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-apple-dark/80">
          <a href="#services" className="hover:text-apple-blue transition-colors">Services</a>
          <a href="#pricing" className="hover:text-apple-blue transition-colors">Pricing</a>
          <div className="flex items-center space-x-4">
            <a href="mailto:mujib.nizar@outlook.com" className="bg-apple-blue text-white px-4 py-1.5 rounded-full hover:bg-apple-blue/90 transition-colors flex items-center space-x-2">
              <Mail size={16} />
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/mujibnizar" target="_blank" rel="noopener noreferrer" className="text-apple-dark hover:text-apple-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center space-x-4">
           <a href="mailto:mujib.nizar@outlook.com" className="text-apple-blue">
            <Mail size={24} />
           </a>
           <a href="https://www.linkedin.com/in/mujibnizar" target="_blank" rel="noopener noreferrer" className="text-apple-dark">
            <Linkedin size={24} />
           </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Get a professional website for your business — from <span className="text-apple-blue">RM500</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-apple-dark/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          No tech headaches. Just a clean, fast website that helps your customers find and contact you instantly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a 
            href="mailto:mujib.nizar@outlook.com" 
            className="inline-flex items-center space-x-2 bg-apple-dark text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-dark/90 transition-all transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/mujibnizar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white border border-apple-gray-100 text-apple-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-50 transition-all transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-apple-blue" />,
      title: "Build Trust",
      desc: "A professional website makes customers trust your business immediately."
    },
    {
      icon: <Zap className="text-apple-blue" />,
      title: "Lightning Fast",
      desc: "Optimized for speed so your customers don't leave before the page loads."
    },
    {
      icon: <Smartphone className="text-apple-blue" />,
      title: "Mobile Friendly",
      desc: "Looks perfect on iPhones, Androids, and everything in between."
    },
    {
      icon: <Mail className="text-apple-blue" />,
      title: "Easy Contact",
      desc: "Reach out via email or LinkedIn for a quick response and professional consultation."
    }
  ];

  return (
    <section id="services" className="bg-apple-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why your business needs a website</h2>
          <p className="text-xl text-apple-dark/60">Stop losing customers to competitors who are easier to find.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-apple-gray-100"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-apple-dark/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "500",
      features: ["1 Page Website", "WhatsApp Button", "Mobile Friendly", "Basic SEO", "3 Days Delivery"],
      cta: "Start Now",
      popular: false
    },
    {
      name: "Business",
      price: "1,200",
      features: ["3–5 Pages", "Contact Form", "Standard SEO", "Custom Graphics", "5 Days Delivery"],
      cta: "Go Business",
      popular: true
    },
    {
      name: "Pro",
      price: "2,000",
      features: ["Custom Design", "Performance Optimized", "Advanced SEO", "Priority Support", "7 Days Delivery"],
      cta: "Get Pro",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-apple-dark/60">Choose the plan that fits your business stage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i}
              className={`relative p-10 rounded-3xl border-2 ${p.popular ? 'border-apple-blue shadow-xl' : 'border-apple-gray-100'} flex flex-col`}
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-apple-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-sm font-semibold mr-1">RM</span>
                  <span className="text-5xl font-bold">{p.price}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center space-x-3 text-apple-dark/80">
                    <Check size={18} className="text-apple-blue flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="mailto:mujib.nizar@outlook.com"
                className={`w-full py-4 rounded-full text-center font-bold transition-all ${p.popular ? 'bg-apple-blue text-white hover:bg-apple-blue/90' : 'bg-apple-gray-50 text-apple-dark hover:bg-apple-gray-100'}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "Tell me about your business and goals." },
    { num: "02", title: "Build", desc: "I design and build your professional website." },
    { num: "03", title: "Launch", desc: "Start getting customers and growing online." }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple 3-step process</h2>
          <p className="text-xl text-apple-dark/60">Getting your business online shouldn't be complicated.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-8xl font-bold text-apple-gray-100 absolute -top-10 -left-4 -z-10">{s.num}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-lg text-apple-dark/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="section-padding bg-apple-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Have a business idea? Let's build your website today.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="mailto:mujib.nizar@outlook.com" 
            className="inline-flex items-center space-x-2 bg-white text-apple-dark px-10 py-5 rounded-full text-xl font-bold hover:bg-apple-gray-50 transition-all transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Mail size={24} />
            <span>Email Me</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/mujibnizar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-transparent border border-white/30 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/60">
          <div className="flex items-center justify-center space-x-2">
            <Check size={16} />
            <span>No hidden cost</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Check size={16} />
            <span>Fast delivery</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Check size={16} />
            <span>Mobile optimized</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Check size={16} />
            <span>Support included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-apple-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-xl font-bold">MStudio</div>
        <div className="text-apple-dark/40 text-sm">
          © {new Date().getFullYear()} MStudio. Built for Malaysian SMEs.
        </div>
        <div className="flex space-x-6 text-sm font-medium text-apple-dark/60">
          <a href="#" className="hover:text-apple-blue">Privacy</a>
          <a href="#" className="hover:text-apple-blue">Terms</a>
          <a href="mailto:mujib.nizar@outlook.com" className="hover:text-apple-blue">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-apple-blue/20">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Pricing />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
