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
              <div className="w-5 h-5 rounded-full overflow-hidden border border-black/5 flex items-center justify-center">
                {lang === "IT" ? (
                  <svg viewBox="0 0 512 512" className="w-full h-full" fill="none">
                    <path fill="#EEE" d="M376 29.8A255 255 0 0 0 256 0c-43.4 0-84.2 10.8-120 29.8v452.4c35.8 19 76.6 29.8 120 29.8s84.2-10.8 120-29.8z"/>
                    <path fill="#d80027" d="M344 15.5a256.1 256.1 0 0 1 0 481z"/>
                    <path fill="#6da544" d="M168 15.5v481a256.1 256.1 0 0 1 0-481"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 512 512" className="w-full h-full" fill="none">
                    <circle cx="256" cy="256" r="256" fill="#0052b4"/>
                    <path fill="#EEE" d="M459.4 100.6 304 256l155.4 155.4q-20.9 27.1-48 48L256 304 100.6 459.4q-27.2-20.9-48-48L208 256 52.6 100.6q20.8-27.2 48-48L256 208 411.4 52.6q27.1 20.8 48 48"/>
                    <path fill="#EEE" d="M288 2q16.4 2 32 6v184h184q4 15.6 6 32l-30 32 30 32a255 255 0 0 1-6 32H320v184a255 255 0 0 1-32 6l-32-30-32 30a255 255 0 0 1-32-6V320H8a255 255 0 0 1-6-32l30-32-30-32q2-16.4 6-32h184V8q15.6-4 32-6l32 30z"/>
                    <path fill="#d80027" d="M288 2q-15.5-2-31.5-2h-1q-16 0-31.5 2v222H2a259 259 0 0 0 0 64h222v222a259 259 0 0 0 64 0V288h222a258 258 0 0 0 0-64H288z"/>
                    <path fill="#d80027" fillRule="evenodd" d="M420.3 59.7Q429 67 437 75L320 192v-32zm-360.6 32Q67 83 75 75l117 117h-32zM437 437q8.1-8 15.3-16.7L352 320h-32zM91.7 452.3 192 352v-32L75 437q8 8.1 16.7 15.3" clipRule="evenodd"/>
                  </svg>
                )}
              </div>
              <ChevronDown className={`w-4 h-4 text-nonna-chocolate transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-3 w-40 bg-[#f8f4f1] rounded-2xl shadow-[0_6px_24px_0_rgba(0,0,0,0.15)] overflow-hidden border border-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                <button 
                  onClick={() => { setLang("IT"); setIsLangOpen(false); }}
                  className="w-full px-5 py-4 flex items-center space-x-3 hover:bg-black/5 transition-colors text-left"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-black/5 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-full h-full" fill="none">
                      <path fill="#EEE" d="M376 29.8A255 255 0 0 0 256 0c-43.4 0-84.2 10.8-120 29.8v452.4c35.8 19 76.6 29.8 120 29.8s84.2-10.8 120-29.8z"/>
                      <path fill="#d80027" d="M344 15.5a256.1 256.1 0 0 1 0 481z"/>
                      <path fill="#6da544" d="M168 15.5v481a256.1 256.1 0 0 1 0-481"/>
                    </svg>
                  </div>
                  <span className="text-xs font-sans font-bold text-nonna-chocolate uppercase tracking-widest">Italiano</span>
                </button>
                <button 
                  onClick={() => { setLang("EN"); setIsLangOpen(false); }}
                  className="w-full px-5 py-4 flex items-center space-x-3 hover:bg-black/5 transition-colors text-left border-t border-black/5"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-black/5 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-full h-full" fill="none">
                      <circle cx="256" cy="256" r="256" fill="#0052b4"/>
                      <path fill="#EEE" d="M459.4 100.6 304 256l155.4 155.4q-20.9 27.1-48 48L256 304 100.6 459.4q-27.2-20.9-48-48L208 256 52.6 100.6q20.8-27.2 48-48L256 208 411.4 52.6q27.1 20.8 48 48"/>
                      <path fill="#EEE" d="M288 2q16.4 2 32 6v184h184q4 15.6 6 32l-30 32 30 32a255 255 0 0 1-6 32H320v184a255 255 0 0 1-32 6l-32-30-32 30a255 255 0 0 1-32-6V320H8a255 255 0 0 1-6-32l30-32-30-32q2-16.4 6-32h184V8q15.6-4 32-6l32 30z"/>
                      <path fill="#d80027" d="M288 2q-15.5-2-31.5-2h-1q-16 0-31.5 2v222H2a259 259 0 0 0 0 64h222v222a259 259 0 0 0 64 0V288h222a258 258 0 0 0 0-64H288z"/>
                      <path fill="#d80027" fillRule="evenodd" d="M420.3 59.7Q429 67 437 75L320 192v-32zm-360.6 32Q67 83 75 75l117 117h-32zM437 437q8.1-8 15.3-16.7L352 320h-32zM91.7 452.3 192 352v-32L75 437q8 8.1 16.7 15.3" clipRule="evenodd"/>
                    </svg>
                  </div>
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
