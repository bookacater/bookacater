import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Caterers', path: '/caterers' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative font-medium transition-colors duration-200 ${
      isActive
        ? 'text-brand-wine'
        : 'text-brand-charcoal hover:text-brand-wine'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="font-heading text-2xl font-bold text-brand-wine">
              BookACarter
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-brand-wine rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 border-l pl-8 border-gray-200">

              <NavLink
                to="/list-your-business"
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? 'text-brand-wine'
                      : 'text-brand-charcoal hover:text-brand-wine'
                  }`
                }
              >
                List Your Business
              </NavLink>

              <NavLink
                to="/caterers"
                className="bg-brand-wine text-white px-5 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-sm"
              >
                Find a Caterer
              </NavLink>

            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-brand-charcoal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">

          <div className="px-4 pt-2 pb-6 space-y-2">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-brand-cream text-brand-wine'
                      : 'text-brand-charcoal hover:bg-brand-cream hover:text-brand-wine'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">

              <NavLink
                to="/list-your-business"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-brand-cream text-brand-wine'
                      : 'text-brand-charcoal'
                  }`
                }
              >
                List Your Business
              </NavLink>

              <NavLink
                to="/caterers"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-wine text-white px-5 py-3 rounded-md font-medium"
              >
                Find a Caterer
              </NavLink>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}