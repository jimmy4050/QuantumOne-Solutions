import React from 'react';
import useTitle from '../hooks/useTitle';
import { COMPANY_VALUES, TEAM_DATA } from '../constants';

const AboutPage: React.FC = () => {
  useTitle('About Us');
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold font-heading">About QuantumOne Solutions</h1>
          <p className="text-base mt-2">Your Partner in Digital Transformation</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 font-heading">Our Journey</h2>
            <p className="text-neutral-500 mb-4 text-justify">
              Founded in Surat, Gujarat, QuantumOne Solutions was born from a vision to provide businesses with technology solutions that are not just powerful, but also practical and reliable. With years of collective experience, our team is committed to innovation and excellence, helping our clients navigate the complexities of the digital world and achieve sustainable growth.
            </p>
            <p className="text-neutral-500 text-justify">
              We believe in building long-term partnerships, understanding our clients' unique challenges, and delivering tailored solutions that drive real business value.
            </p>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/about1/600/400" alt="Team collaboration" className="rounded-lg shadow-lg relative z-10" loading="lazy"/>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/20 rounded-lg z-0"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-20 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 font-heading">Our Vision</h3>
            <p className="text-neutral-500 text-justify">To be the most trusted and innovative IT solutions partner for businesses in Gujarat and beyond, empowering them to thrive in the digital era.</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 font-heading">Our Mission</h3>
            <p className="text-neutral-500 text-justify">To deliver reliable, scalable, and cost-effective IT infrastructure, software, and cloud solutions, backed by exceptional customer service and technical expertise.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
       <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-12 font-heading">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value) => (
              <div key={value.title} className="p-6">
                <div className="flex items-center justify-center bg-primary/10 rounded-full w-20 h-20 mb-6 mx-auto">
                    <value.icon className="w-10 h-10 text-primary"/>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">{value.title}</h3>
                <p className="text-neutral-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-12 font-heading">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM_DATA.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-md">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
                <h3 className="text-lg font-bold text-neutral-900 font-heading">{member.name}</h3>
                <p className="text-secondary">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;