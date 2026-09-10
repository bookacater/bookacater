import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Info, Calendar, Users, Phone, ArrowLeft } from 'lucide-react';
import { caterers } from '../data/caterers';
import { GOOGLE_FORMS, BUSINESS_INFO } from '../config/contact';

export default function CatererDetails() {
  const { id } = useParams();
  const caterer = caterers.find(c => c.id === id);

  if (!caterer) {
    return <div className="py-32 text-center text-xl">Caterer not found. <Link to="/caterers" className="text-brand-wine underline">Go back</Link></div>;
  }

  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="text-sm text-gray-500 flex items-center mb-6">
          <Link to="/" className="hover:text-brand-wine">Home</Link> <span className="mx-2">/</span>
          <Link to="/caterers" className="hover:text-brand-wine">Caterers</Link> <span className="mx-2">/</span>
          <span className="text-brand-charcoal font-medium">{caterer.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 mb-8">
          <div className="h-64 md:h-96 w-full relative">
            <img src={caterer.image} alt={caterer.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="p-6 md:p-10 flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-semibold">{caterer.foodType}</span>
                <span className="flex items-center text-sm font-medium text-gray-600">
                  <Star size={16} className="text-brand-gold fill-current mr-1" /> {caterer.rating} ({caterer.reviews} Reviews)
                </span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">{caterer.name}</h1>
              <p className="flex items-center text-gray-600 mb-6">
                <MapPin size={18} className="mr-2 text-gray-400" /> {caterer.location}
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">{caterer.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-100 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center"><Calendar size={14} className="mr-1"/> Established</p>
                  <p className="font-semibold">{caterer.established}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center"><Star size={14} className="mr-1"/> Experience</p>
                  <p className="font-semibold">{caterer.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center"><Users size={14} className="mr-1"/> Guest Capacity</p>
                  <p className="font-semibold">{caterer.guestCapacity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center"><MapPin size={14} className="mr-1"/> Radius</p>
                  <p className="font-semibold">{caterer.serviceRadius}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caterer.highlights.map((h, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle size={18} className="text-green-600 mr-2 flex-shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">Cuisines</h3>
                <div className="flex flex-wrap gap-2">
                  {caterer.cuisines.map(c => (
                    <span key={c} className="bg-gray-100 border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Pricing & Action */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-brand-cream border border-gray-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-xl mb-6">Pricing Estimate</h3>
                
                {caterer.startingPriceVeg && (
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Vegetarian</span>
                    <div className="text-right">
                      <span className="text-xs text-gray-500">From</span>
                      <p className="font-bold text-lg text-brand-charcoal">₹{caterer.startingPriceVeg} <span className="text-sm font-normal text-gray-500">/ plate</span></p>
                    </div>
                  </div>
                )}
                
                {caterer.startingPriceNonVeg && (
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600">Non-Vegetarian</span>
                    <div className="text-right">
                      <span className="text-xs text-gray-500">From</span>
                      <p className="font-bold text-lg text-brand-charcoal">₹{caterer.startingPriceNonVeg} <span className="text-sm font-normal text-gray-500">/ plate</span></p>
                    </div>
                  </div>
                )}
                
                <div className="bg-blue-50 text-blue-800 p-3 rounded text-xs flex mb-6">
                  <Info size={16} className="mr-2 flex-shrink-0" /> 
                  <p>Prices vary based on menu selection, guest count, and specific event requirements.</p>
                </div>

                <a 
                  href={GOOGLE_FORMS.CUSTOMER_INQUIRY} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full block text-center bg-brand-wine text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition-colors mb-3"
                >
                  Send Inquiry
                </a>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full block text-center border border-gray-300 bg-white text-gray-700 font-medium py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}