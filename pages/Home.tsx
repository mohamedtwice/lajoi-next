import React from 'react';
import { ArrowRight, Star, Heart, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute top-0 left-0 translate-y-24 -translate-x-24 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100">
                <Heart size={14} className="fill-brand-200" />
                <span>Medicaid / EIDBI Accepted</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 leading-tight">
                Culturally competent care for the <span className="text-brand-600">Twin Cities.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                LaJoie Autism Center provides accessible, evidence-based EIDBI therapy. We bridge the gap between clinical excellence and community connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/contact" size="lg">
                  Schedule Consultation
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Our Services
                </Button>
              </div>
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1"><MapPin size={16} className="text-brand-500" /> Roseville</span>
                <span className="flex items-center gap-1"><MapPin size={16} className="text-brand-500" /> NE Minneapolis</span>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-100/50 aspect-[4/3] transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-brand-100">
                <img 
                  src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Young boy smiling at LaJoie Autism Center" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">Support that understands you</h2>
            <p className="text-slate-600">
              We specialize in Early Intensive Developmental and Behavioral Intervention (EIDBI), helping children under 21 build skills for life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-warm-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-brand-100">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" className="gap-2">
              View All EIDBI Services <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Visual / Vibe Section */}
      <section className="py-20 bg-brand-50 relative overflow-hidden">
         {/* Decorative pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
               <div className="grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1602978010620-1d8856641b6c?auto=format&fit=crop&q=80&w=800" alt="Therapist laughing with a child" className="rounded-2xl shadow-lg mt-8 object-cover h-64 w-full" />
                 <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" alt="Child high-fiving therapist" className="rounded-2xl shadow-lg object-cover h-64 w-full" />
               </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-6">
                Accessible, compliant, and welcoming.
              </h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                We believe in "last-mile" care—bringing high-quality therapy directly to the communities that need it most. Our centers are safe, regulated environments where families from all backgrounds feel respected.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-brand-500">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Licensed & Verified</h4>
                    <p className="text-sm text-slate-500">Fully enrolled MHCP provider meeting all DHS safety and quality standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-white p-2 rounded-lg shadow-sm text-brand-500">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Cultural Competency</h4>
                    <p className="text-sm text-slate-500">We proudly serve Somali, Hmong, and Spanish-speaking families with staff who understand your values.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-display font-bold text-slate-800 mb-12">Trusted by Twin Cities families</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-warm-50 p-8 rounded-2xl relative">
                 <span className="absolute top-8 left-8 text-6xl text-brand-200 font-serif opacity-50">"</span>
                 <p className="relative z-10 text-slate-600 italic mb-6 pt-4">{t.text}</p>
                 <div>
                   <p className="font-bold text-slate-800">{t.author}</p>
                   <p className="text-xs text-brand-600 uppercase tracking-wide font-semibold">{t.role}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            We accept Medical Assistance (Medicaid), TEFRA, and most private insurance plans.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;