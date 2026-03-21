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
                  <svg viewBox="0 0 473.68 473.68" className="w-full h-full">
                    <path style={{fill:"#086936"}} d="M315.8,13.535l-27.64,76.632c25.511,84.193,25.511,209.154,0,293.351l27.639,76.624 c91.975-32.523,157.881-120.194,157.881-223.309C473.681,133.737,407.774,46.058,315.8,13.535z"/>
                    <path style={{fill:"#E4E4E4"}} d="M315.8,90.167V13.535C291.1,4.8,264.534,0.002,236.838,0.002 C273.359,0.002,222.722,123.774,315.8,90.167z"/>
                    <path style={{fill:"#E4E4E4"}} d="M236.838,473.678c27.695,0,54.261-4.798,78.961-13.534V383.52 C223.656,374.326,236.838,473.678,236.838,473.678z"/>
                    <path style={{fill:"#CD2029"}} d="M0,236.837C0,340.296,66.355,428.198,158.805,460.46V13.229C66.355,45.49,0,133.392,0,236.837z"/>
                    <path style={{fill:"#0C763C"}} d="M315.8,90.167v293.351C341.315,299.321,341.315,174.358,315.8,90.167z"/>
                    <path style={{fill:"#F3F4F5"}} d="M315.8,383.521V90.167c-16.125-53.229-42.44-90.165-78.961-90.165 c-27.351,0-53.592,4.697-78.034,13.227V460.46c24.442,8.53,50.682,13.219,78.034,13.219 C273.359,473.678,299.674,436.743,315.8,383.521z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 512 512" className="w-full h-full">
                    <path style={{fill:"#012169"}} d="M507.609,403.556c-13.628,45.692-42.105,85.244-80.128,112.512L283.541,311.232L507.609,403.556z M84.519,512 c-38.023-27.268-66.5-66.82-80.128-112.512l224.068-92.324L84.519,512z M4.391,108.444c13.628-45.692,42.105-85.244,80.128-112.512 L228.459,200.768L4.391,108.444z M427.481,0c38.023,27.268,66.5,66.82,80.128,112.512L283.541,204.836L427.481,0z"/>
                    <path style={{fill:"#FFFFFF"}} d="M512,236.837h-216.51V0h-58.643v236.837H0v39.092h236.847v197.749 c11.517,11.517,31.428,0,58.643,0V275.929H512V236.837z M283.541,311.232l143.94,200.768c6.649-4.769,12.92-10.046,18.773-15.748 L320.723,326.551L283.541,311.232z M84.519,512l143.94-200.768l-37.182,15.319L46.808,496.252C52.661,501.954,58.932,507.231,84.519,512z M4.391,108.444l224.068,92.324l-37.182,15.319L23.162,15.748C17.309,21.45,11.038,26.727,4.391,32.426V108.444z M427.481,0 l-143.94,204.836l37.182-15.319l144.469-200.768C459.339,5.702,453.068,0.425,427.481,0z"/>
                    <path style={{fill:"#C8102E"}} d="M512,246.609H265.391V0h-18.783v246.609H0v18.783h246.609v208.288c6.126,0.34,12.383,0.34,18.783,0 V265.391H512V246.609z M302.321,318.967l133.535,186.255c5.319-4.428,10.336-9.324,15.018-14.615L323.018,327.495L302.321,318.967z M228.459,311.232l-143.94,200.768c-5.319-4.428-10.336-9.324-15.018-14.615l128.303-178.61L228.459,311.232z M2.247,32.426 c-4.682,5.291-9.699,10.187-15.018,14.615l141.223,196.406l20.697-8.528L2.247,32.426z M494.735,32.426L366.432,211.036l20.697,8.528 L509.753,47.041C504.434,42.613,499.417,37.717,494.735,32.426z"/>
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
                    <svg viewBox="0 0 473.68 473.68" className="w-full h-full">
                      <path style={{fill:"#086936"}} d="M315.8,13.535l-27.64,76.632c25.511,84.193,25.511,209.154,0,293.351l27.639,76.624 c91.975-32.523,157.881-120.194,157.881-223.309C473.681,133.737,407.774,46.058,315.8,13.535z"/>
                      <path style={{fill:"#E4E4E4"}} d="M315.8,90.167V13.535C291.1,4.8,264.534,0.002,236.838,0.002 C273.359,0.002,222.722,123.774,315.8,90.167z"/>
                      <path style={{fill:"#E4E4E4"}} d="M236.838,473.678c27.695,0,54.261-4.798,78.961-13.534V383.52 C223.656,374.326,236.838,473.678,236.838,473.678z"/>
                      <path style={{fill:"#CD2029"}} d="M0,236.837C0,340.296,66.355,428.198,158.805,460.46V13.229C66.355,45.49,0,133.392,0,236.837z"/>
                      <path style={{fill:"#0C763C"}} d="M315.8,90.167v293.351C341.315,299.321,341.315,174.358,315.8,90.167z"/>
                      <path style={{fill:"#F3F4F5"}} d="M315.8,383.521V90.167c-16.125-53.229-42.44-90.165-78.961-90.165 c-27.351,0-53.592,4.697-78.034,13.227V460.46c24.442,8.53,50.682,13.219,78.034,13.219 C273.359,473.678,299.674,436.743,315.8,383.521z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-sans font-bold text-nonna-chocolate uppercase tracking-widest">Italiano</span>
                </button>
                <button 
                  onClick={() => { setLang("EN"); setIsLangOpen(false); }}
                  className="w-full px-5 py-4 flex items-center space-x-3 hover:bg-black/5 transition-colors text-left border-t border-black/5"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-black/5 flex items-center justify-center">
                    <svg viewBox="0 0 512 512" className="w-full h-full">
                      <path style={{fill:"#012169"}} d="M507.609,403.556c-13.628,45.692-42.105,85.244-80.128,112.512L283.541,311.232L507.609,403.556z M84.519,512 c-38.023-27.268-66.5-66.82-80.128-112.512l224.068-92.324L84.519,512z M4.391,108.444c13.628-45.692,42.105-85.244,80.128-112.512 L228.459,200.768L4.391,108.444z M427.481,0c38.023,27.268,66.5,66.82,80.128,112.512L283.541,204.836L427.481,0z"/>
                      <path style={{fill:"#FFFFFF"}} d="M512,236.837h-216.51V0h-58.643v236.837H0v39.092h236.847v197.749 c11.517,11.517,31.428,0,58.643,0V275.929H512V236.837z M283.541,311.232l143.94,200.768c6.649-4.769,12.92-10.046,18.773-15.748 L320.723,326.551L283.541,311.232z M84.519,512l143.94-200.768l-37.182,15.319L46.808,496.252C52.661,501.954,58.932,507.231,84.519,512z M4.391,108.444l224.068,92.324l-37.182,15.319L23.162,15.748C17.309,21.45,11.038,26.727,4.391,32.426V108.444z M427.481,0 l-143.94,204.836l37.182-15.319l144.469-200.768C459.339,5.702,453.068,0.425,427.481,0z"/>
                      <path style={{fill:"#C8102E"}} d="M512,246.609H265.391V0h-18.783v246.609H0v18.783h246.609v208.288c6.126,0.34,12.383,0.34,18.783,0 V265.391H512V246.609z M302.321,318.967l133.535,186.255c5.319-4.428,10.336-9.324,15.018-14.615L323.018,327.495L302.321,318.967z M228.459,311.232l-143.94,200.768c-5.319-4.428-10.336-9.324-15.018-14.615l128.303-178.61L228.459,311.232z M2.247,32.426 c-4.682,5.291-9.699,10.187-15.018,14.615l141.223,196.406l20.697-8.528L2.247,32.426z M494.735,32.426L366.432,211.036l20.697,8.528 L509.753,47.041C504.434,42.613,499.417,37.717,494.735,32.426z"/>
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
