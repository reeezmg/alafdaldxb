import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Home">
            <img
              src="/assets/logo.png"
              alt="Al Afdal Porta Cabin"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-gray-900">Products</a>

            <a
              href="#contact"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow"
              style={{ background: 'var(--primary)', color: 'var(--white)' }}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={btnRef}
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-full inline-flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

        <aside className="relative z-10 w-full h-full bg-white overflow-auto">

          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <a href="#" onClick={() => setOpen(false)}>
              <img src="/assets/logo.png" alt="Al Afdal Logo" className="h-10" />
            </a>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="px-6 py-6 flex flex-col gap-4">
            <a href="#about" onClick={() => setOpen(false)}
               className="py-3 px-3 rounded-lg text-gray-800 hover:bg-gray-50">
              About
            </a>

            <a href="#products" onClick={() => setOpen(false)}
               className="py-3 px-3 rounded-lg text-gray-800 hover:bg-gray-50">
              Products
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-4 py-3 rounded-full font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--white)' }}
            >
              Get a Quote
            </a>
          </nav>

        </aside>
      </div>
    </header>
  );
}
