import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  useTitle('Contact Us');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate form submission
    setTimeout(() => {
      setStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, support, or to discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-5 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">Address</h3>
                    <p className="text-neutral-500">Surat, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">Phone / WhatsApp</h3>
                    <a href="tel:+919558900157" className="text-neutral-500 hover:text-primary">+91 95589 00157</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">Email</h3>
                    <a href="mailto:info@quantumone.com" className="text-neutral-500 hover:text-primary">info@quantumone.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-primary text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Send Message
                  </button>
                </div>
                {status && <p className="text-center text-green-600">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <div className="w-full h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.3924771578!2d72.6840702717088!3d21.1591204488339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1678886568163!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Surat, Gujarat"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;