import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
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
        {/* <Globe className="text-brand-500 shrink-0" size={16} /> */}
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
    <div
    // className={`relative overflow-hidden rounded-[2rem] ${bgClassName} px-6 py-12 sm:px-12 sm:py-16 ring-1 ring-slate-900/5 ${className}`}
    className={`relative overflow-hidden ${bgClassName} !bg-[#1F3E61] px-6 py-12 sm:px-12 sm:py-16 ring-1 ring-slate-900/5 ${className}`}
    >
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent" /> */}

      <div className="relative mx-auto max-w-3xl text-center">

        <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-brand-500 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
          {description}
        </p>

        <div
          className="group relative mt-10 flex gap-[--marquee-gap] overflow-hidden py-4 [--marquee-gap:0.75rem] sm:[--marquee-gap:1rem] [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)] motion-reduce:overflow-x-auto"
        >
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className={`flex shrink-0 items-center gap-[--marquee-gap] animate-marquee group-hover:[animation-play-state:paused] ${
                copy === 1 ? 'motion-reduce:hidden' : ''
              }`}
            >
              {SPOKEN_LANGUAGES.map((language) => (
                <li key={language} className="shrink-0">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-sm font-medium text-[#1F3E61] shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm transition-colors duration-300 hover:text-brand-800 hover:ring-brand-200">
                    {/* <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-400" /> */}
                    {language}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl border-t border-slate-900/5 pt-6 text-sm text-brand-50">
          {footnote ?? defaultFootnote}
        </p>
      </div>
    </div>
  );
};

export default LanguagesWeSpeak;
