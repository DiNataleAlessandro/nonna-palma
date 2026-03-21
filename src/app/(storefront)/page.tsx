import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { ShieldCheck, Leaf, Truck } from "lucide-react";

export default async function HomePage() {
  // Fetch products from Supabase
  const { data: prodotti } = await supabase
    .from("prodotti")
    .select("*")
    .limit(4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464364418214-23a6c281313e?q=80&w=2000&auto=format&fit=crop"
          alt="Uliveti in Puglia"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-7xl font-serif text-white tracking-tight leading-tight">
            L&apos;Olio Extravergine <br /> che sa di casa
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-widest uppercase">
            Direttamente dai nostri uliveti a Fasano
          </p>
          <div className="pt-8">
            <Link 
              href="/shop" 
              className="inline-block px-10 py-4 bg-white text-rustic-olive hover:bg-rustic-terracotta hover:text-white transition-all duration-300 rounded-sm uppercase tracking-[0.2em] font-medium shadow-xl"
            >
              Scopri la Dispensa
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 bg-rustic-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-rustic-olive/5 rounded-full">
                <Leaf className="w-8 h-8 text-rustic-olive" />
              </div>
              <h3 className="text-xl font-serif font-bold">100% Pugliese</h3>
              <p className="text-sm opacity-70">Uliveti di famiglia curati con amore nel cuore della Puglia.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-rustic-olive/5 rounded-full">
                <ShieldCheck className="w-8 h-8 text-rustic-olive" />
              </div>
              <h3 className="text-xl font-serif font-bold">Tradizione Familiare</h3>
              <p className="text-sm opacity-70">Tecniche tramandate di generazione in generazione.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-rustic-olive/5 rounded-full">
                <Truck className="w-8 h-8 text-rustic-olive" />
              </div>
              <h3 className="text-xl font-serif font-bold">Spedizione in 48h</h3>
              <p className="text-sm opacity-70">Il meglio della nostra terra, fresco a casa tua velocemente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-rustic-olive">Dalla nostra terra alla tua tavola</h2>
            <div className="w-24 h-1 bg-rustic-terracotta mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {(prodotti as Product[])?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {(!prodotti || prodotti.length === 0) && (
              <p className="col-span-full text-center text-rustic-olive/50 italic py-20">
                La dispensa è in fase di aggiornamento...
              </p>
            )}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/shop" 
              className="text-rustic-olive border-b border-rustic-olive hover:text-rustic-terracotta hover:border-rustic-terracotta transition-colors tracking-widest uppercase text-sm font-medium pb-1"
            >
              Vedi tutto il catalogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
