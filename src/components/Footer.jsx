import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tagline Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent-gold">
              Basaweswara Roofing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where strength meets luxury.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-gold">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start">
                <span className="font-medium mr-2">Location:</span>
                <span>Tandur</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <div className="flex flex-col">
                  <a
                    href="tel:6300682020"
                    className="hover:text-accent-gold transition-all duration-300 hover:translate-x-1"
                  >
                    6300682020
                  </a>
                  <a
                    href="tel:9603194529"
                    className="hover:text-accent-gold transition-all duration-300 hover:translate-x-1"
                  >
                    9603194529
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-sm text-gray-300 hover:text-accent-gold transition-all duration-300 hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-sm text-gray-300 hover:text-accent-gold transition-all duration-300 hover:translate-x-1"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="text-sm text-gray-300 hover:text-accent-gold transition-all duration-300 hover:translate-x-1"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-sm text-gray-300 hover:text-accent-gold transition-all duration-300 hover:translate-x-1"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Basaweswara Roofing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
