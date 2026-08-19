import React from 'react';
import { SITE_CONFIG, SPOKEN_LANGUAGES } from '../../constants';

/**
 * Emits schema.org JSON-LD for the center so search engines, maps, and voice
 * assistants can read our contact details and hours of operation directly.
 *
 * Everything here is derived from SITE_CONFIG, so updating hours or the email
 * address in constants.ts keeps the markup and the visible UI in sync.
 */
const StructuredData: React.FC = () => {
  const { contact, name, tagline } = SITE_CONFIG;
  const primaryLocation = contact.locations[0];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    description: tagline,
    ...(typeof window !== 'undefined' ? { url: window.location.origin } : {}),
    email: contact.email,
    telephone: contact.phone.direct,
    faxNumber: contact.fax,
    address: {
      '@type': 'PostalAddress',
      streetAddress: primaryLocation.street,
      addressLocality: primaryLocation.city,
      addressRegion: primaryLocation.state,
      postalCode: primaryLocation.zip,
      addressCountry: 'US',
    },
    areaServed: ['Ramsey County, MN', 'Hennepin County, MN'],
    availableLanguage: SPOKEN_LANGUAGES,
    openingHoursSpecification: contact.hours.map(({ dayOfWeek, opens, closes }) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek,
      opens,
      closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is data-only; escape `<` so it can never close the tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
};

export default StructuredData;
