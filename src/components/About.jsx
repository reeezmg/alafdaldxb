import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="page-container space-y-10 text-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center text-left">
          <div className="relative">
            <img src="/assets/cabin2.jpg" alt="Al Afdal prefabricated cabin" className="w-full aspect-[4/3] object-cover rounded-2xl" loading="lazy" />
            <div className="about-note"><span className="text-3xl font-semibold">10+</span><span className="text-xs leading-relaxed">Years of experience<br />across UAE, KSA &amp; India</span></div>
          </div>
          <div>
            <p className="section-eyebrow text-[var(--primary)]">ABOUT AL AFDAL</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-3">Built around<br />your project.</h2>
            <p className="leading-relaxed text-gray-600 mt-5">
              With over a decade of excellence, AL AFDAL delivers high-quality
              prefab and portable sanitation solutions across the UAE, KSA, and
              India. We combine durable materials, fast delivery, and professional
              installation to deliver modular offices, porta cabins, and
              sanitation units trusted across industries.
            </p>
            <p className="mt-5 text-sm font-medium border-l-2 border-[var(--primary)] pl-4">One partner from the first layout to the finished space.</p>
          </div>
        </div>

        {/* VISION & MISSION – brand accents */}
        <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
          {/* Vision */}
          <div className="info-card p-8 text-left">
            <h3 className="text-xl font-semibold mb-3 relative inline-block">
              Our Vision
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[var(--primary)] rounded-full"></span>
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              To be the most trusted modular infrastructure partner, shaping a
              smarter and more sustainable future across the GCC.
            </p>
          </div>

          {/* Mission */}
          <div className="info-card p-8 text-left">
            <h3 className="text-xl font-semibold mb-3 relative inline-block">
              Our Mission
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[var(--primary)] rounded-full"></span>
            </h3>

            <p className="text-gray-700 leading-relaxed mt-4">
              Delivering high-quality, cost-effective and rapidly deployable
              prefab solutions backed by innovation and precision manufacturing.
            </p>
          </div>
        </div>

        {/* EXPERTISE */}
        <div className="expertise-panel space-y-5 text-white py-10 px-6 sm:px-10 rounded-2xl">
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

        {/* MILESTONES & PROMISE – brand accents */}
        <div className="grid gap-6 md:grid-cols-2  max-w-7xl mx-auto">
          {/* Milestones */}
          <div className="info-card p-8 text-left">
            <h3 className="text-xl font-semibold mb-3 relative inline-block">
              Milestones & Achievements
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[var(--primary)] rounded-full"></span>
            </h3>

            <ul className="mt-4 text-gray-700 leading-relaxed space-y-2">
              <li>• 10+ years of operations across UAE, KSA & India</li>
              <li>• 500+ completed modular & prefab projects</li>
              <li>• Trusted by leading EPCs and industrial groups</li>
              <li>• Expanded into luxury pods & smart prefab ecosystems</li>
            </ul>
          </div>

          {/* Promise */}
          <div className="info-card p-8 text-left">
            <h3 className="text-xl font-semibold mb-3 relative inline-block">
              Our Promise
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[var(--primary)] rounded-full"></span>
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
