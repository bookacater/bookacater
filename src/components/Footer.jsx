
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { BUSINESS_INFO } from '../config/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">

          {/* Brand Information */}
          <div className="md:col-span-1">
            <span className="font-heading text-2xl font-bold text-white mb-4 block">
              BookACater
            </span>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Discover trusted catering services and connect directly with
              catering professionals for your next event in Hyderabad.
            </p>

            {/* Social Media */}
            <h4 className="text-white font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex items-center gap-4">

              <a
                href="https://www.instagram.com/bookacater?srtk=MTUwOHc2ZmYyZHRrMQ%3D%3DL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BookACater on Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:text-white hover:bg-brand-gold hover:border-brand-gold transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.youtube.com/bookacater"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to BookACater on YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-300 hover:text-white hover:bg-brand-gold hover:border-brand-gold transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-gold">About</Link></li>
              <li><Link to="/caterers" className="hover:text-brand-gold">Caterers</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Users</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/caterers" className="hover:text-brand-gold">Find Caterers</Link></li>

              <li>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold"
                >
                  Send Inquiry
                </a>
              </li>

              <li>
                <Link to="/list-your-business" className="hover:text-brand-gold text-brand-gold">
                  List Your Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">

              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-0.5 text-brand-gold shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>

              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-0.5 text-brand-gold shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </li>

              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-brand-gold shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} BookACater. All rights reserved.
            Connecting customers with independent catering professionals.
          </p>
        </div>

      </div>
    </footer>
  );
}
