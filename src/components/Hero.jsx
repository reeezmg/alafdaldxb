import React from 'react';
import { Mail, MapPin } from 'lucide-react';

import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div>
            <p className="section-eyebrow text-[var(--primary)] mb-4">BUILT AROUND YOUR PROJECT</p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Bespoke &amp; Modular Spaces
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Bespoke modular spaces, tailored to your project.
            </p>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600 max-w-xl">
              We design, manufacture, deliver and install spaces for work, living and welfare.
              From executive offices and accommodation to acoustic ZPods, choose bespoke layouts and finishes with sale or rental options to suit your project.
            </p>

            {/* Quote and product links */}
            <div className="mt-6 flex flex-row sm:flex-row gap-4 items-center justify-center sm:justify-start sm:items-start">

              {/* Primary Button */}
              <a
                href="#contact"
                className="
      px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow 
      inline-block whitespace-nowrap 
      transition-all duration-300 
      text-sm sm:text-base
      hover:shadow-[0_0_12px_rgba(210,41,30,0.25)]
    "
                style={{ background: 'var(--primary)', color: 'var(--white)' }}
              >
                Request a Quote
              </a>

              {/* Secondary Button */}
              <a
                href="#products"
                className="
      px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-300 text-gray-700 
      inline-block whitespace-nowrap 
      transition-all duration-300
      text-sm sm:text-base 
      hover:shadow-[0_0_12px_rgba(0,0,0,0.20)]
    "
              >
                Our Products
              </a>

            </div>


            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <a href="https://wa.me/971586919282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 58 691 9282" className="flex items-center gap-2 hover:underline">
                <WhatsAppIcon size={16} />+971 58 691 9282
              </a>

              <a href="https://wa.me/971564791282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 56 479 1282" className="flex items-center gap-2 hover:underline">
                <WhatsAppIcon size={16} />+971 56 479 1282
              </a>

              <a href="mailto:sales@alafdaldxb.com" className="flex items-center gap-2 hover:underline">
                <Mail size={16} />sales@alafdaldxb.com
              </a>

              <div className="flex items-center gap-2">
                <MapPin size={16} />Ras Al Khor, Dubai
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="w-full  rounded-lg overflow-hidden">
              <img
                src="/assets/cabin1.png"
                alt="Bespoke modular office with glazed frontage and meeting space"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
