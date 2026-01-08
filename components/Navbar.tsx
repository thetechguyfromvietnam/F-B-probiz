'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavbarProps {
  onContact?: () => void
}

export default function Navbar({ onContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">Probiz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Trang chủ
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-primary-600 transition">
              Tính năng
            </Link>
            <Link href="#packages" className="text-gray-700 hover:text-primary-600 transition">
              Gói dịch vụ
            </Link>
            <a
              href="https://zalo.me/0978270038"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Tư vấn miễn phí
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-600">
              Trang chủ
            </Link>
            <Link href="#features" className="block py-2 text-gray-700 hover:text-primary-600">
              Tính năng
            </Link>
            <Link href="#packages" className="block py-2 text-gray-700 hover:text-primary-600">
              Gói dịch vụ
            </Link>
            <a
              href="https://zalo.me/0978270038"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 text-center block"
            >
              Tư vấn miễn phí
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

