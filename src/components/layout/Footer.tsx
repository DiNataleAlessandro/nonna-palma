"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import ContactModal from "./ContactModal";

type ModalType = "map" | "phone" | "email" | null;

export default function Footer() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <footer className="bg-white text-nonna-chocolate py-20 border-t border-nonna-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Harmonized 12-column grid with vertical centering */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:items-center mb-16">
          
          {/* Brand & Mission - Col 4 */}
          <div className="space-y-6 text-center md:text-left md:col-span-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/" className="inline-block group shrink-0">
                <div className="relative w-20 h-20 transition-opacity group-hover:opacity-80">
                  <Image
                    src="/logo.svg"
                    alt="Nonna Palma Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <h3 className="text-xl md:text-2xl font-serif tracking-[0.1em] uppercase font-bold text-nonna-chocolate leading-tight">
                <span className="block whitespace-nowrap">Azienda Agricola</span>
                <span className="block whitespace-nowrap">Nonna Palma</span>
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed tracking-wide max-w-sm font-light">
              Coltiviamo eccellenza nel cuore della Puglia. Dal 1950, la nostra famiglia si dedica alla produzione di Olio Extravergine di Oliva di altissima qualità.
            </p>
          </div>

          {/* Contact Info - Col 5 */}
          <div className="space-y-8 text-center md:text-left border-y md:border-y-0 md:border-l border-nonna-chocolate/5 py-12 md:py-4 md:pl-12 md:col-span-5">
            <h4 className="text-[13px] uppercase tracking-[0.4em] font-bold text-nonna-brown">Contatti</h4>
            <div className="text-[17px] md:text-[19px] space-y-5 font-serif italic">
              <button 
                onClick={() => openModal("map")}
                className="flex items-center justify-center md:justify-start w-full hover:text-nonna-brown transition-colors group text-left cursor-pointer border-none bg-transparent p-0 outline-none"
              >
                <MapPin className="w-6 h-6 mr-4 text-nonna-brown shrink-0" />
                <span className="border-b border-transparent group-hover:border-nonna-brown leading-tight">Corso Vittorio Emanuele, 106, 72012 Carovigno BR</span>
              </button>
              
              <button 
                onClick={() => openModal("email")}
                className="flex items-center justify-center md:justify-start w-full hover:text-nonna-brown transition-colors group text-left cursor-pointer border-none bg-transparent p-0 outline-none"
              >
                <Mail className="w-6 h-6 mr-4 text-nonna-brown shrink-0" />
                <span className="break-all border-b border-transparent group-hover:border-nonna-brown leading-tight">aziendaagricola.nonnapalma@gmail.com</span>
              </button>

              <button 
                onClick={() => openModal("phone")}
                className="flex items-center justify-center md:justify-start w-full hover:text-nonna-brown transition-colors group text-left cursor-pointer border-none bg-transparent p-0 outline-none"
              >
                <Phone className="w-6 h-6 mr-4 text-nonna-brown shrink-0" />
                <span className="border-b border-transparent group-hover:border-nonna-brown">(+39) 338 5649508</span>
              </button>
            </div>
          </div>

          {/* Social - Col 3 (Centered horizontally) */}
          <div className="space-y-6 text-center md:col-span-3">
            <h4 className="text-[13px] uppercase tracking-[0.4em] font-bold text-nonna-brown">Seguici</h4>
            <div className="flex justify-center">
              <Link 
                href="https://www.instagram.com/aziendaagricola.nonnapalma/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-nonna-brown transition-colors transform hover:scale-110 duration-300 inline-block"
              >
                <Instagram className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-nonna-chocolate/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-nonna-chocolate/60">
            © {new Date().getFullYear()} AZIENDA AGRICOLA NONNA PALMA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-nonna-chocolate/60">
            P.IVA 02671810741
          </p>
        </div>
      </div>

      <ContactModal 
        type={modalType} 
        isOpen={!!modalType} 
        onClose={closeModal} 
      />
    </footer>
  );
}
