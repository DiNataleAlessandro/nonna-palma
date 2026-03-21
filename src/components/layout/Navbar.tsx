"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Text based as Wix */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-2xl md:text-3xl font-serif tracking-[0.2em] font-bold transition-colors duration-500 ${isScrolled ? "text-nonna-chocolate" : "text-white"}`}
            >
              NONNA PALMA
            </Link>
          </div>

          {/* Desktop Nav - Simple Wix Style */}
          <div className={`hidden md:flex items-center space-x-12 uppercase text-[12px] tracking-[0.3em] font-bold transition-colors duration-500 ${isScrolled ? "text-nonna-chocolate/80" : "text-white"}`}>
            <Link href="/" className="hover:text-nonna-terra transition-colors border-b-2 border-transparent hover:border-nonna-terra pb-1">Home</Link>
            <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-nonna-terra transition-colors pb-1">
              <span>Negozio</span>
              <ChevronDown className="w-3 h-3" />
              {/* Simple Dropdown simulation */}
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-4 mt-2">
                <Link href="/shop" className="px-6 py-2 text-nonna-chocolate hover:bg-nonna-cream text-[11px]">Tutti i Prodotti</Link>
                <Link href="/shop?cat=olio" className="px-6 py-2 text-nonna-chocolate hover:bg-nonna-cream text-[11px]">Olio</Link>
                <Link href="/shop?cat=frise" className="px-6 py-2 text-nonna-chocolate hover:bg-nonna-cream text-[11px]">Frise</Link>
              </div>
            </div>
            <Link href="/contatti" className="hover:text-nonna-terra transition-colors border-b-2 border-transparent hover:border-nonna-terra pb-1">Contatti</Link>
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <Link href="/cart" className={`relative transition-colors duration-500 ${isScrolled ? "text-nonna-chocolate" : "text-white hover:text-nonna-terra"}`}>
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white bg-nonna-terra rounded-full">
                0
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-colors duration-500 ${isScrolled ? "text-nonna-chocolate" : "text-white"}`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 inset-x-0 h-screen bg-nonna-chocolate text-white p-8 flex flex-col items-center justify-center space-y-10 uppercase tracking-[0.3em] text-lg font-bold animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white"><X className="w-10 h-10" /></button>
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-nonna-terra">Home</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-nonna-terra">Shop</Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)} className="hover:text-nonna-terra">Contatti</Link>
        </div>
      )}
    </nav>
  );
}
