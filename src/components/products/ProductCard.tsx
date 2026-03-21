import Image from "next/image";
import { Product } from "@/types";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white transition-all duration-500">
      <div className="aspect-[1/1] relative overflow-hidden bg-nonna-cream">
        <Image
          src={product.immagine_url || "https://images.unsplash.com/photo-1474979266404-7eaacabc8805?q=80&w=800&auto=format&fit=crop"} // Placeholder
          alt={product.nome}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>

      <div className="pt-6 pb-2 space-y-3 text-center">
        <h3 className="text-xl font-serif text-nonna-chocolate tracking-tight leading-tight group-hover:text-nonna-terra transition-colors px-2">
          {product.nome}
        </h3>
        
        <p className="text-[15px] font-bold text-nonna-chocolate/90 tracking-wider">
          €{product.prezzo.toFixed(2)}
        </p>

        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-3 bg-nonna-chocolate text-white text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-nonna-terra transition-colors flex items-center justify-center space-x-2">
            <Plus className="w-3 h-3" />
            <span>Aggiungi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
