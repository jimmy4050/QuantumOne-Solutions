import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';
import { SOCIAL_LINKS, CONTACT_DETAILS } from '../constants';
import { MapPin, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success';

const ContactPage: React.FC = () => {
  useTitle(
    'Contact Us',
    "Get in touch with QuantumOne Solutions. Contact us for inquiries, support, or to discuss your next IT project. We're here to help you achieve your business goals.",
    ['contact QuantumOne', 'IT support', 'project inquiry', 'IT consultation', 'Surat IT company']
  );
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000); // Reset status after 3 seconds
    }, 1500);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-[clamp(2rem,3vw,2.5rem)] font-bold font-heading">Get in Touch</h1>
          <p className="text-base mt-2 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, support, or to discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden grid md:grid-cols-12 dark:bg-neutral-800 dark:shadow-none">
            {/* Contact Info */}
            <div className="md:col-span-5 bg-primary text-white p-8 md:p-12">
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold mb-8 font-heading">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-7 h-7 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-heading">Address</h3>
                    <p className="text-neutral-200">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-7 h-7 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-heading">Phone / WhatsApp</h3>
                    {CONTACT_DETAILS.phones.map(phone => (
                      <a key={phone.tel} href={phone.tel} className="text-neutral-200 hover:text-white block">{phone.display}</a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-7 h-7 text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-heading">Email</h3>
                    <a href={CONTACT_DETAILS.email.href} className="text-neutral-200 hover:text-white">{CONTACT_DETAILS.email.display}</a>
                  </div>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold font-heading mb-4">Follow Us</h3>
                    <div className="flex space-x-5">
                         {SOCIAL_LINKS.map(social => (
                             <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-neutral-200 hover:text-white transition-colors">
                                 <social.icon size={28} />
                             </a>
                         ))}
                    </div>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 p-8 md:p-12">
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-neutral-900 mb-6 font-heading dark:text-neutral-100">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-neutral-100 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-neutral-100 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-400" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-neutral-100 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-400" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
                  <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-neutral-100 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-400"></textarea>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-10">
                    {status === 'sending' && (
                      <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                        <Loader2 className="animate-spin mr-2" />
                        <span>Sending...</span>
                      </div>
                    )}
                    {status === 'success' && (
                      <div className="flex items-center text-green-600">
                        <CheckCircle2 className="mr-2" />
                        <span>Message Sent!</span>
                      </div>
                    )}
                  </div>
                  <button type="submit" disabled={status === 'sending'} className="bg-primary text-white py-3 px-8 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-heading disabled:bg-neutral-400 disabled:cursor-not-allowed">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-neutral-900 mb-8 text-center font-heading dark:text-neutral-100">Find Us On The Map</h2>
            <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.3924771578!2d72.6840702717088!3d21.1591204488339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%2Gaurat!5e0!3m2!1sen!2sin!4v1678886568163!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Surat, Gujarat"
              ></iframe>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;