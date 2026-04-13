import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Mail, Linkedin, Globe, Zap, Smartphone, ShieldCheck, X, Send } from "lucide-react";
import { useState, FormEvent, useEffect, ChangeEvent } from "react";

const Navbar = ({ onOpenEnquiry }: { onOpenEnquiry: (template?: string) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-apple-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-apple-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">M</div>
          <div className="font-semibold text-xl tracking-tight">MStudio</div>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-apple-dark/80">
          <a href="#services" className="hover:text-apple-blue transition-colors">Services</a>
          <a href="#pricing" className="hover:text-apple-blue transition-colors">Pricing</a>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onOpenEnquiry()}
              className="bg-apple-blue text-white px-4 py-1.5 rounded-full hover:bg-apple-blue/90 transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <Mail size={16} />
              <span>Email Me</span>
            </button>
            <a href="https://www.linkedin.com/in/mujibnizar" target="_blank" rel="noopener noreferrer" className="text-apple-dark hover:text-apple-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="md:hidden flex items-center space-x-4">
           <button onClick={() => onOpenEnquiry()} className="text-apple-blue cursor-pointer">
            <Mail size={24} />
           </button>
           <a href="https://www.linkedin.com/in/mujibnizar" target="_blank" rel="noopener noreferrer" className="text-apple-dark">
            <Linkedin size={24} />
           </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenEnquiry }: { onOpenEnquiry: (template?: string) => void }) => {
  return (
    <section className="pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Get a professional website for your business from <span className="text-apple-blue">RM500</span>
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
          <button 
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center space-x-2 bg-apple-dark text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-dark/90 transition-all transform hover:scale-105 w-full sm:w-auto justify-center cursor-pointer"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </button>
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why your business needs a website</h2>
          <p className="text-xl text-apple-dark/60">Stop losing customers to competitors who are easier to find.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover="hover"
              variants={{
                hover: { y: -5 }
              }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-apple-gray-100 cursor-default"
            >
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.15, 
                    rotate: 8,
                    transition: { type: "spring", stiffness: 400, damping: 10 } 
                  }
                }}
                className="mb-4 inline-block"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-apple-dark/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Pricing = ({ onOpenEnquiry }: { onOpenEnquiry: (template?: string) => void }) => {
  const plans = [
    {
      name: "Starter",
      price: "500",
      features: ["1 Page Website", "WhatsApp Button", "Mobile Friendly", "Basic SEO", "3 Days Delivery"],
      cta: "Start Now",
      popular: false,
      template: "Hi MStudio! I'm interested in the Starter Package (RM500). I'd like to build a 1-page website for my business."
    },
    {
      name: "Business",
      price: "1,200",
      features: ["3–5 Pages", "Contact Form", "Standard SEO", "Custom Graphics", "5 Days Delivery"],
      cta: "Go Business",
      popular: true,
      template: "Hi MStudio! I'm interested in the Business Package (RM1,200). I need a 3-5 page website with a contact form and SEO."
    },
    {
      name: "Pro",
      price: "2,000",
      features: ["Custom Design", "Performance Optimized", "Advanced SEO", "Priority Support", "7 Days Delivery"],
      cta: "Get Pro",
      popular: false,
      template: "Hi MStudio! I'm interested in the Pro Package (RM2,000). I'm looking for a custom, high-performance design with advanced SEO."
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-apple-dark/60">Choose the plan that fits your business stage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
              <button 
                onClick={() => onOpenEnquiry(p.template)}
                className={`w-full py-4 rounded-full text-center font-bold transition-all cursor-pointer ${p.popular ? 'bg-apple-blue text-white hover:bg-apple-blue/90' : 'bg-apple-gray-50 text-apple-dark hover:bg-apple-gray-100'}`}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple 3-step process</h2>
          <p className="text-xl text-apple-dark/60">Getting your business online shouldn't be complicated.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              <div className="text-8xl font-bold text-apple-gray-100 absolute -top-10 -left-4 -z-10">{s.num}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-lg text-apple-dark/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const FinalCTA = ({ onOpenEnquiry }: { onOpenEnquiry: (template?: string) => void }) => {
  return (
    <section className="section-padding bg-apple-dark text-white animate-gradient bg-gradient-to-r from-apple-dark via-[#2d2d2f] to-apple-dark">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Have a business idea? Let's build your website today.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center space-x-2 bg-white text-apple-dark px-10 py-5 rounded-full text-xl font-bold hover:bg-apple-gray-50 transition-all transform hover:scale-105 w-full sm:w-auto justify-center cursor-pointer"
          >
            <Mail size={24} />
            <span>Email Me</span>
          </button>
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
      </motion.div>
    </section>
  );
};

const Footer = ({ onOpenEnquiry }: { onOpenEnquiry: (template?: string) => void }) => {
  return (
    <footer className="py-12 px-6 border-t border-apple-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-apple-blue rounded flex items-center justify-center text-white font-bold text-sm">M</div>
          <div className="text-xl font-bold">MStudio</div>
        </div>
        <div className="text-apple-dark/40 text-sm">
          © {new Date().getFullYear()} MStudio. Built for Malaysian SMEs.
        </div>
        <div className="flex space-x-6 text-sm font-medium text-apple-dark/60">
          <a href="#" className="hover:text-apple-blue transition-colors">Privacy</a>
          <a href="#" className="hover:text-apple-blue transition-colors">Terms</a>
          <button onClick={() => onOpenEnquiry()} className="hover:text-apple-blue transition-colors cursor-pointer">Contact</button>
        </div>
      </div>
    </footer>
  );
};

const EnquiryModal = ({ isOpen, onClose, initialTemplate }: { isOpen: boolean; onClose: () => void; initialTemplate: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    details: ""
  });

  // Update details when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, details: initialTemplate }));
    }
  }, [isOpen, initialTemplate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`MStudio Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Business Type: ${formData.businessType}\n\n` +
      `Project Details:\n${formData.details}`
    );
    
    const mailtoLink = `mailto:mujib.nizar@outlook.com?subject=${subject}&body=${body}`;
    
    // Trigger mailto
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-apple-dark/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-apple-dark/40 hover:text-apple-dark transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-apple-blue/10 text-apple-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Opening Email App...</h3>
                  <p className="text-apple-dark/60 text-lg">
                    I've prepared the email for you. Please click "Send" in your email application.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold mb-2">Start your project</h3>
                    <p className="text-apple-dark/60">Tell me about your business and let's build something great.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-apple-dark/80 ml-1">Full Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-apple-gray-50 border border-apple-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-apple-dark/80 ml-1">Email Address</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-apple-gray-50 border border-apple-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-apple-dark/80 ml-1">Business Type</label>
                      <input 
                        required
                        name="businessType"
                        type="text" 
                        value={formData.businessType}
                        onChange={handleChange}
                        placeholder="e.g. Cafe, Workshop, Startup"
                        className="w-full px-5 py-4 bg-apple-gray-50 border border-apple-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-apple-dark/80 ml-1">Project Details</label>
                      <textarea 
                        required
                        name="details"
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell me what you need..."
                        className="w-full px-5 py-4 bg-apple-gray-50 border border-apple-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-apple-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-apple-blue/90 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                    >
                      <span>Send Enquiry</span>
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryTemplate, setEnquiryTemplate] = useState("");

  const toggleEnquiry = (template?: string) => {
    setEnquiryTemplate(template || "");
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-apple-blue/20">
      <Navbar onOpenEnquiry={toggleEnquiry} />
      <main>
        <Hero onOpenEnquiry={toggleEnquiry} />
        <ProblemSolution />
        <Pricing onOpenEnquiry={toggleEnquiry} />
        <Process />
        <FinalCTA onOpenEnquiry={toggleEnquiry} />
      </main>
      <Footer onOpenEnquiry={toggleEnquiry} />
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        initialTemplate={enquiryTemplate}
      />
    </div>
  );
}

