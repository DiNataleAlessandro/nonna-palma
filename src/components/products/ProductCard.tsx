import Image from "next/image";
import { Product } from "@/types";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square relative overflow-hidden bg-white/50 rounded-sm">
        <Image
          src={product.immagine_url || "https://images.unsplash.com/photo-1474979266404-7eaacabc8805?q=80&w=800&auto=format&fit=crop"} // Placeholder
          alt={product.nome}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      <div className="pt-6 pb-2 space-y-2 text-center">
        <h3 className="text-lg font-serif text-nonna-chocolate tracking-tight leading-tight transition-colors px-2">
          {product.nome}
        </h3>
        
        <p className="text-sm font-sans font-semibold text-nonna-chocolate/80 tracking-wide">
          €{product.prezzo.toFixed(2)}
        </p>

        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-3 bg-nonna-brown text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-colors flex items-center justify-center space-x-2 rounded-full px-6 max-w-[140px] mx-auto cursor-pointer">
            <Plus className="w-3 h-3" />
            <span>Aggiungi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
