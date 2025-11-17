import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16">

      {/* Main Footer Box */}
      <div
        className="
          max-w-7xl mx-auto px-6 py-10
          grid grid-cols-1 md:grid-cols-3 gap-10
          rounded-lg border border-orange-100 
          bg-orange-50/30 shadow-sm
          text-center md:text-left
        "
      >
  
        <div className="flex justify-center items-center">
          <img
            src="/assets/logo.png"
            alt="Al Afdal Porta Cabin"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>

          <ul className="space-y-2 text-gray-700 text-sm">
            {[
              { name: "About", href: "#about" },
              { name: "Products", href: "#products" },
              { name: "Gallery", href: "#gallery" },
              { name: "Contact", href: "#contact" }
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="
                    transition-colors duration-200
                    hover:text-[var(--primary)]
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="
              flex items-center gap-1 px-3 py-1.5 
              rounded-full font-medium text-sm shadow 
              hover:shadow-md transition-all duration-200
            "
            style={{ background: "var(--primary)", color: "white" }}
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="bg-white border-t py-4 text-center text-sm text-gray-600 mt-6">
        © {new Date().getFullYear()} Al Afdal Porta Cabin. All rights reserved.
      </div>

    </footer>
  )
}
