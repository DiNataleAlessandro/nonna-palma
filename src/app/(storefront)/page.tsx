import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { Quote, Clock, Calendar } from "lucide-react";

export default async function HomePage() {
  // Fetch products from Supabase
  const { data: allProducts } = await supabase
    .from("prodotti")
    .select("*")
    .limit(8);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Exact Wix Match */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464364418214-23a6c281313e?q=80&w=2000&auto=format&fit=crop"
            alt="Uliveti Nonna Palma"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center text-white">
          <h1 className="text-5xl md:text-8xl font-serif tracking-widest leading-tight mb-4 drop-shadow-lg uppercase">
            ESPLORA <br /> L&apos;ECCELLENZA
          </h1>
          <h2 className="text-xl md:text-3xl font-serif italic mb-10 drop-shadow-md">
            Benvenuti nel Mondo dell&apos;Azienda Agricola Nonna Palma
          </h2>
          <Link 
            href="/shop" 
            className="px-12 py-4 bg-white text-nonna-chocolate hover:bg-nonna-terra hover:text-white transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-[14px] font-bold shadow-lg"
          >
            Scopri di più
          </Link>
        </div>
      </section>

      {/* I NOSTRI PRODOTTI - Gallery Section */}
      <section className="py-24 px-4 bg-[#F8F4F1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-nonna-chocolate uppercase tracking-widest">I NOSTRI PRODOTTI</h2>
            <div className="w-20 h-[2px] bg-nonna-chocolate mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {(allProducts as Product[])?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/shop" 
              className="inline-block px-10 py-4 border-2 border-nonna-chocolate text-nonna-chocolate hover:bg-nonna-chocolate hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold"
            >
              Vedi tutto lo shop
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTI SPECIALI - Exactly as Wix */}
      <section className="py-20 bg-nonna-chocolate text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest">EVENTI SPECIALI</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-nonna-terra" />
              <span className="text-xl font-serif italic">Ogni giorno dalle 19:00 alle 22:00</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-nonna-terra" />
              <span className="text-xl font-serif italic">Degustazioni guidate</span>
            </div>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto italic">
            Vieni a trovarci per un&apos;esperienza sensoriale indimenticabile tra i sapori della nostra terra.
          </p>
        </div>
      </section>

      {/* COSA DICONO I NOSTRI CLIENTI - Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-nonna-chocolate uppercase tracking-widest">COSA DICONO I NOSTRI CLIENTI</h2>
            <p className="text-nonna-chocolate/60 tracking-widest uppercase text-xs">Testimonianze</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-nonna-terra/20">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Maria Rossi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-nonna-chocolate">Maria Rossi</h3>
              <Quote className="w-8 h-8 text-nonna-terra/40" />
              <p className="text-nonna-chocolate/80 italic leading-relaxed">
                &quot;L&apos; Azienda Agricola Nonna Palma è un punto di riferimento per la qualità. I prodotti sono genuini e il sapore è autentico.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-nonna-terra/20">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Antonio Esposito" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-nonna-chocolate">Antonio Esposito</h3>
              <Quote className="w-8 h-8 text-nonna-terra/40" />
              <p className="text-nonna-chocolate/80 italic leading-relaxed">
                &quot;Ho acquistato l&apos;olio extravergine di oliva e devo dire che è il migliore che abbia mai provato. Complimenti!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-nonna-terra/20">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Giovanna Bianchi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-nonna-chocolate">Giovanna Bianchi</h3>
              <Quote className="w-8 h-8 text-nonna-terra/40" />
              <p className="text-nonna-chocolate/80 italic leading-relaxed">
                &quot;Partecipo spesso agli eventi di degustazione e ogni volta rimango sorpresa dalla varietà e bontà dei prodotti offerti.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
