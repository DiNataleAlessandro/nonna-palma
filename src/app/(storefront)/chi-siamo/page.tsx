import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Chi Siamo | Azienda Agricola Nonna Palma",
  description: "La storia, i valori e la posizione della nostra azienda agricola nella Riserva di Torre Guaceto.",
};

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section with background image and centered text box */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464960726309-122af16bd719?q=80&w=2000&auto=format&fit=crop" // Olive trees landscape
          alt="Uliveti secolari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay */}
        
        <div className="relative z-10 bg-[#FAF9F6]/90 px-12 py-8 md:px-20 md:py-12 border border-black/5 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-serif text-nonna-chocolate tracking-tight">
            Chi siamo
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* Back Button */}
        <div className="flex justify-start -mt-10 mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-nonna-chocolate hover:text-nonna-brown transition-colors text-sm font-medium uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Torna alla Home
          </Link>
        </div>

        {/* L'Azienda Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-3xl md:text-5xl font-serif text-nonna-chocolate tracking-tight border-b border-nonna-brown/20 pb-4 inline-block">
            L&apos;Azienda
          </h2>
          <p className="text-xl md:text-2xl text-nonna-chocolate/90 font-light leading-relaxed max-w-4xl">
            L&apos;<span className="italic font-medium">Azienda Agricola Nonna Palma</span> proviene da due generazioni di famiglie contadine e proprio grazie ai loro insegnamenti, alla cura e alla dedizione che avevano per il terreno, sono nati la passione e l&apos;amore per la coltivazione della terra, utilizzando un&apos;agricoltura sostenibile, con metodi tradizionali, nel pieno rispetto dell&apos;ambiente.
          </p>
        </section>

        {/* La Posizione Section */}
        <section className="flex flex-col items-end space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <h2 className="text-3xl md:text-5xl font-serif text-nonna-chocolate tracking-tight border-b border-nonna-brown/20 pb-4 inline-block text-right">
            La Posizione
          </h2>
          <p className="text-xl md:text-2xl text-nonna-chocolate/90 font-light leading-relaxed max-w-4xl text-right">
            I nostri <span className="italic font-medium text-nonna-brown">terreni</span> ed i nostri <span className="italic font-medium text-nonna-brown">uliveti</span>, per lo più secolari, sono situati all&apos;interno della <span className="italic font-medium underline decoration-nonna-brown/30">Riserva di Torre Guaceto</span>, dove dalla combinazione di un clima mite e soleggiato (tipicamente Mediterraneo) e il tipo di terreno si ha origine a prodotti di alta qualità e gusto.
          </p>
        </section>

        {/* Galleria Section */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-nonna-chocolate tracking-tight">
              Galleria
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm group">
              <Image 
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop" 
                alt="Dettaglio ulivo" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm group mt-12">
              <Image 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop" 
                alt="Campo aperto" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm group">
              <Image 
                src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=800&auto=format&fit=crop" 
                alt="Prodotti della terra" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
