import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-rustic-olive text-rustic-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Info */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-serif tracking-widest uppercase">Nonna Palma</h3>
          <p className="text-sm opacity-80 max-w-xs mx-auto md:mx-0">
            L&apos;olio extravergine che sa di Puglia, nato dalla passione della nostra famiglia a Fasano.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-rustic-terracotta" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-rustic-terracotta" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-rustic-terracotta" />
          </div>
        </div>

        {/* Links */}
        <div className="text-center">
          <h4 className="font-medium uppercase tracking-widest mb-4">Navigazione</h4>
          <ul className="space-y-2 opacity-80 text-sm">
            <li><a href="/shop" className="hover:text-rustic-terracotta">La Dispensa</a></li>
            <li><a href="/storia" className="hover:text-rustic-terracotta">La nostra Storia</a></li>
            <li><a href="/spedizioni" className="hover:text-rustic-terracotta">Spedizioni</a></li>
            <li><a href="/policy" className="hover:text-rustic-terracotta">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-right space-y-4">
          <h4 className="font-medium uppercase tracking-widest">Contatti</h4>
          <div className="text-sm opacity-80 space-y-2">
            <p className="flex items-center justify-center md:justify-end">
              <MapPin className="w-4 h-4 mr-2" /> Fasano (BR), Puglia
            </p>
            <p>P.IVA 02123450742</p>
            <p>info@nonnapalma.com</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-rustic-cream/10 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Azienda Agricola Nonna Palma. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
