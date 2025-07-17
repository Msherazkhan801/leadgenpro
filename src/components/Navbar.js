'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/Logo.png'


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={200}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link
              href="/"
              className={`relative px-4 py-2 text-lg font-bold transition-colors duration-200 text-white hover:text-blue-100 ${
                isActive('/') ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-white' : ''
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`relative px-4 py-2 text-lg font-bold transition-colors duration-200 text-white hover:text-blue-100 ${
                isActive('/about') ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-white' : ''
              }`}
            >
             ABOUT
            </Link>
            <Link
              href="/countries"
              className={`relative px-4 py-2 text-lg font-bold transition-colors duration-200 text-white hover:text-blue-100 ${
                isActive('/countries') ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-white' : ''
              }`}
            >
              COUNTRIES
            </Link>
          </div>

          {/* Mobile menu button (hidden on desktop) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Empty div for layout balance */}
          <div className="hidden md:block w-[120px]"></div>
        </div>

        {/* Mobile Menu (shown when hamburger clicked) */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 px-2 pt-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-2 text-lg font-bold transition-colors duration-200 text-white hover:text-blue-100 `}
              >
                Home
              </Link>
              <Link
                href="/countries"
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-2 text-lg font-bold transition-colors duration-200 text-white hover:text-blue-100 `}
              >
                ABOUT
              </Link>
              <Link
                href="/countries"
                onClick={() => setIsOpen(false)}
                className={`relative px-4 py-2 text-lg font-bold transition-colors duration-200 text-white hover:text-blue-100 `}
              >
                COUNTRIES
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}