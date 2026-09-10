import { CheckCircle, ArrowRight, Store, Users, TrendingUp, PhoneCall } from 'lucide-react';
import { GOOGLE_FORMS, BUSINESS_INFO } from '../config/contact';

export default function ListYourBusiness() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 md:opacity-20 pointer-events-none">
           <Store size={400} className="text-brand-gold -mt-20 -mr-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Are You a Catering Professional?</h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join BookACarter and connect your catering business with thousands of customers looking for reliable catering services in Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={GOOGLE_FORMS.VENDOR_REGISTRATION} 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-wine text-white px-8 py-4 rounded-md font-bold hover:bg-opacity-90 transition-all flex items-center justify-center text-lg"
              >
                List Your Catering Business <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-4 rounded-md font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all flex items-center justify-center text-lg"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal">Why Partner With BookACarter?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
            <div className="bg-amber-100 p-4 rounded-full mr-6 flex-shrink-0">
              <Users size={28} className="text-brand-gold" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Reach More Customers</h3>
              <p className="text-gray-600">Showcase your catering services to people actively looking for caterers for weddings, parties, and corporate events in your area.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
            <div className="bg-red-50 p-4 rounded-full mr-6 flex-shrink-0">
              <Store size={28} className="text-brand-wine" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Build Your Online Presence</h3>
              <p className="text-gray-600">Create a professional, trusted profile for your catering business with photos, menus, reviews, and detailed service information.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
            <div className="bg-blue-50 p-4 rounded-full mr-6 flex-shrink-0">
              <PhoneCall size={28} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Get Direct Inquiries</h3>
              <p className="text-gray-600">Customers can view your profile and send targeted inquiries regarding their specific event needs directly to our team, who routes them to you.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start">
            <div className="bg-green-50 p-4 rounded-full mr-6 flex-shrink-0">
              <TrendingUp size={28} className="text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-brand-charcoal mb-3">Grow Your Business</h3>
              <p className="text-gray-600">Fill up your calendar. Get more opportunities for high-value weddings, corporate luncheons, and large-scale celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold mb-8">Simple Onboarding Process</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-left">
             <div className="flex items-center text-gray-700">
               <CheckCircle className="text-brand-wine mr-2" size={20}/> Submit your details via form
             </div>
             <div className="hidden md:block w-8 border-t-2 border-gray-300"></div>
             <div className="flex items-center text-gray-700">
               <CheckCircle className="text-brand-wine mr-2" size={20}/> Our team reviews & calls you
             </div>
             <div className="hidden md:block w-8 border-t-2 border-gray-300"></div>
             <div className="flex items-center text-gray-700">
               <CheckCircle className="text-brand-wine mr-2" size={20}/> Profile goes live
             </div>
          </div>
          <a 
            href={GOOGLE_FORMS.VENDOR_REGISTRATION} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-brand-wine text-white px-10 py-3 rounded-md font-bold hover:bg-opacity-90 shadow-md"
          >
            Fill Registration Form Now
          </a>
        </div>
      </section>
    </div>
  );
}