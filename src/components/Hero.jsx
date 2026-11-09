import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="page-container pt-12 pb-8 sm:pt-16 lg:pt-20">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="section-eyebrow hero-eyebrow">BUILT AROUND YOUR PROJECT</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Bespoke</span>
              <span className="hero-title-line hero-title-accent">modular spaces.</span>
              <span className="hero-title-tail">Sanitation, Ablution &amp; Site Solutions</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
              Offices, interiors, accommodation and acoustic <a href="#zpods" className="font-semibold text-gray-900 underline decoration-[var(--primary)] underline-offset-4">ZPods</a>, tailored to your project.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-xl">
              We design, manufacture, deliver and install spaces for work, living and welfare.
              Choose bespoke layouts and finishes, with sale or rental options to suit your project.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="hero-cta">Request a Quote <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#products" className="hero-secondary">Explore Our Products</a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs sm:text-sm text-gray-600">
              <a href="https://wa.me/971586919282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 58 691 9282" className="flex items-center gap-2 hover:underline"><WhatsAppIcon size={16} />+971 58 691 9282</a>
              <a href="https://wa.me/971564791282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 56 479 1282" className="flex items-center gap-2 hover:underline"><WhatsAppIcon size={16} />+971 56 479 1282</a>
              <a href="mailto:sales@alafdaldxb.com" className="flex items-center gap-2 hover:underline"><Mail size={16} />sales@alafdaldxb.com</a>
              <span className="flex items-center gap-2"><MapPin size={16} />Ras Al Khor, Dubai</span>
            </div>
          </div>
          <div className="hero-showcase">
            <div className="hero-showcase-top"><span className="section-eyebrow">DESIGNED FOR YOUR PROJECT</span><span className="hero-status-dot" aria-hidden="true" /></div>
            <img src="/assets/hero-cabin-remastered.webp" alt="Remastered visual of a graphite-framed modular meeting cabin with glazed frontage and warm interior lighting" className="hero-cabin" width="1536" height="1024" fetchpriority="high" />
            <div className="hero-showcase-bottom">
              <div><p className="text-sm font-medium">Your brief. Your space.</p><p className="text-xs text-gray-500 mt-1">Layout, finish and fit-out, brought together.</p></div>
              <a href="#zpods" aria-label="Explore ZPods acoustic workspaces" className="hero-zpods-badge"><img src="/assets/zpods-wordmark.png" alt="ZPods" width="587" height="101" /><span>ACOUSTIC WORKSPACES <ArrowUpRight size={12} aria-hidden="true" /></span></a>
            </div>
          </div>
        </div>
        <div className="delivery-strip">
          {['Design', 'Manufacture', 'Deliver', 'Install'].map((step, i) => <div key={step} className="flex items-center gap-3"><span className="text-xs text-[var(--primary)] font-semibold">0{i + 1}</span><span className="text-sm font-medium">{step}</span></div>)}
        </div>
      </div>
    </section>
  );
}
