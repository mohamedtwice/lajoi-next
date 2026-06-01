import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Globe, Languages } from 'lucide-react';
import { SPOKEN_LANGUAGES } from '../../constants';
import { ROUTES } from '../../config/routes';

interface LanguagesWeSpeakProps {
  /** "full" renders the trust-building card; "compact" renders a single footer line. */
  variant?: 'full' | 'compact';
  /** Heading shown on the full variant. */
  title?: string;
  /** Intro copy shown on the full variant. */
  description?: string;
  /** Closing note (e.g. encouraging contact in another language) on the full variant. */
  footnote?: React.ReactNode;
  /** Render the "Contact us" link inside the footnote. Defaults to true. */
  showContactLink?: boolean;
  /** Background utility class for the full variant card. */
  bgClassName?: string;
  className?: string;
}

// Plain, search-friendly sentence describing our multilingual services.
const SEO_TEXT = `LaJoie Autism Center serves multilingual families throughout Minnesota. Our staff members speak ${SPOKEN_LANGUAGES.slice(0, -1).join(', ')}, and ${SPOKEN_LANGUAGES[SPOKEN_LANGUAGES.length - 1]}, helping families access autism services in the language they are most comfortable using.`;

const LanguagesWeSpeak: React.FC<LanguagesWeSpeakProps> = ({
  variant = 'full',
  title = 'We Speak Your Language',
  description = 'Our diverse team is committed to making every family feel welcome and understood. We proudly provide support in:',
  footnote,
  showContactLink = true,
  bgClassName = 'bg-brand-50',
  className = '',
}) => {
  if (variant === 'compact') {
    return (
      <p className={`flex items-center gap-2 text-sm text-slate-500 ${className}`}>
        <Globe className="text-brand-500 shrink-0" size={16} />
        <span>
          <span className="font-medium text-slate-600">Languages Spoken:</span>{' '}
          {SPOKEN_LANGUAGES.join(', ')}
        </span>
      </p>
    );
  }

  const defaultFootnote = (
    <>
      Need assistance in another language?{' '}
      {showContactLink ? (
        <Link to={ROUTES.CONTACT} className="font-semibold text-brand-700 hover:text-brand-800 underline underline-offset-2">
          Contact us
        </Link>
      ) : (
        <span className="font-semibold text-brand-700">Contact us</span>
      )}{' '}
      and we'll do our best to help.
    </>
  );

  return (
    <div className={`rounded-3xl ${bgClassName} p-8 sm:p-12 ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-brand-600 shadow-sm mb-6">
          <Languages size={26} />
        </div>
        <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">{title}</h2>
        <p className="text-slate-600 leading-relaxed mb-8">{description}</p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {SPOKEN_LANGUAGES.map((language) => (
            <li
              key={language}
              className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              <Check className="text-brand-500 shrink-0" size={15} />
              {language}
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-500">{footnote ?? defaultFootnote}</p>
      </div>

      {/* Structured, search-friendly description for multilingual autism searches. */}
      <p className="sr-only">{SEO_TEXT}</p>
    </div>
  );
};

export default LanguagesWeSpeak;
