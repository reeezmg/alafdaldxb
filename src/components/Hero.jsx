import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Reliable Portable Sanitation & Porta Cabins
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We supply premium porta cabins, portable toilets, showers, and site solutions.
            </p>

            {/*  glow on hover */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start">

              {/* Primary Button */}
              <a
                href="#contact"
                className="
      px-6 py-3 rounded-full font-semibold shadow 
      inline-block whitespace-nowrap 
      transition-all duration-300 
      hover:shadow-[0_0_12px_rgba(249,115,22,0.55)]
    "
                style={{ background: 'var(--primary)', color: 'var(--white)' }}
              >
                Request a Quote
              </a>

              {/* Secondary Button */}
              <a
                href="#products"
                className="
      px-6 py-3 rounded-full border border-gray-300 text-gray-700 
      inline-block whitespace-nowrap 
      transition-all duration-300 
      hover:shadow-[0_0_12px_rgba(0,0,0,0.20)]
    "
              >
                Our Products
              </a>

            </div>


            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <a href="tel:+971586919282" className="flex items-center gap-2 hover:underline">
                <Phone size={16} />+971 58 691 9282
              </a>

              <a href="tel:+971564791282" className="flex items-center gap-2 hover:underline">
                <Phone size={16} />+971 56 479 1282
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
            <div className="w-full aspect-[16/10] rounded-lg overflow-hidden">
              <img
                src="/assets/Cabin1.png"
                alt="Hero"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
