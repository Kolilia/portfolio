'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold">Портфолио</div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link href="/" className="px-3 py-2 hover:text-blue-500">Главная</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Главная</Link>
        </div>
      )}
    </nav>
  );
}