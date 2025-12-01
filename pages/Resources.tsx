import React from 'react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-white py-16 border-b border-brand-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Resources for Families</h1>
            <p className="text-lg text-slate-600">Guides, articles, and trusted links to support you at home.</p>
         </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="space-y-6">
          {RESOURCES.map((resource) => (
            <a 
              key={resource.id} 
              href={resource.link}
              className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-brand-200 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${
                  resource.category === 'External' ? 'bg-slate-100 text-slate-600' : 
                  resource.category === 'Guide' ? 'bg-brand-100 text-brand-600' : 
                  'bg-warm-100 text-amber-600'
                }`}>
                  {resource.category === 'External' ? <ExternalLink size={24} /> : 
                   resource.category === 'Guide' ? <BookOpen size={24} /> : 
                   <FileText size={24} />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-600 transition-colors mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2">Need specific information?</h3>
          <p className="text-slate-600 mb-6">Our team has curated a library of books and tools available at our center.</p>
          <span className="text-brand-600 font-semibold">Ask at the front desk during your next visit.</span>
        </div>
      </div>
    </div>
  );
};

export default Resources;