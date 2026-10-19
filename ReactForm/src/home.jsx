import React, { useState, useMemo } from 'react';
import { 
  Recycle, 
  Factory, 
  Leaf, 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Filter, 
  Calculator, 
  FileText, 
  Building2, 
  X, 
  Layers, 
  Zap, 
  Droplets, 
  Globe, 
  Menu, 
  Sparkles,
  ExternalLink,
  Users
} from 'lucide-react';

export default function Home() {
  // Mobile Nav Toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Material Showcase State
  const [activeMaterialTab, setActiveMaterialTab] = useState('all');
  const [selectedMaterialDetail, setSelectedMaterialDetail] = useState(null);

  // Quote Request Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Calculator State
  const [calcMaterial, setCalcMaterial] = useState('plastic');
  const [calcTonnage, setCalcTonnage] = useState(50);
  const [calcClientType, setCalcClientType] = useState('supplier');

  // Calculated Impact Metrics based on Tonnage and Material
  const calculatedImpact = useMemo(() => {
    const tons = Number(calcTonnage) || 0;
    let co2Factor = 1.5; // tons CO2 saved per ton
    let energyFactor = 2400; // kWh saved per ton
    let waterFactor = 4000; // liters saved per ton

    switch (calcMaterial) {
      case 'plastic':
        co2Factor = 1.8;
        energyFactor = 3100;
        waterFactor = 5200;
        break;
      case 'polymer':
        co2Factor = 2.2;
        energyFactor = 3800;
        waterFactor = 4800;
        break;
      case 'paper':
        co2Factor = 1.1;
        energyFactor = 1600;
        waterFactor = 7000;
        break;
      case 'pvc':
        co2Factor = 1.9;
        energyFactor = 2900;
        waterFactor = 3500;
        break;
      default:
        break;
    }

    return {
      co2: Math.round(tons * co2Factor),
      energy: Math.round(tons * energyFactor).toLocaleString(),
      water: Math.round(tons * waterFactor).toLocaleString()
    };
  }, [calcMaterial, calcTonnage]);

  // Materials Data
  const materialsData = [
    {
      id: 'pet-flake',
      category: 'plastic',
      name: 'PET Flakes & Pellets',
      tagline: 'Food-grade & Industrial Grade Polyethylene Terephthalate',
      specs: 'IV 0.72 - 0.84 dL/g, Purity > 99.8%, Moisture < 0.5%',
      inputs: 'Post-consumer beverage bottles, thermoform trays, strapping tape scrap',
      outputs: 'Bottle-to-bottle resin, polyester fiber, packaging sheets, industrial strapping',
      color: 'from-emerald-500 to-teal-700',
      badge: 'Food Contact Safe'
    },
    {
      id: 'hdpe-pellets',
      category: 'plastic',
      name: 'HDPE Regrind & Granules',
      tagline: 'High-Density Polyethylene for Extrusion & Injection Molding',
      specs: 'MFI 0.3 - 2.0 g/10min, Density 0.95-0.96 g/cm³',
      inputs: 'Milk jugs, detergent bottles, drums, crates, industrial piping',
      outputs: 'Corrugated pipes, recycled crates, plastic lumber, blow-molded containers',
      color: 'from-teal-500 to-cyan-700',
      badge: 'High Impact Resistance'
    },
    {
      id: 'eng-polymer',
      category: 'polymer',
      name: 'Engineered Polymers (ABS / PC)',
      tagline: 'Custom compounded polymer alloys & high-heat thermoplastics',
      specs: 'Tensile Strength 45-65 MPa, Izod Impact 15-30 kJ/m²',
      inputs: 'Automotive trim scrap, e-waste housings, appliances, manufacturing purge',
      outputs: 'Auto interior components, electronic enclosures, technical moldings',
      color: 'from-indigo-600 to-blue-800',
      badge: 'Custom Compounding'
    },
    {
      id: 'pp-compounds',
      category: 'polymer',
      name: 'Polypropylene (PP) Compounds',
      tagline: 'Talc-filled & glass-reinforced re-granulate',
      specs: 'MFI 5 - 25 g/10min, Melt Temp 160-175°C',
      inputs: 'Woven bags, automotive bumpers, food containers, battery cases',
      outputs: 'Automotive parts, home appliance panels, heavy-duty pallets',
      color: 'from-sky-600 to-indigo-700',
      badge: 'High Thermal Stability'
    },
    {
      id: 'pvc-rigid',
      category: 'pvc',
      name: 'Rigid PVC Pipe & Profile Regrind',
      tagline: 'High-purity unplasticized PVC (uPVC) re-granules',
      specs: 'K-Value 65-68, Bulk Density 0.55-0.65 g/cm³',
      inputs: 'Window frame offcuts, conduit pipes, vinyl siding, construction trim',
      outputs: 'Co-extruded pipe core, cable ducting, vinyl flooring substrate',
      color: 'from-slate-600 to-zinc-800',
      badge: 'Flame Retardant'
    },
    {
      id: 'pvc-flexible',
      category: 'pvc',
      name: 'Flexible PVC Eco-Granules',
      tagline: 'Plasticized PVC compound for extrusion and molding',
      specs: 'Shore A Hardness 60-90, Elongation 250-350%',
      inputs: 'Cable jacketing scrap, medical tubing offcuts, industrial hoses',
      outputs: 'Gaskets, footwear soles, soft hoses, automotive floor mats',
      color: 'from-emerald-700 to-emerald-900',
      badge: 'UV Resistant Options'
    },
    {
      id: 'paper-occ',
      category: 'paper',
      name: 'OCC & Kraft Paper Pulp',
      tagline: 'Old Corrugated Containers processed for papermaking',
      specs: 'Fiber Length > 1.8mm, Moisture 10-12%, Ash content < 3%',
      inputs: 'Double-sorted corrugated boxes, factory packaging scrap, shipping cartons',
      outputs: 'Testliner paper, recycled fluting medium, egg trays, molded pulp packaging',
      color: 'from-amber-600 to-amber-800',
      badge: '100% Recycled Pulp'
    },
    {
      id: 'paper-onp',
      category: 'paper',
      name: 'High-Grade Deinked Pulp',
      tagline: 'ONP & Sorted Office Paper eco-pulp conversion',
      specs: 'ISO Brightness 75-82%, Dirt Count < 10 ppm',
      inputs: 'Sorted office paper, printing plant cut-offs, newsprint waste',
      outputs: 'Tissue paper grades, newsprint stock, recycled stationery paper',
      color: 'from-amber-700 to-stone-800',
      badge: 'Zero Chemical Bleach'
    }
  ];

  const filteredMaterials = activeMaterialTab === 'all' 
    ? materialsData 
    : materialsData.filter(item => item.category === activeMaterialTab);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setIsQuoteModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30">
              <Sparkles className="w-3 h-3" /> ISO 14001:2015 & ISO 9001 Certified
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline">Leading Eco-Industrial Polymers & Plastic Processing Plant</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+8801700000000" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +880 (2) 881-9920
            </a>
            <a href="mailto:info@rkrecycle.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> info@rkrecycle.com
            </a>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-300">
              <Recycle className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-black text-xl tracking-tight text-slate-900">RK RECYCLE</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">PLANT</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Company Limited</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#hero" className="hover:text-emerald-600 transition-colors">Home</a>
            <a href="#materials" className="hover:text-emerald-600 transition-colors">Materials & Products</a>
            <a href="#process" className="hover:text-emerald-600 transition-colors">Recycling Process</a>
            <a href="#estimator" className="hover:text-emerald-600 transition-colors">Impact Estimator</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">About & Facility</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact Us</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Home</a>
            <a href="#materials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Materials & Products</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Recycling Process</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Impact Estimator</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">About Facility</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium border-b border-slate-100">Contact Us</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
              className="w-full mt-2 py-3 bg-emerald-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
        {/* Background Gradients & Industrial Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Factory className="w-4 h-4" /> Advanced Material Recovery Facility
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Transforming Industrial Waste into High-Grade <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Raw Resources</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                RK Recycle Company Limited operates state-of-the-art washing, sorting, and extrusion compounding plants for <strong>Plastic, Polymers, Paper, and PVC</strong>. Driving the global transition toward a circular economy.
              </p>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
                >
                  <FileText className="w-5 h-5" /> Request Bulk Quote
                </button>
                <a 
                  href="#materials"
                  className="px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Explore Materials <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Key Highlights Badges */}
              <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">50,000+</div>
                  <div className="text-xs text-slate-400 font-medium">Tons Processed / Yr</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">99.8%</div>
                  <div className="text-xs text-slate-400 font-medium">Resin Purity Standard</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">Zero</div>
                  <div className="text-xs text-slate-400 font-medium">Landfill Target Policy</div>
                </div>
              </div>

            </div>

            {/* Right Column Visual / Card Grid Feature */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-sm text-slate-200">Industrial Processing Hub</span>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                    <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-100">Plastic & Polymer Granules</div>
                      <div className="text-xs text-slate-400">PET Flakes, HDPE, LDPE, PP Pellets</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                    <div className="p-3 rounded-lg bg-teal-500/20 text-teal-400">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-100">Rigid & Flexible PVC</div>
                      <div className="text-xs text-slate-400">Micro-granules, Pipe grade & Cable PVC</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
                    <div className="p-3 rounded-lg bg-amber-500/20 text-amber-400">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-100">Paper & Cardboard Pulp</div>
                      <div className="text-xs text-slate-400">OCC, ONP & Craft Pulp Conversion</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Factory location: Dhaka Industrial Zone</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Direct Delivery Ready
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MATERIALS WE PROCESS SHOWCASE */}
      <section id="materials" className="py-20 bg-slate-100/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-100">
              Raw Material Supply & Recycling Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Materials & Polymer Specifications
            </h2>
            <p className="text-slate-600 mt-2">
              We process diverse post-industrial and post-consumer feedstocks into certified eco-grade re-granules and packaging raw materials.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { key: 'all', label: 'All Materials' },
              { key: 'plastic', label: 'Plastics (PET / HDPE / PP)' },
              { key: 'polymer', label: 'Engineered Polymers' },
              { key: 'pvc', label: 'PVC (Rigid & Flexible)' },
              { key: 'paper', label: 'Paper & Pulp' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveMaterialTab(tab.key)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  activeMaterialTab === tab.key
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Material Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMaterials.map(mat => (
              <div 
                key={mat.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className={`h-3 bg-gradient-to-r ${mat.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                        {mat.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                      {mat.tagline}
                    </p>

                    <div className="space-y-2.5 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span className="font-bold text-slate-700 block mb-0.5">Key Spec:</span>
                        <span className="text-slate-600 font-mono text-[11px]">{mat.specs}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Inputs: </span>
                        <span className="text-slate-500">{mat.inputs}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button 
                    onClick={() => setSelectedMaterialDetail(mat)}
                    className="w-full py-2.5 rounded-lg border border-emerald-600/30 text-emerald-700 font-semibold text-xs hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    View Full Spec Sheet <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RECYCLING PROCESS / HOW WE WORK */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-100">
              End-to-End Plant Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Our Industrial Recycling Process
            </h2>
            <p className="text-slate-600 mt-2">
              Advanced multi-stage material recovery ensuring high mechanical property retention and minimal thermal degradation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            {[
              {
                step: '01',
                title: 'Collection & Intake',
                desc: 'Baled and loose industrial scrap material reception with rigorous moisture & contamination testing.',
                icon: Truck,
                color: 'text-blue-600 bg-blue-50 border-blue-200'
              },
              {
                step: '02',
                title: 'NIR Auto Sorting',
                desc: 'Near-Infrared (NIR) optical sorting separates polymers by resin code, color, and density.',
                icon: Filter,
                color: 'text-teal-600 bg-teal-50 border-teal-200'
              },
              {
                step: '03',
                title: 'Shredding & Washing',
                desc: 'Heavy-duty wet granulation followed by hot friction washer lines removing glues and residue.',
                icon: RefreshCwIcon,
                color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
              },
              {
                step: '04',
                title: 'Extrusion & Filter',
                desc: 'Vacuum degassed twin-screw extrusion with continuous laser melt filtration down to 90 microns.',
                icon: Zap,
                color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
              },
              {
                step: '05',
                title: 'Lab QA & Dispatch',
                desc: 'MFI, Izod density testing, and automated bagging into 25kg bags or 1-ton mega sacks.',
                icon: Award,
                color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
              }
            ].map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold ${st.color}`}>
                          <IconComp className="w-6 h-6" />
                        </span>
                        <span className="text-2xl font-black text-slate-300 font-mono">{st.step}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{st.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* METRICS & IMPACT COUNTER DASHBOARD */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">180,000+</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-2">Total Metric Tons Recycled</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 mx-auto flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">320,000</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-2">Tons CO₂ Emissions Avoided</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">450 GWh</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-2">Grid Energy Conserved</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono">92%</div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-2">Process Water Recycled On-Site</div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR & CALCULATOR SECTION */}
      <section id="estimator" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Form Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-100">
                Environmental & Supply Tool
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Material Impact & Order Calculator
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Calculate the environmental savings your company achieves by supplying scrap or procuring recycled raw materials from RK Recycle Company Limited.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800 text-sm">ESG & Sustainability Reporting Ready</div>
                    <div className="text-xs text-slate-500">All metrics conform to standard life-cycle assessment (LCA) guidelines.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Consistent Quality Guarantee</div>
                    <div className="text-xs text-slate-500">Every lot includes certified lab test reports for melt index & purity.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Box */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Supply & Impact Estimator</h3>
                  <p className="text-xs text-slate-500">Select material type and annual estimated volume</p>
                </div>
              </div>

              <div className="space-y-6">
                
                {/* Client Type */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">I am interested in:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcClientType('supplier')}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        calcClientType === 'supplier'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Supplying Waste/Scrap
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcClientType('buyer')}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        calcClientType === 'buyer'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Purchasing Granules/Pulp
                    </button>
                  </div>
                </div>

                {/* Material Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Select Primary Material Category</label>
                  <select 
                    value={calcMaterial} 
                    onChange={(e) => setCalcMaterial(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="plastic">Plastics (PET Flakes, HDPE, LDPE, PP Pellets)</option>
                    <option value="polymer">Engineered Polymers (ABS, PC, Nylon)</option>
                    <option value="pvc">PVC Material (Rigid Pipe & Soft PVC)</option>
                    <option value="paper">Paper & Packaging Pulp (OCC & ONP)</option>
                  </select>
                </div>

                {/* Tonnage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase text-slate-600">Estimated Volume (Tons)</label>
                    <span className="font-mono text-emerald-600 font-extrabold text-base bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {calcTonnage} Metric Tons
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={calcTonnage} 
                    onChange={(e) => setCalcTonnage(e.target.value)}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>10 Tons</span>
                    <span>500 Tons</span>
                    <span>1,000 Tons</span>
                  </div>
                </div>

                {/* Impact Output Box */}
                <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-2xl p-6 text-white space-y-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    Estimated Annual Environmental Savings
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center border-t border-slate-700/80 pt-4">
                    <div>
                      <div className="text-2xl font-black text-emerald-400 font-mono">~{calculatedImpact.co2}</div>
                      <div className="text-[11px] text-slate-300">Tons CO₂ Saved</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-teal-300 font-mono">{calculatedImpact.energy}</div>
                      <div className="text-[11px] text-slate-300">kWh Energy Saved</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono">{calculatedImpact.water}</div>
                      <div className="text-[11px] text-slate-300">Liters Water Saved</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Detailed Commercial Offer <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT PLANT & FACILITIES */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-100">
                State-of-the-Art Processing Plant
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                RK Recycle Company Limited
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Established as a pioneer in modern industrial recycling, RK Recycle Company Limited operates integrated recycling lines with advanced European sorting, shredding, and extrusion machinery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We partner with international brand owners, packaging manufacturers, and municipal waste managers to close the loop on <strong>Plastics, Polymers, PVC, and Paper packaging waste</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-600" /> 120,000 sq ft
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Covered Facility Area</div>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <div className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" /> 250+ Skilled
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Engineers & Plant Technicians</div>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">ISO Certified Quality</h4>
                <p className="text-xs text-slate-600">ISO 9001 and ISO 14001 certified quality control lab ensuring batch-to-batch consistency.</p>
              </div>

              <div className="p-6 rounded-2xl bg-teal-50/50 border border-teal-200/80">
                <Globe className="w-8 h-8 text-teal-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Global Export Standards</h4>
                <p className="text-xs text-slate-600">Supplying eco-resins to manufacturing units across Asia, Europe, and North America.</p>
              </div>

              <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-200/80">
                <Zap className="w-8 h-8 text-cyan-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">High-Toughness Extrusion</h4>
                <p className="text-xs text-slate-600">Dual degassing extruders capable of handling mixed density industrial polymers easily.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
                <Leaf className="w-8 h-8 text-emerald-700 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Circular Economy Focus</h4>
                <p className="text-xs text-slate-600">Enabling zero-landfill goals for major manufacturing conglomerates.</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CORPORATE PARTNERS / TESTIMONIAL LOGO BANNER */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Trusted Raw Material & Recycling Partner For Global Manufacturers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="font-black text-xl text-slate-600 font-mono tracking-tighter">POLY-PACK CORP</div>
            <div className="font-black text-xl text-slate-600 font-mono tracking-tighter">ECO-CONTAINERS</div>
            <div className="font-black text-xl text-slate-600 font-mono tracking-tighter">GLOBAL RESINS INC</div>
            <div className="font-black text-xl text-slate-600 font-mono tracking-tighter">APEX PIPING LTD</div>
            <div className="font-black text-xl text-slate-600 font-mono tracking-tighter">KRAFT PULP CO</div>
          </div>
        </div>
      </section>

      {/* CONTACT & DIRECT INQUIRY SECTION */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Get In Touch With Plant Engineers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Contact RK Recycle Company
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you want to sell post-industrial scrap in bulk or require high-grade recycled plastic & paper raw material for production, our plant specialists are ready.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <MapPin className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-slate-200">Plant & Corporate Office</div>
                    <div className="text-xs text-slate-400 mt-0.5">Plot 14-18, Industrial Estate, Gazipur / Dhaka, Bangladesh</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Phone className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-slate-200">Phone Hotline</div>
                    <div className="text-xs text-slate-400 mt-0.5">+880 (2) 881-9920 | +880 1700-000000</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <Mail className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-slate-200">Email Inquiries</div>
                    <div className="text-xs text-slate-400 mt-0.5">info@rkrecycle.com | sales@rkrecycle.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-800/80 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" /> Plant Direct Inquiry Form
              </h3>

              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Acme Polymers Ltd." 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Person Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@acme.com" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+880..." 
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Material Interest</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500">
                    <option>Plastic Recycling (PET, HDPE, PP Flakes & Granules)</option>
                    <option>Engineered Polymer Alloys (ABS, PC Compound)</option>
                    <option>PVC Regrind & Flexible Eco-Granules</option>
                    <option>Paper Packaging Pulp (OCC / ONP Pulp)</option>
                    <option>Waste Collection Partnership / Plant Visit Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Estimated Tonnage & Technical Requirements</label>
                  <textarea 
                    rows="3" 
                    placeholder="Provide details on required MFI, color preference, monthly quantity, delivery destination..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Submit Inquiry to Plant Manager <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
            
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Recycle className="w-5 h-5 text-emerald-400" />
                <span>RK RECYCLE CO. LTD.</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Pioneering eco-industrial polymer transformation, recycling plastic, polymers, PVC, and paper waste into sustainable high-value raw materials.
              </p>
            </div>

            <div>
              <div className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Quick Links</div>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home Page</a></li>
                <li><a href="#materials" className="hover:text-emerald-400 transition-colors">Materials We Process</a></li>
                <li><a href="#process" className="hover:text-emerald-400 transition-colors">Plant Operations Flow</a></li>
                <li><a href="#estimator" className="hover:text-emerald-400 transition-colors">Impact & Quote Calculator</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">Facility Capabilities</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Material Categories</div>
              <ul className="space-y-2">
                <li><a href="#materials" className="hover:text-emerald-400 transition-colors">PET & HDPE Flakes</a></li>
                <li><a href="#materials" className="hover:text-emerald-400 transition-colors">PP & Polypropylene Compounds</a></li>
                <li><a href="#materials" className="hover:text-emerald-400 transition-colors">Rigid & Soft PVC Granules</a></li>
                <li><a href="#materials" className="hover:text-emerald-400 transition-colors">OCC & Paper Deinked Pulp</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px]">Certifications</div>
              <p className="text-slate-500 mb-3">
                ISO 14001:2015 Environmental Standard | ISO 9001 Quality Management Certified.
              </p>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-mono">ISO 14001</span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-teal-400 font-mono">ISO 9001</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} RK Recycle Company Limited. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Material Supply</a>
              <a href="#" className="hover:text-slate-300">ESG Report</a>
            </div>
          </div>

        </div>
      </footer>

      {/* MODAL: MATERIAL SPECIFICATION DETAILS */}
      {selectedMaterialDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-200 space-y-4">
            <button 
              onClick={() => setSelectedMaterialDetail(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                {selectedMaterialDetail.badge}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {selectedMaterialDetail.name}
            </h3>
            <p className="text-xs text-slate-500">{selectedMaterialDetail.tagline}</p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Technical Specifications:</span>
                <p className="font-mono text-slate-600">{selectedMaterialDetail.specs}</p>
              </div>

              <div>
                <span className="font-bold text-slate-800 block mb-1">Acceptable Intake Sources:</span>
                <p className="text-slate-600">{selectedMaterialDetail.inputs}</p>
              </div>

              <div>
                <span className="font-bold text-slate-800 block mb-1">Recommended End Applications / Outputs:</span>
                <p className="text-slate-600">{selectedMaterialDetail.outputs}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button 
                onClick={() => {
                  setSelectedMaterialDetail(null);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Request Sample & Price Offer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: GET A QUOTE / COMMERCIAL OFFER */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <button 
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {quoteSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
                <p className="text-xs text-slate-600">
                  Thank you for contacting RK Recycle Company Limited. Our commercial engineering team will respond with a quote within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Recycle className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Fast Material Quote</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Bulk Commercial Quotation</h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                  <input required type="text" placeholder="Your Company" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input required type="email" placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Material Required</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>PET Flakes (Food / Non-Food Grade)</option>
                    <option>HDPE / PP Regrind & Pellets</option>
                    <option>Rigid PVC Pipe Grade Regrind</option>
                    <option>Flexible PVC Eco-Granules</option>
                    <option>OCC Paper Pulp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Monthly Quantity (Tons)</label>
                  <input required type="number" placeholder="e.g. 50" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  Send Quotation Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

// Helper icon for refresh flow
function RefreshCwIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}