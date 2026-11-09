import React from 'react'
import { Mail, MapPin } from 'lucide-react'

import WhatsAppIcon from './WhatsAppIcon';

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="contact-section py-16 sm:py-20"
      style={{ background: "var(--primary)" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-white">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE — Contact Info */}
          <div>
            <p className="section-eyebrow text-white/80 mb-4">LET?S SHAPE YOUR NEXT SPACE</p>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get in touch</h3>
            <p className="mt-2 opacity-90">
              Contact us for inquiries or quotations, or chat with us on WhatsApp.
            </p>

            <div className="mt-6 space-y-4 text-sm">

              <a href="https://wa.me/971586919282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 58 691 9282" className="flex items-center gap-3 hover:underline">
                <WhatsAppIcon size={18} /> +971 58 691 9282
              </a>

              <a href="https://wa.me/971564791282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 56 479 1282" className="flex items-center gap-3 hover:underline">
                <WhatsAppIcon size={18} /> +971 56 479 1282
              </a>

              <a href="mailto:sales@alafdaldxb.com" className="flex items-center gap-3 hover:underline">
                <Mail size={18} /> sales@alafdaldxb.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} /> Ras Al Khor, Dubai, United Arab Emirates
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <form className="bg-white p-6 sm:p-8 rounded-2xl shadow-md text-gray-800">
            
            <label className="block text-sm font-medium">Full name</label>
            <input
              className="mt-1 w-full p-3 border rounded-md"
              placeholder="Your name"
            />

            <label className="block text-sm font-medium mt-4">Email</label>
            <input
              className="mt-1 w-full p-3 border rounded-md"
              placeholder="you@company.com"
            />

            <label className="block text-sm font-medium mt-4">Message</label>
            <textarea
              className="mt-1 w-full p-3 border rounded-md"
              rows={4}
              placeholder="Tell us about your requirement"
            ></textarea>

            <div className="mt-5 text-right">
              <button
                type="button"
                className="px-6 py-2 rounded-md font-semibold text-white"
                style={{ background: "var(--primary)" }}
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
