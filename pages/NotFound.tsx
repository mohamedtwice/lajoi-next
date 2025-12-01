import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import { ROUTES } from '../config/routes';

const NotFound: React.FC = () => {
  return (
    <div className=" bg-warm-50 flex items-center justify-center p-4">
      <div className="pt-6 md:pt-12 max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-display font-bold text-brand-200 mb-4">404</h1>
          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
            <Search size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>

        <div className="space-y-3">
          <Button href={ROUTES.HOME} className="w-full sm:w-auto">
            <Home size={18} className="mr-2" />
            Return to Home
          </Button>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Button href={ROUTES.ABOUT} variant="ghost" size="sm">
              About Us
            </Button>
            <Button href={ROUTES.SERVICES} variant="ghost" size="sm">
              Our Services
            </Button>
            <Button href={ROUTES.CONTACT} variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-sm text-slate-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

