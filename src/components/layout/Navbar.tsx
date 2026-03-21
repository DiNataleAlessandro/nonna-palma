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
              className="text-2xl md:text-3xl font-serif tracking-widest text-nonna-chocolate font-bold"
            >
              NONNA PALMA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-grow justify-center space-x-12 uppercase text-[13px] tracking-[0.2em] font-medium text-nonna-chocolate/80">
            <Link href="/" className="hover:text-nonna-terra transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-nonna-terra transition-colors">Shop</Link>
            <Link href="/nostro-olio" className="hover:text-nonna-terra transition-colors">Il Nostro Olio</Link>
            <Link href="/contatti" className="hover:text-nonna-terra transition-colors">Contatti</Link>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 hover:bg-nonna-chocolate/5 rounded-full transition-colors text-nonna-chocolate">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-nonna-terra rounded-full">
                0
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-nonna-chocolate/5 rounded-full transition-colors text-nonna-chocolate"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-nonna-cream border-b border-nonna-chocolate/10 shadow-lg p-6 flex flex-col space-y-4 uppercase text-center tracking-[0.2em] text-sm font-medium text-nonna-chocolate">
          <Link href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-nonna-terra">Home</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="py-2 hover:text-nonna-terra">Shop</Link>
          <Link href="/nostro-olio" onClick={() => setIsOpen(false)} className="py-2 hover:text-nonna-terra">Il Nostro Olio</Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)} className="py-2 hover:text-nonna-terra">Contatti</Link>
        </div>
      )}
    </nav>
  );
}
