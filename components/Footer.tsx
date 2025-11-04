import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 font-heading">QuantumOne Solutions</h3>
            <p className="text-neutral-300 mb-6">
              Your trusted IT infrastructure and software partner for end-to-end enterprise technology solutions.
            </p>
            <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-neutral-300 hover:text-secondary transition-colors">
                        <social.icon size={24} />
                    </a>
                ))}
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-neutral-300 hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4 font-heading">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-neutral-300 hover:text-secondary transition-colors">Server Hardware</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-secondary transition-colors">Cloud Computing</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-secondary transition-colors">Software Development</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-secondary transition-colors">HIMS & LIMS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4 font-heading">Contact Us</h4>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a href="tel:+919558900157" className="hover:text-secondary transition-colors">+91 95589 00157</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:info@quantumone.com" className="hover:text-secondary transition-colors">info@quantumone.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-4">
        <p className="text-neutral-500 text-sm">&copy; {new Date().getFullYear()} QuantumOne Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;