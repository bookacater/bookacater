import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Wedding Catering",
    description: "Traditional and premium wedding catering services to make your big day unforgettable.",
    events: "Weddings, Receptions",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
  },
  {
    title: "Corporate Catering",
    description: "Professional catering for meetings, conferences, office parties and corporate lunches.",
    events: "Conferences, Seminars, Board Meetings",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
  },
  {
    title: "Birthday & Party Catering",
    description: "Delicious and fun catering options for private parties and celebrations of all sizes.",
    events: "Birthdays, Anniversaries, Get-togethers",
    image: "https://media.istockphoto.com/id/2162175726/photo/modern-baby-shower-buffet-setup-with-elegant-decor.webp?a=1&b=1&s=612x612&w=0&k=20&c=DrweLPvFmjnAVrnrlwncm4LErjlSlhClwgg8OMB7WDc="
  },
  {
    title: "House Function Catering",
    description: "Comfortable, hygienic, and traditional catering options for intimate family and home events.",
    events: "Housewarmings, Pujas, Naming Ceremonies",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80"
  }
];

export default function Services() {
  return (
    <div className="bg-brand-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">Catering Services for Every Occasion</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover specialized catering professionals on BookACarter tailored exactly to the type of event you are hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h2 className="absolute bottom-6 left-6 font-heading text-2xl font-bold text-white">{service.title}</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Perfect For:</span>
                  <p className="text-sm font-medium text-brand-charcoal">{service.events}</p>
                </div>
                <Link to="/caterers" className="inline-flex items-center text-brand-wine font-medium hover:text-brand-gold transition-colors">
                  Explore Caterers <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}