import { Link, useNavigate } from 'react-router-dom';
import { caterers } from '../data/caterers';
// Add these to your existing lucide-react imports at the top
import { Search, MapPin, ChefHat, Star, ArrowRight, Compass, FileText, CheckCircle2 } from 'lucide-react';

// Demo categories data based on your original business plan
const cateringCategories = [
  {
    title: "Wedding Catering",
    desc: "Traditional and premium wedding catering services.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80"
  },
  {
    title: "Corporate Catering",
    desc: "Professional catering for meetings and office events.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
  },
  {
    title: "Birthday Catering",
    desc: "Delicious catering options for birthday celebrations.",
    img: "https://images.unsplash.com/photo-1559090337-9c813c31b215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fEJpcnRoZGF5JTIwQ2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "House Functions",
    desc: "Comfortable catering options for family events.",
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80"
  }
];

export default function Home() {
  const navigate = useNavigate();
  // Slicing up to 6 caterers for a fuller grid on desktop (2 rows of 3)
  const featured = caterers.slice(0, 6);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/caterers');
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-charcoal text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80" alt="Event Catering" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
            Find the Perfect Caterer for Your Event
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-brand-cream drop-shadow-sm">
            Discover trusted catering services across Hyderabad and connect directly with catering professionals for your next celebration.
          </p>
          
          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-lg p-2 md:p-4 shadow-2xl flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 flex items-center bg-gray-50 rounded-md p-3 border border-gray-200 focus-within:border-brand-wine transition-colors">
              <MapPin className="text-gray-400 mr-2 flex-shrink-0" size={20} />
              <select className="bg-transparent w-full outline-none text-brand-charcoal cursor-pointer">
                <option value="">Where is your event?</option>
                <option value="banjara-hills">Banjara Hills</option>
                <option value="gachibowli">Gachibowli</option>
                <option value="hitech-city">Hitech City</option>
                <option value="madhapur">Madhapur</option>
                <option value="kukatpally">Kukatpally</option>
              </select>
            </div>
            <div className="flex-1 flex items-center bg-gray-50 rounded-md p-3 border border-gray-200 focus-within:border-brand-wine transition-colors">
              <ChefHat className="text-gray-400 mr-2 flex-shrink-0" size={20} />
              <select className="bg-transparent w-full outline-none text-brand-charcoal cursor-pointer">
                <option value="">What type of event?</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="birthday">Birthday</option>
                <option value="house-function">House Function</option>
              </select>
            </div>
            <button type="submit" className="bg-brand-wine text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center justify-center flex-shrink-0 shadow-sm">
              <Search size={20} className="mr-2" /> Search Caterers
            </button>
          </form>

<div className="flex flex-wrap justify-center gap-4 text-sm font-medium mt-4">
  <Link 
    to="/caterers" 
    className="px-5 py-2 rounded-full bg-white/10 hover:bg-brand-wine border border-white/20 hover:border-brand-wine text-white transition-all duration-300 backdrop-blur-sm shadow-sm"
  >
    Browse all caterers
  </Link>
  <Link 
    to="/list-your-business" 
    className="px-5 py-2 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-charcoal border border-white/20 hover:border-brand-gold text-white transition-all duration-300 backdrop-blur-sm shadow-sm"
  >
    List Your Catering Business
  </Link>
</div>
        </div>
      </section>

      {/* 2. CATERING CATEGORIES SECTION (NEW) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Catering Services for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From grand weddings to intimate family functions, find specialized caterers tailored to your specific event needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringCategories.map((category, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-60 w-full overflow-hidden">
                  <img src={category.img} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-bold text-xl text-white mb-2">{category.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-2">{category.desc}</p>
                  <Link to="/services" className="text-brand-gold text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-brand-wine font-medium hover:underline inline-flex items-center">
              View all services <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CATERERS SECTION */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Popular Caterers in Hyderabad</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore catering professionals offering a variety of cuisines, menus, and event services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(caterer => (
              <div key={caterer.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="relative">
                  <img src={caterer.image} alt={caterer.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-brand-charcoal shadow-sm">
                    {caterer.foodType}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-brand-charcoal line-clamp-1">{caterer.name}</h3>
                    <span className="flex items-center text-sm font-medium text-brand-gold bg-amber-50 px-2 py-1 rounded flex-shrink-0 ml-2">
                      <Star size={14} className="fill-current mr-1" /> {caterer.rating}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 flex items-center"><MapPin size={14} className="mr-1 flex-shrink-0" /> {caterer.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    <span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{caterer.guestCapacity} Guests</span>
                    <span className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{caterer.experience} Exp</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
                      <p className="font-bold text-brand-wine">₹{caterer.startingPriceVeg || caterer.startingPriceNonVeg} <span className="text-xs text-gray-500 font-normal">/ plate</span></p>
                    </div>
                    <Link to={`/caterers/${caterer.id}`} className="bg-brand-wine/10 text-brand-wine px-4 py-2 rounded-md font-medium text-sm flex items-center hover:bg-brand-wine hover:text-white transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/caterers" className="inline-flex border-2 border-brand-charcoal text-brand-charcoal px-8 py-3 rounded-md font-medium hover:bg-brand-charcoal hover:text-white transition-all shadow-sm hover:shadow-md">
              View All Caterers
            </Link>
          </div>
        </div>
      </section>

{/* 4. HOW IT WORKS SECTION */}
      <section className="py-24 bg-brand-cream/30 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">How BookACarter Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Your perfect catering experience is just four simple steps away.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative">
            
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-brand-wine/10 via-brand-wine/40 to-brand-wine/10 z-0"></div>

            {/* Mobile Vertical Connecting Line */}
            <div className="md:hidden absolute top-10 bottom-10 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-wine/10 via-brand-wine/30 to-brand-wine/10 z-0"></div>

            {[
              { num: '01', icon: Search, title: 'Search', desc: 'Tell us where your event is and what type of catering you need.' },
              { num: '02', icon: Compass, title: 'Explore', desc: 'Browse catering professionals, cuisines, prices and services.' },
              { num: '03', icon: FileText, title: 'Send Inquiry', desc: 'Submit your event requirements through our simple inquiry form.' },
              { num: '04', icon: CheckCircle2, title: 'Connect', desc: 'Our team receives your details and connects you with the caterer.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative z-10 group pt-2 md:pt-0">
                  
                  {/* Icon Circle */}
                  <div className="relative w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-brand-wine shadow-md border border-gray-50 mb-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    <Icon size={32} className="opacity-90 group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Floating Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-charcoal text-brand-cream text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.num}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-none mx-4 md:mx-0">
                    <h3 className="text-xl font-bold text-brand-charcoal mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed px-2">{step.desc}</p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA SECTION (NEW) */}
      <section className="bg-brand-wine text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to make your event unforgettable?</h2>
          <p className="text-brand-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Stop worrying about the food and start focusing on your celebration. Find the perfect catering partner today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/caterers" className="bg-brand-gold text-brand-charcoal px-8 py-3.5 rounded-md font-bold hover:bg-white transition-colors shadow-md text-center">
              Find a Caterer Now
            </Link>
            <Link to="/list-your-business" className="bg-transparent border-2 border-brand-cream text-brand-cream px-8 py-3.5 rounded-md font-bold hover:bg-brand-cream hover:text-brand-wine transition-colors text-center">
              Are you a Caterer?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}