import React, { useState } from 'react';
import { 
  Recycle, 
  Factory, 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Menu, 
  X,
  FileText
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const materials = [
    {
      title: 'Plastic Materials',
      desc: 'PET Flakes, HDPE Regrind, and LDPE Films reprocessed into high-purity production pellets.',
      badge: 'PET / HDPE / LDPE',
      color: 'border-emerald-500'
    },
    {
      title: 'Engineered Polymers',
      desc: 'ABS, Polypropylene (PP), and custom compounded thermoplastics with high heat stability.',
      badge: 'PP / ABS / PC',
      color: 'border-teal-500'
    },
    {
      title: 'Rigid & Soft PVC',
      desc: 'uPVC window profile regrind, cable sheath granules, and flexible gasket compounds.',
      badge: 'uPVC / Soft PVC',
      color: 'border-cyan-500'
    },
    {
      title: 'Paper & Packaging Pulp',
      desc: 'Deinked pulp, OCC corrugated container kraft, and sorted office paper repulping.',
      badge: 'OCC / ONP Pulp',
      color: 'border-amber-500'
    }
  ];

  const features = [
    {
      icon: Factory,
      title: 'State-of-the-Art Plant',
      desc: 'Advanced automated sorting, hot friction washing, and vacuum degassing extrusion lines.'
    },
    {
      icon: ShieldCheck,
      title: 'Certified Quality QA',
      desc: 'Strict melt flow index (MFI), density, and moisture testing for every recycled batch.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Operations',
      desc: 'Zero-landfill policy with continuous on-site process water treatment & closed-loop filtration.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* HEADER & NAVBAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
              <Recycle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 block leading-none">
                RK RECYCLE
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-semibold">
                Company Limited
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#materials" className="hover:text-emerald-600 transition-colors">Materials</a>
            <a href="#features" className="hover:text-emerald-600 transition-colors">Plant Features</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-xs"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a 
              href="#materials" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-700 font-medium py-1"
            >
              Materials
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-700 font-medium py-1"
            >
              Plant Features
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-700 font-medium py-1"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-700 font-medium py-1"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block w-full text-center py-2 bg-emerald-600 text-white rounded-lg font-medium text-sm mt-2"
            >
              Get a Quote
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-white to-slate-100 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sustainable Industrial Material Recycling</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Modern Recycling Solutions for <span className="text-emerald-600">Plastic, Polymer, Paper & PVC</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              RK Recycle Company Limited transforms industrial scrap and packaging waste into high-grade raw granules and pulp. Partnering with manufacturers to build a cleaner circular economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors text-center shadow-md shadow-emerald-600/10 flex items-center justify-center gap-2"
              >
                Inquire For Bulk Supply <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#materials" 
                className="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-sm transition-colors text-center"
              >
                Explore Materials
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/80">
              <div>
                <div className="text-2xl font-bold text-slate-900">50,000+</div>
                <div className="text-xs text-slate-500 font-medium">Tons Recycled / Year</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99.8%</div>
                <div className="text-xs text-slate-500 font-medium">Material Purity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">ISO Certified</div>
                <div className="text-xs text-slate-500 font-medium">Quality Assurance</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MATERIALS OVERVIEW */}
      <section id="materials" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Materials We Process & Supply
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We collect, sort, wash, and re-granulate key industrial materials with high mechanical strength retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 border-t-4 ${item.color} rounded-xl p-6 border-x border-b border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between`}
              >
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-emerald-600 gap-1">
                  <span>Custom Orders Available</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PLANT FEATURES & ADVANTAGES */}
      <section id="features" className="py-16 sm:py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Partner With RK Recycle?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Equipped with modern machinery and tested processes for reliable quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ABOUT US BRIEF */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-emerald-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                About RK Recycle Company Limited
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Driving Sustainable Industrial Manufacturing
              </h2>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Operating from our main plant facility, RK Recycle Company Limited is committed to reducing environmental impact through high-capacity recycling of post-industrial plastic, polymer compounds, PVC profiles, and paper scrap. We supply manufacturer-ready recycled materials globally.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO Quality Tested</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Eco-Friendly Processing</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Reliable Supply Chain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Get In Touch
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Send us your material requirements or inquiries regarding scrap intake.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Plant Location</div>
                    <div className="text-xs text-slate-600">Gazipur Industrial Estate, Dhaka, Bangladesh</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Phone</div>
                    <div className="text-xs text-slate-600">+880 (2) 881-9920 / +880 1700-000000</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-xs text-slate-600">info@rkrecycle.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" /> Send Inquiry Message
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-xs font-semibold">
                  Thank you! Your message has been sent successfully. Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Your Company" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="email@company.com" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Material Interest</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option>Plastic Materials (PET / HDPE)</option>
                        <option>Engineered Polymers (PP / ABS)</option>
                        <option>PVC Regrind / Granules</option>
                        <option>Paper & Packaging Pulp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Requirements</label>
                    <textarea 
                      rows="3" 
                      placeholder="Specify required tonnage, specs or questions..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-xs border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <Recycle className="w-4 h-4 text-emerald-400" />
            <span>RK Recycle Company Limited</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} RK Recycle Company Limited. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}