import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
        {/* ABOUT US */}
        <div className="space-y-4 bg-[var(--primary)] text-white py-10 px-6 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="leading-relaxed max-w-3xl mx-auto">
            With over a decade of excellence, AL AFDAL delivers high-quality
            prefab and portable sanitation solutions across the UAE, KSA, and
            India. We combine durable materials, fast delivery, and professional
            installation to deliver modular offices, porta cabins, and
            sanitation units trusted across industries.
          </p>
        </div>

        {/* IMAGE */}
        <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md">
          <img
            src="/assets/cabin2.jpg"
            alt="Prefab cabin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* VISION & MISSION – subtle orange style */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Vision */}
          <div className="p-8 rounded-lg text-center border border-orange-100 bg-orange-50/30 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 relative inline-block">
              Our Vision
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-400 rounded-full"></span>
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              To be the most trusted modular infrastructure partner, shaping a
              smarter and more sustainable future across the GCC.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-lg text-center border border-orange-100 bg-orange-50/30 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 relative inline-block">
              Our Mission
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-400 rounded-full"></span>
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              Delivering high-quality, cost-effective and rapidly deployable
              prefab solutions backed by innovation and precision manufacturing.
            </p>
          </div>
        </div>

        {/* EXPERTISE */}
        <div className="space-y-4 bg-[var(--primary)] text-white py-10 px-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center">Our Expertise</h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-left">
            <li>• Construction & Industrial Manufacturing</li>
            <li>• Hospitality & Office Equipment</li>
            <li>• Medical & Healthcare Equipment</li>
            <li>• Water Purification & Treatment Solutions</li>
            <li>• Logistics, Railway & Automated Access Systems</li>
            <li>• AgriTech & Industrial Equipment Supply</li>
          </ul>
        </div>

        {/* MILESTONES & PROMISE – same orange style as Vision & Mission */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Milestones */}
          <div className="p-8 rounded-lg border border-orange-100 bg-orange-50/30 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 relative inline-block">
              Milestones & Achievements
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-400 rounded-full"></span>
            </h3>

            <ul className="mt-4 text-gray-700 leading-relaxed space-y-2">
              <li>• 10+ years of operations across UAE, KSA & India</li>
              <li>• 500+ completed modular & prefab projects</li>
              <li>• Trusted by leading EPCs and industrial groups</li>
              <li>• Expanded into luxury pods & smart prefab ecosystems</li>
            </ul>
          </div>

          {/* Promise */}
          <div className="p-8 rounded-lg border border-orange-100 bg-orange-50/30 shadow-sm">
            <h3 className="text-2xl font-bold mb-3 relative inline-block">
              Our Promise
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-400 rounded-full"></span>
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              We build with innovation, quality, and sustainability — ensuring
              long-term value for clients and communities.
            </p>

            <blockquote className="italic text-gray-600 text-lg mt-4">
              “Driven by confidence. Defined by results.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
