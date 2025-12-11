import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Printer } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceInterest: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-warm-50 min-h-screen pb-20">
      <div className="bg-brand-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-brand-100 text-lg">We're here to answer your questions and help you navigate the Minnesota EIDBI system.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-slate-50 p-10 border-r border-slate-100">
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-8">Contact Info</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-500 shrink-0 mt-1" />
                <div className="space-y-4">
                   <h4 className="font-semibold text-slate-800">Our Locations</h4>
                   {SITE_CONFIG.contact.locations.map((loc, idx) => (
                     <div key={idx}>
                       <p className="font-medium text-brand-700 text-sm">{loc.name}</p>
                       <p className="text-slate-600 text-sm">{loc.address}</p>
                       <p className="text-slate-400 text-xs italic">{loc.note}</p>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-brand-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Call Us</h4>
                  <p className="text-slate-600">{SITE_CONFIG.contact.phone}</p>
                </div>
              </div>
              
              {SITE_CONFIG.contact.fax && (
                <div className="flex items-start gap-4">
                  <Printer className="text-brand-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Fax</h4>
                    <p className="text-slate-600">{SITE_CONFIG.contact.fax}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <Mail className="text-brand-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Email Us</h4>
                  <p className="text-slate-600">{SITE_CONFIG.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-brand-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Hours</h4>
                  <p className="text-slate-600">{SITE_CONFIG.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            {/* <div className="mt-10 h-48 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500 text-center text-sm">
              <img src="/mpls-stp.jpeg" alt="Serving Ramsey & Hennepin Counties" className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-600 text-center text-sm mt-2">Serving Ramsey & Hennepin Counties</p> */}
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600 max-w-md">
                  Thank you for reaching out to LaJoie. A member of our team will contact you within 24 hours.
                </p>
                <Button className="mt-8" onClick={() => setSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Parent/Guardian Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="email@example.com"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="(651) 555-0123"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 mb-2">Interested Service</label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
                      value={formState.serviceInterest}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="eidbi">EIDBI / ABA Therapy</option>
                      <option value="social">Social Skills Group</option>
                      <option value="family">Family Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="How can we help? Feel free to mention if you have a diagnostic assessment already."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;