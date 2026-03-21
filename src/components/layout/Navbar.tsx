"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
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
          {/* Language Selector (Placeholder) */}
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#f8f4f1] shadow-[0_6px_12px_0_rgba(0,0,0,0.1)] cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-600 via-white to-red-600 border border-black/5" />
            <span className="text-xs font-sans uppercase tracking-widest text-nonna-chocolate font-medium">IT</span>
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
