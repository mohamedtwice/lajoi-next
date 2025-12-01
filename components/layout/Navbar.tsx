import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '../../constants';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-warm-50/80 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="hidden bg-brand-100 p-2 rounded-full text-brand-600">
              <Sun size={28} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-2xl md:text-3xl text-slate-800 tracking-tight">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive ? 'text-brand-600 font-semibold' : 'text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button href="/book-consultation" size="sm" variant="primary">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-brand-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 px-4">
              <Button href="/book-consultation" className="w-full" onClick={() => setIsOpen(false)}>
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;