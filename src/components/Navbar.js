'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Function to determine active link
  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo on left */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Lead Gen Pro Logo"
              width={120}
              height={200}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Navigation links centered */}
          <div className="flex-grow flex justify-center space-x-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-lg font-bold transition-colors duration-200 ${
                isActive('/')
                  ? 'bg-white text-black shadow-md' // Active state
                  : 'text-white hover:text-blue-100' // Default state
              }`}
            >
              Home
            </Link>
            <Link
              href="/countries"
              className={`px-4 py-2 rounded-md text-lg font-bold transition-colors duration-200 ${
                isActive('/countries')
                  ? 'bg-white text-black shadow-md' // Active state
                  : 'text-white hover:text-blue-100' // Default state
              }`}
            >
              Countries
            </Link>
          </div>

          {/* Empty div to balance flex layout */}
          <div className="w-[120px]"></div>
        </div>
      </div>
    </nav>
  );
}