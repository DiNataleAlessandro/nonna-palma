"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl md:text-3xl font-serif tracking-widest text-rustic-olive font-bold"
            >
              NONNA PALMA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-grow justify-center space-x-12 uppercase text-sm tracking-widest font-medium">
            <Link href="/" className="hover:text-rustic-terracotta transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-rustic-terracotta transition-colors">Shop</Link>
            <Link href="/storia" className="hover:text-rustic-terracotta transition-colors">La Storia</Link>
            <Link href="/contatti" className="hover:text-rustic-terracotta transition-colors">Contatti</Link>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 hover:bg-rustic-olive/5 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-rustic-terracotta rounded-full">
                0
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-rustic-olive/5 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-rustic-cream border-b border-rustic-olive/10 shadow-lg p-6 flex flex-col space-y-4 uppercase text-center tracking-widest font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-rustic-terracotta">Home</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="py-2 hover:text-rustic-terracotta">Shop</Link>
          <Link href="/storia" onClick={() => setIsOpen(false)} className="py-2 hover:text-rustic-terracotta">La Storia</Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)} className="py-2 hover:text-rustic-terracotta">Contatti</Link>
        </div>
      )}
    </nav>
  );
}
