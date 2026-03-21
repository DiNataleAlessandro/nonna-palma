import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Product } from "@/types";
import { ChevronLeft, ShoppingBag, Truck, ShieldCheck } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const { data: product } = await supabase
    .from("prodotti")
    .select("nome, descrizione")
    .eq("slug", slug)
    .single();

  if (!product) return { title: "Prodotto non trovato" };

  return {
    title: `${product.nome} | Azienda Agricola Nonna Palma`,
    description: product.descrizione,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const { data: product } = (await supabase
    .from("prodotti")
    .select("*")
    .eq("slug", slug)
    .single()) as { data: Product | null };

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs / Back Link */}
        <Link 
          href="/#catalogo" 
          className="inline-flex items-center text-nonna-chocolate hover:text-nonna-brown transition-colors mb-12 text-sm font-medium uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Torna al catalogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Section */}
          <div className="relative aspect-square bg-white rounded-sm overflow-hidden shadow-sm">
            <Image
              src={product.immagine_url || "https://images.unsplash.com/photo-1474979266404-7eaacabc8805?q=80&w=800&auto=format&fit=crop"}
              alt={product.nome}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col space-y-8 py-4">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif text-nonna-chocolate leading-tight">
                {product.nome}
              </h1>
              <p className="text-2xl font-sans font-bold text-nonna-brown">
                €{product.prezzo.toFixed(2)}
              </p>
            </div>

            <div className="w-16 h-[2px] bg-nonna-brown" />

            <div className="text-nonna-chocolate leading-relaxed text-lg font-light">
              {product.descrizione}
            </div>

            <div className="pt-8 space-y-6">
              <button className="w-full md:w-auto px-12 py-5 bg-nonna-brown text-white font-sans font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-90 transition-all flex items-center justify-center space-x-3 shadow-lg">
                <ShoppingBag className="w-5 h-5" />
                <span>Aggiungi al carrello</span>
              </button>

              {/* Service Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-nonna-chocolate/10">
                <div className="flex items-center space-x-3 text-nonna-chocolate/70">
                  <Truck className="w-5 h-5 text-nonna-brown" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Spedizione Rapida</span>
                </div>
                <div className="flex items-center space-x-3 text-nonna-chocolate/70">
                  <ShieldCheck className="w-5 h-5 text-nonna-brown" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Qualità Garantita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
