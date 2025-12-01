import React, { useState } from 'react';
import { CheckCircle, Calendar, ArrowLeft, ShieldCheck, Clock, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const BookConsultation: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    diagnosisStatus: 'diagnosed', // default reasonable start
    insuranceProvider: '',
    message: '',
    preferredTime: 'morning'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-warm-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full text-center border border-brand-100">
          <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Thank you, {formData.parentName}. We have received your consultation request. A member of our intake team will call you at <strong>{formData.phone}</strong> within 24 hours to confirm details.
          </p>
          <div className="space-y-3">
            <Button href="/" className="w-full">Return Home</Button>
            <Button href="/resources" variant="ghost" className="w-full">Browse Resources</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-brand-100">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-brand-600 mb-6 transition-colors font-medium text-sm">
            <ArrowLeft size={16} className="mr-1" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
            Schedule Your Free Consultation
          </h1>
          <p className="text-slate-600 text-lg">
            Take the first step towards personalized support. No commitment required.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-brand-300 to-brand-500"></div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            
            {/* Section 1: Parent Info */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-brand-100 text-brand-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">1</span>
                Your Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Parent or Guardian Name"
                    value={formData.parentName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Section 2: Child Info */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-brand-100 text-brand-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">2</span>
                Child Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="childAge" className="block text-sm font-medium text-slate-700 mb-1.5">Child's Age (or Date of Birth)</label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="e.g. 5 years old"
                    value={formData.childAge}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="diagnosisStatus" className="block text-sm font-medium text-slate-700 mb-1.5">Diagnosis Status</label>
                  <select
                    id="diagnosisStatus"
                    name="diagnosisStatus"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    value={formData.diagnosisStatus}
                    onChange={handleChange}
                  >
                    <option value="diagnosed">Diagnosed with Autism (ASD)</option>
                    <option value="suspected">Suspected / Seeking Diagnosis</option>
                    <option value="other">Other Developmental Delay</option>
                    <option value="none">No Diagnosis / Just Inquiring</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="insuranceProvider" className="block text-sm font-medium text-slate-700 mb-1.5">Insurance Provider <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input
                    type="text"
                    id="insuranceProvider"
                    name="insuranceProvider"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="e.g. Medical Assistance (MA), Blue Cross, UCare..."
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-slate-500 mt-1">We accept Medical Assistance, TEFRA, and most major private plans.</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Section 3: Details */}
            <div>
               <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span className="bg-brand-100 text-brand-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">3</span>
                How can we help?
              </h3>
              <div className="space-y-5">
                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">What are your primary goals or concerns?</label>
                   <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="Briefly describe what you are looking for (e.g. speech support, school readiness, behavioral help)..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Callback Time</label>
                   <div className="flex flex-wrap gap-3">
                     {['Morning (8am-12pm)', 'Afternoon (12pm-5pm)', 'Evening (5pm-7pm)'].map((time) => (
                       <label key={time} className={`
                         flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all
                         ${formData.preferredTime === time.split(' ')[0].toLowerCase() 
                           ? 'bg-brand-50 border-brand-500 text-brand-700' 
                           : 'bg-white border-slate-200 text-slate-600 hover:border-brand-200'}
                       `}>
                         <input 
                           type="radio" 
                           name="preferredTime" 
                           value={time.split(' ')[0].toLowerCase()}
                           checked={formData.preferredTime === time.split(' ')[0].toLowerCase()}
                           onChange={handleChange}
                           className="hidden"
                         />
                         <span className="text-sm font-medium">{time}</span>
                         {formData.preferredTime === time.split(' ')[0].toLowerCase() && <Check size={14} />}
                       </label>
                     ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full shadow-lg shadow-brand-200" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting Request...' : 'Request Consultation'}
              </Button>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> HIPAA Compliant</span>
                <span className="flex items-center gap-1"><Clock size={12} /> Fast Response</span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;