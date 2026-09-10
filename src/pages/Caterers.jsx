import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight, Filter, Search } from 'lucide-react';
import { caterers } from '../data/caterers';

export default function Caterers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [foodTypeFilter, setFoodTypeFilter] = useState('');

  // Frontend filtering logic
  const filteredCaterers = useMemo(() => {
    return caterers.filter(caterer => {
      const matchesSearch = caterer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            caterer.cuisines.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesLocation = locationFilter === '' || caterer.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesFood = foodTypeFilter === '' || caterer.foodType.includes(foodTypeFilter);
      
      return matchesSearch && matchesLocation && matchesFood;
    });
  }, [searchTerm, locationFilter, foodTypeFilter]);

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Find Catering Services in Hyderabad</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">Browse catering professionals based on your location, event type, cuisine and budget.</p>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search caterers or cuisines..." 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md outline-none focus:border-brand-wine"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex-1 flex gap-4">
              <select 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md outline-none focus:border-brand-wine"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Banjara Hills">Banjara Hills</option>
                <option value="Gachibowli">Gachibowli</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Secunderabad">Secunderabad</option>
              </select>

              <select 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md outline-none focus:border-brand-wine"
                value={foodTypeFilter}
                onChange={(e) => setFoodTypeFilter(e.target.value)}
              >
                <option value="">All Food Types</option>
                <option value="Veg & Non-Veg">Veg & Non-Veg</option>
                <option value="Veg">Pure Veg</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6 flex justify-between items-center">
          <p className="font-medium text-gray-700">{filteredCaterers.length} caterers found</p>
        </div>

        {/* Grid */}
        {filteredCaterers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaterers.map(caterer => (
              <div key={caterer.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="relative h-56">
                  <img src={caterer.image} alt={caterer.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-bold text-brand-charcoal shadow-sm">
                    {caterer.foodType}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-brand-charcoal line-clamp-1">{caterer.name}</h3>
                    <span className="flex items-center text-sm font-medium text-brand-gold bg-amber-50 px-2 py-1 rounded ml-2 flex-shrink-0">
                      <Star size={14} className="fill-current mr-1" /> {caterer.rating}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 flex items-center"><MapPin size={14} className="mr-1 flex-shrink-0" /> {caterer.location}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4 flex-grow">
                    {caterer.cuisines.slice(0, 3).map((cuisine, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{cuisine}</span>
                    ))}
                    {caterer.cuisines.length > 3 && <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">+{caterer.cuisines.length - 3}</span>}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="font-bold text-brand-wine">₹{caterer.startingPriceVeg || caterer.startingPriceNonVeg} <span className="text-xs text-gray-500 font-normal">/ plate</span></p>
                    </div>
                    <Link to={`/caterers/${caterer.id}`} className="bg-brand-wine text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-opacity-90 transition-colors">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">No caterers found</h3>
            <p className="text-gray-500">Try changing your filters or search terms.</p>
            <button 
              onClick={() => { setSearchTerm(''); setLocationFilter(''); setFoodTypeFilter(''); }}
              className="mt-4 text-brand-wine font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}