import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SpacesGallery from './components/SpacesGallery'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <SpacesGallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
