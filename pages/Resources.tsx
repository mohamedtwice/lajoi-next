import React, { useState } from 'react';
import { FileText, ExternalLink, BookOpen, Users, Map } from 'lucide-react';
import { RESOURCES } from '../constants';
import { Resource } from '../types';

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories
  const categories = Array.from(new Set(RESOURCES.map(r => r.category)));
  
  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all' 
    ? RESOURCES 
    : RESOURCES.filter(r => r.category === selectedCategory);
  
  // Group resources by category
  const groupedResources: Record<string, Resource[]> = filteredResources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Diagnosis & Assessment':
        return <FileText size={24} />;
      case 'Cultural & Community Support':
        return <Users size={24} />;
      case 'Logistics & Rights':
        return <Map size={24} />;
      default:
        return <ExternalLink size={24} />;
    }
  };

  const getCategoryColors = (category: string) => {
    switch (category) {
      case 'Diagnosis & Assessment':
        return 'bg-brand-100 text-brand-600';
      case 'Cultural & Community Support':
        return 'bg-yellow-100 text-yellow-600';
      case 'Logistics & Rights':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'Diagnosis & Assessment':
        return 'Your pathway to getting started with services and support.';
      case 'Cultural & Community Support':
        return 'Community organizations serving multicultural families.';
      case 'Logistics & Rights':
        return 'Transportation, educational advocacy, and state resources.';
      default:
        return '';
    }
  };

  return (
    <div className="pb-20">
      <div className="bg-white py-16 border-b border-brand-100">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Resources for Families</h1>
            <p className="text-lg text-slate-600">Trusted partners and resources to support your family's journey.</p>
         </div>
      </div>

      {/* Category Filter */}
      <div className="bg-brand-50 border-b border-brand-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Resources
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        {Object.entries(groupedResources).map(([category, resources]) => (
          <div key={category} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">{category}</h2>
              <p className="text-slate-600">{getCategoryDescription(category)}</p>
            </div>
            
            <div className="space-y-4">
              {resources.map((resource) => (
                <a 
                  key={resource.id} 
                  href={resource.link}
                  target={resource.link.startsWith('http') ? '_blank' : undefined}
                  rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-brand-200 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 ${getCategoryColors(resource.category)}`}>
                      {getCategoryIcon(resource.category)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-600 transition-colors mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12 bg-gradient-to-br from-brand-50 to-blue-50 p-8 rounded-2xl text-center border border-brand-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Need Help Navigating These Resources?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team is here to guide you through the process of accessing services, connecting with community partners, and finding the right support for your family.
          </p>
          <a 
            href="/book-consultation" 
            className="inline-block bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;