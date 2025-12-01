import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-100 p-1.5 rounded-full text-brand-600">
                <Sun size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-slate-800">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONFIG.socials.facebook} className="text-slate-400 hover:text-brand-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={SITE_CONFIG.socials.instagram} className="text-slate-400 hover:text-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.socials.linkedin} className="text-slate-400 hover:text-brand-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-slate-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-500 hover:text-brand-600 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-slate-800 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="text-brand-500 shrink-0" size={18} />
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-brand-600">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="text-brand-500 shrink-0" size={18} />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-brand-600">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
               <li className="flex items-start gap-3 text-sm text-slate-500 pt-2">
                <MapPin className="text-brand-500 shrink-0" size={18} />
                <div className="space-y-2">
                  {SITE_CONFIG.contact.locations.map((loc, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-semibold text-slate-700">{loc.name}</span>
                      <span>{loc.address}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-bold text-slate-800 mb-4">Hours</h3>
            <p className="text-sm text-slate-500 mb-2">
              Our center is open for scheduled sessions and inquiries:
            </p>
            <p className="font-medium text-slate-700 text-sm">
              {SITE_CONFIG.contact.hours}
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Weekend appointments available upon request.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;