import React from 'react'
import { Phone, MapPin, Menu } from 'lucide-react'
import Link from 'next/link'

export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1a3c34] text-white flex justify-around items-center py-2 shadow-md md:hidden z-50">
      
      {/* Phone */}
      <a href="tel:+17867634000" className="flex flex-col items-center text-xs">
        <Phone className="w-6 h-6 text-[#e6d38d]" />
        <span className="mt-1 text-white">Call</span>
      </a>

      {/* Menu */}
      <Link
        href="/menu"
        className="flex flex-col items-center text-xs"
      >
        <Menu className="w-6 h-6 text-[#e6d38d]" />
        <span className="mt-1 text-white">Menu</span>
      </Link>

      {/* Catering */}
    <Link
      href="/catering"
      className="flex flex-col items-center text-xs"
    >
      {/* Elegant cloche/serving tray SVG icon for catering */}
      <span className="w-6 h-6 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#e6d38d]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17h16a6 6 0 10-16 0zm8-9v-1a2 2 0 10-4 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="mt-1 text-white">Catering</span>
    </Link>

      {/* Location */}
      <a
        href="https://www.google.com/maps?q=5264+Lincoln+Ave,+Skokie+IL+60077"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-xs"
      >
        <MapPin className="w-6 h-6 text-[#e6d38d]" />
        <span className="mt-1 text-white">Location</span>
      </a>
    </div>
  )
}
