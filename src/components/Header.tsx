'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300  ${
        scrolled ? 'bg-[#1a3c34]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-1 md:py-2 ">
        {/* Logo Left (Mobile) */}
        <div className="lg:hidden">
            <Link href="#" passHref>
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
            </Link>
        </div>

        {/* Left Links */}
        <div className="hidden lg:flex gap-32 text-white items-center">
          {['Home', 'About', 'Menu'].map((text) => (
            <Link
              key={text}
              href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className="relative group"
            >
                <span className="text-white flex flex-col items-center">
                {text}
                <span className="absolute left-1/2 top-full mt-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
            </Link>
          ))}
        </div>

        {/* Logo Center (Desktop) */}
        <div className="hidden lg:block">
            <Link href="#">
            <Image src="/logo.png" alt="Logo" width={120} height={60} priority quality={100} />
            </Link>
        </div>

        {/* Right Links */}
        <div className="hidden lg:flex gap-32 text-white items-center">
          {['Gallery', 'Catering', 'Contact'].map((text) => (
            <Link key={text} href={`/${text.toLowerCase()}`} className="relative group">
                <span className="text-white flex flex-col items-center">
                {text}
                <span className="absolute left-1/2 top-full mt-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with animation */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white ${
          menuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 text-black space-y-2">
          {['Home', 'About', 'Menu', 'Gallery', 'Catering', 'Contact'].map((text) => (
            <Link
              key={text}
              href="#"
              className="block py-2 border-b border-gray-200"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
