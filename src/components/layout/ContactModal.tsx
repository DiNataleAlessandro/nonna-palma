"use client";

import { X, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { useEffect } from "react";

type ModalType = "map" | "phone" | "email" | null;

interface ContactModalProps {
  type: ModalType;
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ type, isOpen, onClose }: ContactModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const content = {
    map: {
      title: "La Nostra Posizione",
      icon: <MapPin className="w-6 h-6 text-nonna-brown" />,
      body: (
        <div className="space-y-6">
          <div className="w-full h-64 bg-gray-100 rounded-sm overflow-hidden border border-nonna-chocolate/10 relative flex items-center justify-center">
             <iframe 
              width="150%" 
              height="150%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=17.6575%2C40.7067%2C17.6615%2C40.7093&amp;layer=mapnik"
              className="grayscale-[20%] contrast-[1.1] pointer-events-none absolute -top-[25%] -left-[25%]"
            />
            {/* Custom Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-3 drop-shadow-md flex items-center justify-center">
              <MapPin className="w-8 h-8 text-nonna-brown fill-nonna-brown" />
              <div className="absolute w-2 h-2 bg-[#FAF9F6] rounded-full -mt-1" />
            </div>
          </div>
          <div className="text-center space-y-2 px-4">
            <p className="font-serif italic text-lg text-nonna-chocolate">Corso Vittorio Emanuele, 106</p>
            <p className="text-sm uppercase tracking-widest text-nonna-chocolate/70">72012 Carovigno BR</p>
          </div>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={onClose}
              className="flex-1 py-4 border border-nonna-chocolate/20 text-nonna-chocolate uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black/5 transition-colors rounded-full"
            >
              Annulla
            </button>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=40.7080055,17.6595256" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-nonna-brown text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:opacity-90 transition-opacity rounded-full flex items-center justify-center space-x-2"
            >
              <span>Apri Mappe</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )
    },
    phone: {
      title: "Chiamaci",
      icon: <Phone className="w-6 h-6 text-nonna-brown" />,
      body: (
        <div className="space-y-8 text-center">
          <p className="text-xl font-serif italic text-nonna-chocolate">Vuoi parlare con noi?</p>
          <p className="text-2xl font-sans font-bold text-nonna-brown tracking-tight">(+39) 338 5649508</p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={onClose}
              className="flex-1 py-4 border border-nonna-chocolate/20 text-nonna-chocolate uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black/5 transition-colors rounded-full"
            >
              Annulla
            </button>
            <a 
              href="tel:+393385649508" 
              className="flex-1 py-4 bg-nonna-brown text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:opacity-90 transition-opacity rounded-full flex items-center justify-center space-x-2"
            >
              <span>Chiama ora</span>
            </a>
          </div>
        </div>
      )
    },
    email: {
      title: "Scrivici",
      icon: <Mail className="w-6 h-6 text-nonna-brown" />,
      body: (
        <div className="space-y-8 text-center">
          <p className="text-xl font-serif italic text-nonna-chocolate">Inviaci un messaggio</p>
          <p className="text-sm font-sans font-medium text-nonna-chocolate/80 break-all px-4 tracking-wide">aziendaagricola.nonnapalma@gmail.com</p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={onClose}
              className="flex-1 py-4 border border-nonna-chocolate/20 text-nonna-chocolate uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-black/5 transition-colors rounded-full"
            >
              Annulla
            </button>
            <a 
              href="mailto:aziendaagricola.nonnapalma@gmail.com" 
              className="flex-1 py-4 bg-nonna-brown text-white uppercase tracking-[0.2em] text-[10px] font-bold hover:opacity-90 transition-opacity rounded-full flex items-center justify-center space-x-2"
            >
              <span>Invia Email</span>
            </a>
          </div>
        </div>
      )
    }
  };

  const currentContent = type ? content[type] : null;

  if (!currentContent) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#FAF9F6] w-full max-w-md rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="px-6 py-6 border-b border-nonna-chocolate/5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {currentContent.icon}
            <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-nonna-chocolate">
              {currentContent.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-colors text-nonna-chocolate"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {currentContent.body}
        </div>
      </div>
    </div>
  );
}
