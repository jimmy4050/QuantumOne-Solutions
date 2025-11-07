import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4 font-heading">QuantumOne Solutions</h3>
            <p className="text-neutral-300 mb-6 text-justify">
              Your trusted IT infrastructure and software partner for end-to-end enterprise technology solutions.
            </p>
            <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                    <div key={social.name} className="relative group">
                      <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-neutral-300 hover:text-secondary transition-colors">
                          <social.icon size={24} />
                      </a>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          {social.name}
                      </div>
                    </div>
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
                <span>{CONTACT_DETAILS.address}</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  {CONTACT_DETAILS.phones.map(phone => (
                    <a key={phone.tel} href={phone.tel} className="hover:text-secondary transition-colors block">{phone.display}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href={CONTACT_DETAILS.email.href} className="hover:text-secondary transition-colors">{CONTACT_DETAILS.email.display}</a>
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