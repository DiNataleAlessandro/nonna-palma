import Image from "next/image";
import { Product } from "@/types";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <Image
          src={product.immagine_url || "https://images.unsplash.com/photo-1474979266404-7eaacabc8805?q=80&w=800&auto=format&fit=crop"} // Placeholder
          alt={product.nome}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-serif font-semibold tracking-tight leading-none group-hover:text-rustic-terracotta transition-colors">
            {product.nome}
          </h3>
          <span className="text-rustic-olive font-medium">€{product.prezzo.toFixed(2)}</span>
        </div>
        
        <p className="text-xs text-rustic-olive/70 line-clamp-2">
          {product.descrizione}
        </p>

        <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 mt-4 bg-rustic-olive text-white rounded-md text-sm uppercase tracking-widest hover:bg-rustic-terracotta transition-colors">
          <Plus className="w-4 h-4" />
          <span>Aggiungi</span>
        </button>
      </div>
    </div>
  );
}
