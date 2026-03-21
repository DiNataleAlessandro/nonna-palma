import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-nonna-chocolate py-20 border-t border-nonna-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6 text-center md:text-left">
            <Link href="/" className="inline-block group">
              <div className="relative w-20 h-20 mx-auto md:mx-0 transition-opacity group-hover:opacity-80">
                <Image
                  src="/logo.svg"
                  alt="Nonna Palma Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <h3 className="text-xl md:text-2xl font-serif tracking-[0.1em] uppercase font-bold text-nonna-chocolate">AZIENDA AGRICOLA NONNA PALMA</h3>
            <p className="text-[13px] leading-relaxed tracking-wide max-w-sm">
              Coltiviamo eccellenza nel cuore della Puglia. Dal 1950, la nostra famiglia si dedica alla produzione di Olio Extravergine di Oliva di altissima qualità.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Contatti</h4>
            <div className="text-[14px] space-y-4 font-serif italic">
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-3 text-nonna-brown" />
                <span>Corso Vittorio Emanuele, 106, 72012 Carovigno BR</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-3 text-nonna-brown" />
                <span>(+39) 338 5649508</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-3 text-nonna-brown" />
                <span className="break-all">aziendaagricola.nonnapalma@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">Seguici</h4>
            <div className="flex justify-center md:justify-start space-x-8">
              <Link href="#" className="hover:text-nonna-brown transition-colors"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-nonna-brown transition-colors"><Facebook className="w-6 h-6" /></Link>
            </div>
            <div className="pt-4">
              <p className="text-[11px] uppercase tracking-widest mb-2">P.IVA 02671810741</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-nonna-chocolate/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} AZIENDA AGRICOLA NONNA PALMA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
