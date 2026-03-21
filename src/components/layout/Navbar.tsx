"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [lang, setLang] = useState("IT");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-[#f8f4f1] border-b border-black/10 shadow-[0_1px_4px_0_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center space-x-0 group">
            <div className="relative w-24 h-24 transition-opacity group-hover:opacity-80">
              <Image
                src="/logo.svg"
                alt="Nonna Palma Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-sans font-medium text-nonna-brown">
              Home
            </span>
          </Link>
        </div>

        {/* Links (Center) - Empty as per request */}
        <div className="hidden md:flex items-center">
          {/* Shop and previous Home link removed */}
        </div>

        {/* Controls (Right) */}
        <div className="flex items-center space-x-8">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#f8f4f1] shadow-[0_6px_12px_0_rgba(0,0,0,0.1)] cursor-pointer hover:opacity-80 transition-opacity border-none outline-none"
            >
              {lang === "IT" ? (
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-600 via-white to-red-600 border border-black/5" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-900 via-white to-red-600 relative overflow-hidden border border-black/5">
                  <div className="absolute inset-0 bg-blue-900" />
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
                  <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white -translate-x-1/2" />
                  {/* Simplified UK flag with CSS gradients/divs for a stylized look */}
                </div>
              )}
              <ChevronDown className={`w-4 h-4 text-nonna-chocolate transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-3 w-40 bg-[#f8f4f1] rounded-2xl shadow-[0_6px_24px_0_rgba(0,0,0,0.15)] overflow-hidden border border-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                <button 
                  onClick={() => { setLang("IT"); setIsLangOpen(false); }}
                  className="w-full px-5 py-4 flex items-center space-x-3 hover:bg-black/5 transition-colors text-left"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-600 via-white to-red-600 border border-black/5" />
                  <span className="text-xs font-sans font-bold text-nonna-chocolate uppercase tracking-widest">Italiano</span>
                </button>
                <button 
                  onClick={() => { setLang("EN"); setIsLangOpen(false); }}
                  className="w-full px-5 py-4 flex items-center space-x-3 hover:bg-black/5 transition-colors text-left border-t border-black/5"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-900 via-white to-red-600 border border-black/5" />
                  <span className="text-xs font-sans font-bold text-nonna-chocolate uppercase tracking-widest">English</span>
                </button>
              </div>
            )}
          </div>

          {/* Shopping Bag Icon */}
          <Link href="/cart" className="relative text-nonna-chocolate hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-6 h-6 stroke-1" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-nonna-brown text-[10px] text-white font-bold">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
