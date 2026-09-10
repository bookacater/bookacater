import { Link } from 'react-router-dom';
import { 
  Search, 
  ListChecks, 
  MessageSquare, 
  PartyPopper, 
  ShieldCheck, 
  Users, 
  Heart, 
  CheckCircle 
} from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-cream min-h-screen pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-charcoal text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80" 
            alt="Catering Setup" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="text-brand-gold font-bold tracking-wider text-sm uppercase mb-4 block">Our Story</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">About BookACarter</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are Hyderabad’s premier catering discovery platform, built to make finding the perfect culinary partner simple, transparent, and completely stress-free.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & MISSION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
              Connecting You With Culinary Excellence
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Hyderabad is famous for its rich food culture and grand celebrations. Yet, finding the right caterer has traditionally relied on scattered word-of-mouth recommendations, endless phone calls, and hidden pricing. <strong>BookACarter was created to change that.</strong>
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you are planning a massive traditional wedding, a sleek corporate event, or an intimate house function, we bring the city's best catering professionals directly to your screen. We provide a single platform where you can explore authentic menus, compare pricing, check availability, and send inquiries directly.
            </p>
            
            <div className="bg-white p-8 rounded-xl border-l-4 border-brand-gold shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <PartyPopper size={100} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-brand-wine relative z-10">Our Mission</h3>
              <p className="text-gray-600 text-lg italic relative z-10">
                "To make event planning effortless for customers while empowering local catering professionals to showcase their talent and grow their businesses online."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] relative z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80" 
                alt="Chefs preparing food" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background blob */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-wine/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (COMPANY VALUES) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">Why Choose BookACarter?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We are more than just a directory. We are your partner in planning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Trusted Professionals</h3>
              <p className="text-gray-600 leading-relaxed">Every caterer on our platform is vetted for quality, hygiene, and reliability so you can book with absolute confidence.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-brand-wine" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Transparent Choices</h3>
              <p className="text-gray-600 leading-relaxed">No hidden fees or surprise menus. View starting prices, read genuine reviews, and compare options side-by-side.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">Direct Connections</h3>
              <p className="text-gray-600 leading-relaxed">We cut out the middleman. Send your requirements directly to the caterer and negotiate exactly what you want.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UPGRADED PROCESS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-wider text-sm uppercase mb-2 block">The Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">How We Make It Happen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">A seamless experience from finding the perfect menu to enjoying your celebration.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Search, title: 'Discover', desc: 'Find caterers based on location, event type, cuisine and budget.' },
            { icon: ListChecks, title: 'Compare', desc: 'Explore catering profiles, services, pricing and experience.' },
            { icon: MessageSquare, title: 'Connect', desc: 'Send an inquiry and connect directly with the catering professional.' },
            { icon: PartyPopper, title: 'Celebrate', desc: 'Choose the catering service that fits your event and enjoy your celebration.' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 overflow-hidden text-center z-10"
            >
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-wine/10 to-brand-gold/10 group-hover:from-brand-wine group-hover:to-brand-gold transition-all duration-500"></div>
              
              {/* Faint Background Number */}
              <div className="absolute -bottom-8 -right-2 text-[120px] font-heading font-black text-gray-50 opacity-60 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:-translate-x-2 transition-all duration-700 pointer-events-none -z-10 select-none">
                {idx + 1}
              </div>

              {/* Card Content */}
              <div className="relative z-20">
                <div className="bg-brand-cream w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-wine group-hover:shadow-md transition-all duration-300">
                  <item.icon size={28} className="text-brand-wine group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-brand-charcoal">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA SECTION */}
      <section className="bg-brand-charcoal text-white py-16 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to plan your next event?</h2>
          <p className="text-gray-300 mb-8 text-lg">Join thousands of happy customers in Hyderabad who found their perfect catering match through BookACarter.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/caterers" className="bg-brand-wine text-white px-8 py-3.5 rounded-md font-bold hover:bg-opacity-90 transition-colors shadow-md flex items-center justify-center">
              <Search size={18} className="mr-2" /> Find a Caterer
            </Link>
            <Link to="/list-your-business" className="bg-transparent border-2 border-brand-gold text-brand-gold px-8 py-3.5 rounded-md font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-colors flex items-center justify-center">
              List Your Business
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}