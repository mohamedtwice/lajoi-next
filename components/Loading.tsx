import React from 'react';
import { Sun } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-full mb-4 animate-pulse">
          <Sun className="text-brand-600" size={32} strokeWidth={2.5} />
        </div>
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;

