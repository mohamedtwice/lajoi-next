import React from 'react';
import { Smile, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-white py-16">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-6">Our Mission</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              To provide accessible, culturally competent, and effective autism therapy to underserved communities in the Twin Cities.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-200 rounded-3xl transform rotate-3 translate-x-2 translate-y-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1545558014-a69f9c0bdc04?auto=format&fit=crop&q=80&w=800" 
              alt="Diverse group of smiling children" 
              className="relative rounded-3xl shadow-xl w-full z-10"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-slate-800">Why LaJoie?</h2>
            <p className="text-slate-600 leading-relaxed">
              LaJoie Autism Center was founded on the belief that high-quality therapy should be accessible to everyone, regardless of zip code or language. We operate as a community anchor, bridging the gap between clinical diagnoses and day-to-day support.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We have withstood industry challenges to remain a stable, verified, and high-risk compliant provider. By locating our centers in accessible hubs—like our Roseville medical suite and our Northeast Minneapolis community location—we ensure families can get the care they need, when they need it.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-50 p-8 rounded-2xl">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-brand-500 mb-4 shadow-sm">
              <Smile size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Community First</h3>
            <p className="text-slate-600">We are deeply embedded in the Somali, Hmong, and diverse communities of Ramsey and Hennepin counties.</p>
          </div>
          <div className="bg-warm-100 p-8 rounded-2xl">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-brand-500 mb-4 shadow-sm">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Compliance & Safety</h3>
            <p className="text-slate-600">Your child's safety is paramount. We adhere to rigorous DHS screening, background checks, and supervision standards.</p>
          </div>
          <div className="bg-accent-light/50 p-8 rounded-2xl">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-brand-500 mb-4 shadow-sm">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Family Partnership</h3>
            <p className="text-slate-600">We empower parents with the tools to navigate the medical and educational systems effectively.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;