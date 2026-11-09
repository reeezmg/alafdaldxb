import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const spaces = [
  { image: 'modular-office', title: 'Executive offices', description: 'Layouts, glazing and finishes shaped around your team.', alt: 'Glazed modular executive office with a meeting table' },
  { image: 'executive-lounge', title: 'Lounges & reception', description: 'Welcoming interiors with a coordinated finish.', alt: 'Executive lounge with soft seating and timber wall finishes' },
  { image: 'commercial-interior', title: 'Commercial interiors', description: 'From space planning to the final interior detail.', alt: 'Commercial cafe interior design concept with bespoke counter and seating' },
];

export default function SpacesGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[var(--surface)]">
      <div className="page-container">
        <div className="section-heading">
          <div><p className="section-eyebrow text-[var(--primary)]">SPACES WITH PURPOSE</p><h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Considered outside.<br />Comfortable within.</h2></div>
          <p className="text-gray-600 max-w-md text-sm leading-relaxed">Explore modular offices, welcoming lounges and commercial interior possibilities from our catalogue. Every layout and finish starts with your brief.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {spaces.map(space => <article key={space.image} className="space-card">
            <img src={`/assets/${space.image}.webp`} alt={space.alt} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <div className="p-6"><h3 className="font-semibold text-lg">{space.title}</h3><p className="text-sm text-gray-600 mt-2 leading-relaxed">{space.description}</p><a href="#contact" className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-[var(--primary)]">Discuss your space <ArrowUpRight size={16} /></a></div>
          </article>)}
        </div>
        <p className="mt-5 text-xs text-gray-500">Catalogue imagery includes interior design concepts. Final layouts, finishes and fit-out scope are agreed per project.</p>
      </div>
    </section>
  );
}
