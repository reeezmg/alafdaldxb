import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'ZPods', href: '#zpods' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onOutsideClick = event => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const onResize = event => { if (event.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onOutsideClick);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onOutsideClick);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="site-header sticky top-0 z-50 bg-[var(--page)] border-b border-[var(--border)]">
      <div className="page-container flex items-center justify-between h-20 gap-4">
        <a href="#home" aria-label="Al Afdal home" onClick={() => setOpen(false)}><BrandLogo /></a>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {links.map(link => <a key={link.href} href={link.href} className="nav-link text-sm font-medium text-gray-700">{link.label}</a>)}
          <a href="#contact" className="quote-link">Get a Quote</a>
        </nav>
        <button ref={buttonRef} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="md:hidden p-3 rounded-full text-gray-800 border border-[var(--border)]">
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-navigation md:hidden">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="mobile-nav-link">{link.label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="quote-link mt-3 justify-center">Get a Quote</a>
      </nav>}
    </header>
  );
}
