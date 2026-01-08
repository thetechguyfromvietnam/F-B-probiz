'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import MenuSection from '@/components/MenuSection'
import FeaturesSection from '@/components/FeaturesSection'
import PackagesSection from '@/components/PackagesSection'
import AddonsSection from '@/components/AddonsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Lazy load modals to improve initial page load
const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
})

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="min-h-screen bg-restaurant-bg">
      <Navbar onContact={() => setIsContactOpen(true)} />
      <Hero onContact={() => setIsContactOpen(true)} />
      <FeaturesSection />
      <PackagesSection />
      <AddonsSection />
      <ProjectsSection />
      <ContactSection onContact={() => setIsContactOpen(true)} />
      <Footer />
      {isContactOpen && (
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      )}
    </main>
  )
}

