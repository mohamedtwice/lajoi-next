import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-6">Meet Our Compassionate Team</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are a group of dedicated professionals united by a single goal: to help your child thrive.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square bg-slate-100 relative">
                 <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;