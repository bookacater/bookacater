import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-cream px-4">
      <div className="text-center">
        <h1 className="font-heading text-9xl font-bold text-brand-wine mb-4">404</h1>
        <h2 className="text-3xl font-bold text-brand-charcoal mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-brand-wine text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors shadow-sm"
        >
          <Home size={18} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
}