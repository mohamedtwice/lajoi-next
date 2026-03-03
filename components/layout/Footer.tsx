import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun } from 'lucide-react';
import { SITE_CONFIG, FOOTER_NAV_ITEMS } from '../../constants';
import { ROUTES } from '../../config/routes';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            {/* <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-slate-800">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.tagline}
            </p> */}
            <img src="/lajoie-logo.png" alt="LaJoie Logo" width={233} height={200} />

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-slate-800 mb-4">Explore</h3>
            <ul className="space-y-3">
              {FOOTER_NAV_ITEMS.map((item) => (
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
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <Phone className="text-brand-500 shrink-0" size={18} />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${SITE_CONFIG.contact.phone.direct.replace(/\D/g, '')}`} className="hover:text-brand-600">
                    Direct: {SITE_CONFIG.contact.phone.direct}
                  </a>
                  <a href={`tel:${SITE_CONFIG.contact.phone.work.replace(/\D/g, '')}`} className="hover:text-brand-600">
                    Work: {SITE_CONFIG.contact.phone.work}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="text-brand-500 shrink-0" size={18} />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-brand-600">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
            <ul className="space-y-4 mt-4">
              {SITE_CONFIG.contact.locations.map((loc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-500">
                  <MapPin className="text-brand-500 shrink-0 mt-0.5" size={18} />
                  <div className="flex flex-col">
                    {/* <span className="font-semibold text-slate-700">{loc.name}</span> */}
                    <span>{loc.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-bold text-slate-800 mb-4">Hours</h3>
            <p className="text-sm text-slate-500 mb-2">
            Ready to connect? Our center is open:
            </p>
            <dl className="space-y-2 text-sm">
              {SITE_CONFIG.contact.hours.map(({ label, times }, i) => (
                <div key={i}>
                  {/* <dt className="text-slate-500 font-medium">{label}</dt> */}
                  <dd className="text-slate-700 ml-0 mt-0.5">{times}</dd>
                </div>
              ))}
            </dl>
            <p className="text-slate-500 text-sm mt-3">
              {SITE_CONFIG.contact.hoursNote}
            </p>
          </div>
        </div>

        {/* <div className="flex mx-auto justify-center space-x-4 my-6">
              <a href={SITE_CONFIG.socials.facebook} className="text-slate-400 hover:text-brand-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={SITE_CONFIG.socials.instagram} className="text-slate-400 hover:text-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.socials.linkedin} className="text-slate-400 hover:text-brand-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}

        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} <Link to={ROUTES.HOME} className="text-brand-600 hover:text-brand-700 transition-colors">{SITE_CONFIG.name}</Link>. All rights reserved. Powered by <a href="https://bsmg.co/" className="text-brand-600 hover:text-brand-700 transition-colors">BSMG Digital</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;