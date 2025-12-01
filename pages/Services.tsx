import React from 'react';
import { SERVICES } from '../constants';
import { ROUTES } from '../config/routes';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  return (
    <div className="bg-warm-50 min-h-screen pb-20">
      <div className="bg-white py-16 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-6">Therapeutic Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our multidisciplinary approach ensures that every aspect of your child's development is supported under one roof.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Referral Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between">
           <img 
             src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800" 
             alt="Doctor consulting with a child" 
             className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md shrink-0 border-4 border-white"
           />
           <div className="flex-1 text-center md:text-left">
             <h3 className="font-bold text-slate-800 text-xl mb-2">Looking for a Diagnosis?</h3>
             <p className="text-slate-600">
               To access EIDBI services, a Comprehensive Multi-Disciplinary Evaluation (CMDE) is required. While we focus on treatment, we can refer you to trusted diagnostic partners like the Rosenberg Center.
             </p>
           </div>
           <Button href={ROUTES.BOOK_CONSULTATION} variant="outline" size="sm" className="shrink-0">
             Contact for Referral
           </Button>
        </div>

        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col md:flex-row gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                  <service.icon size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{service.title}</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                {service.description}
              </p>
              
              <div className="bg-warm-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-4">Key Benefits:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-brand-400 rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg relative bg-brand-50">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                 />
              </div>
            </div>
          </div>
        ))}

        <div className="bg-brand-600 rounded-3xl p-12 text-center text-white mt-16">
          <h2 className="text-2xl font-bold mb-4">Not sure if you qualify?</h2>
          <p className="mb-8 text-brand-100">Our team can help verify your eligibility for Medical Assistance or private insurance coverage.</p>
          <Button href={ROUTES.BOOK_CONSULTATION} variant="secondary">Contact Us for Guidance</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;