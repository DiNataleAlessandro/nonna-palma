import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { Quote } from "lucide-react";

export default async function HomePage() {
  // Fetch products from Supabase
  const { data: bestSellers } = await supabase
    .from("prodotti")
    .select("*")
    .limit(4);

  const { data: frise } = await supabase
    .from("prodotti")
    .select("*")
    .ilike("nome", "%frise%")
    .limit(4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#F8F4F1]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1474979266404-7eaacabc8805?q=80&w=2000&auto=format&fit=crop"
            alt="Uliveti Nonna Palma"
            fill
            priority
            className="object-cover opacity-60 mix-blend-multiply"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-[120px] font-serif text-nonna-chocolate tracking-tight leading-[1.1] md:leading-[1] mb-8 animate-fade-in">
            Azienda Agricola <br /> <span className="italic">Nonna Palma</span>
          </h1>
          <p className="text-lg md:text-2xl text-nonna-chocolate/80 font-serif tracking-[0.1em] mb-12 max-w-2xl italic">
            &quot;L&apos;Olio Extravergine che sa di casa&quot;
          </p>
          <div className="flex space-x-6">
            <Link 
              href="/shop" 
              className="px-10 py-4 bg-nonna-terra text-white hover:bg-nonna-chocolate transition-all duration-300 rounded-sm uppercase tracking-[0.2em] text-[13px] font-medium shadow-sm"
            >
              Acquista Ora
            </Link>
          </div>
        </div>
      </section>

      {/* I più venduti */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="text-nonna-terra uppercase tracking-[0.3em] text-[11px] font-bold">Produzione propria</span>
            <h2 className="text-4xl md:text-5xl font-serif text-nonna-chocolate">I più venduti</h2>
            <div className="w-16 h-[1px] bg-nonna-terra/40 mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {(bestSellers as Product[])?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {(!bestSellers || bestSellers.length === 0) && (
              <p className="col-span-full text-center text-nonna-chocolate/50 italic py-20">
                In caricamento...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Citazione / Testimonianza 1 */}
      <section className="py-24 bg-nonna-cream border-y border-nonna-chocolate/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="w-12 h-12 text-nonna-terra/30 mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-serif text-nonna-chocolate italic leading-relaxed mb-8">
            &quot;Consiglio vivamente l&apos;Azienda Agricola Nonna Palma a tutti gli amanti del buon cibo.&quot;
          </p>
          <div className="w-12 h-[1px] bg-nonna-terra mx-auto" />
        </div>
      </section>

      {/* Frise Tradizionali */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="text-nonna-terra uppercase tracking-[0.3em] text-[11px] font-bold">Tradizione Pugliese</span>
            <h2 className="text-4xl md:text-5xl font-serif text-nonna-chocolate">Frise Tradizionali</h2>
            <div className="w-16 h-[1px] bg-nonna-terra/40 mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {(frise as Product[])?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {(!frise || frise.length === 0) && (
              <div className="col-span-full text-center py-20 space-y-4">
                <p className="text-nonna-chocolate/50 italic">
                  Il forno è acceso, le frise arrivano a breve...
                </p>
                <Link href="/shop" className="text-nonna-terra text-sm underline tracking-widest uppercase">Vedi tutto lo shop</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonianza Antonio Esposito */}
      <section className="py-32 bg-white flex flex-col items-center">
         <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
            <div className="flex justify-center space-x-1 mb-4">
               {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-nonna-terra text-xl">★</span>
               ))}
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-nonna-chocolate font-bold italic tracking-wide">
               Antonio Esposito
            </h3>
            <p className="text-lg md:text-xl text-nonna-chocolate/70 font-serif leading-relaxed italic">
               &quot;Partecipo spesso agli eventi di degustazione organizzati dall&apos;Azienda Agricola Nonna Palma e ogni volta rimango sorpreso dalla varietà e bontà dei prodotti offerti. Un&apos;esperienza da non perdere!&quot;
            </p>
         </div>
      </section>
    </div>
  );
}
