import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nonna-cream text-nonna-chocolate py-16 border-t border-nonna-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Info */}
        <div className="space-y-6 text-center md:text-left col-span-1 md:col-span-2">
          <h3 className="text-2xl font-serif tracking-widest uppercase font-bold">Nonna Palma</h3>
          <p className="text-sm opacity-80 max-w-sm mx-auto md:mx-0 leading-relaxed">
            L&apos;olio extravergine che sa di Puglia, nato dalla passione della nostra famiglia a Carovigno. Un viaggio tra tradizione e natura.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-nonna-terra transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-nonna-terra transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-nonna-terra transition-colors" />
          </div>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">Navigazione</h4>
          <ul className="space-y-3 opacity-80 text-[13px] uppercase tracking-wider">
            <li><a href="/shop" className="hover:text-nonna-terra transition-colors">Shop</a></li>
            <li><a href="/nostro-olio" className="hover:text-nonna-terra transition-colors">Il Nostro Olio</a></li>
            <li><a href="/spedizioni" className="hover:text-nonna-terra transition-colors">Spedizioni</a></li>
            <li><a href="/contatti" className="hover:text-nonna-terra transition-colors">Contatti</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-left space-y-4">
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">Contatti</h4>
          <div className="text-[13px] opacity-80 space-y-3 leading-relaxed">
            <p className="flex items-start justify-center md:justify-start">
              <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" /> 
              <span>Corso Vittorio Emanuele 106,<br />72012 Carovigno BR, Italia</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" /> (+39) 338 5649508
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" /> vaccapalma@libero.it
            </p>
            <p className="pt-2 text-[11px] opacity-60">P.IVA 02671810741</p>
          </div>
        </div>

      </div>
      
      <div className="mt-16 pt-8 border-t border-nonna-chocolate/10 text-center text-[11px] opacity-50 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Azienda Agricola Nonna Palma. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
