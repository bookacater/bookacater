import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_FORMS } from '../config/contact';

export default function Contact() {
  return (
    <div className="bg-brand-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">Talk to the BookACarter Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about catering services, vendor registration, or your upcoming event? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-brand-wine" size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Phone</h3>
            <p className="text-gray-500 mb-6">{BUSINESS_INFO.phone}</p>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="inline-block bg-white border-2 border-brand-charcoal text-brand-charcoal px-6 py-2 rounded-md font-medium hover:bg-brand-charcoal hover:text-white transition-colors">
              Call Now
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-brand-wine" size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Email</h3>
            <p className="text-gray-500 mb-6">{BUSINESS_INFO.email}</p>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-block bg-white border-2 border-brand-charcoal text-brand-charcoal px-6 py-2 rounded-md font-medium hover:bg-brand-charcoal hover:text-white transition-colors">
              Email Us
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-gray-100">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-brand-wine" size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">Location</h3>
            <p className="text-gray-500 mb-6">{BUSINESS_INFO.location}</p>
            <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              <MessageSquare size={18} className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-brand-wine text-white rounded-2xl p-10 text-center shadow-lg">
          <h2 className="font-heading text-3xl font-bold mb-4">Looking to book a caterer?</h2>
          <p className="text-brand-cream/80 mb-8 max-w-2xl mx-auto">
            Tell us about your event requirements, and our team will connect you with the perfect catering professional in Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={GOOGLE_FORMS.CUSTOMER_INQUIRY} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-gold text-brand-charcoal px-8 py-3 rounded-md font-bold hover:bg-white transition-colors"
            >
              Send an Inquiry
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}