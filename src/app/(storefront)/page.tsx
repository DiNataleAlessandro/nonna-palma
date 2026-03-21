import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { Quote, Clock, Calendar } from "lucide-react";

export default async function HomePage() {
  // Fetch all products from Supabase
  const { data: allProducts } = await supabase
    .from("prodotti")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="flex flex-col w-full bg-[#f8f4f1]">
      {/* Hero Section - New Staggered Design */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Hero Text & CTA */}
        <div className="relative z-40 text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif text-nonna-chocolate tracking-tight">
            Esplora l&apos;Eccellenza
          </h1>
          <p className="text-lg md:text-xl font-sans text-nonna-chocolate font-medium tracking-wide">
            Benvenuti nel Mondo dell&apos;Azienda Agricola Nonna Palma
          </p>
          <div className="pt-4">
            <Link 
              href="/chi-siamo" 
              className="inline-block px-10 py-4 bg-nonna-brown text-white font-sans font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Scopri di più
            </Link>
          </div>
        </div>

        {/* Central Staggered Image Composition */}
        <div className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[800px] mt-16">
          {/* Image 1 (Base/Background): The Masseria Farmhouse */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[65%] z-10 aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1200&auto=format&fit=crop"
              alt="Masseria fields farmhouse"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image 2 (Top-Left Overlap): Red Cherry Tomatoes */}
          <div className="absolute top-[5%] left-[2%] md:left-[8%] w-[35%] md:w-[28%] z-20 aspect-square overflow-hidden rounded-sm shadow-2xl transform -rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=600&auto=format&fit=crop"
              alt="Bunch of red cherry tomatoes"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 (Middle-Right Overlap): Olive Branch */}
          <div className="absolute bottom-[10%] right-[2%] md:right-[5%] w-[40%] md:w-[32%] z-20 aspect-[4/3] overflow-hidden rounded-sm shadow-2xl transform rotate-2">
            <Image
              src="https://images.unsplash.com/photo-1516053353285-399fdf4017a5?q=80&w=800&auto=format&fit=crop"
              alt="Olive tree branch green olives"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 4 (Bottom-Center Overlap): Hands holding Yellow Tomatoes */}
          <div className="absolute -bottom-[5%] left-1/2 transform -translate-x-1/2 w-[30%] md:w-[22%] z-30 aspect-square overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1615485242231-15822340579e?q=80&w=600&auto=format&fit=crop"
              alt="Hands holding yellow tomatoes"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* I NOSTRI PRODOTTI - Gallery Section */}
      <section id="catalogo" className="py-24 px-4 scroll-mt-20">
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
        </div>
      </section>

      {/* Rest of the page kept consistent but with light bg */}
      {/* EVENTI SPECIALI */}
      <section className="py-24 bg-nonna-chocolate text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest">EVENTI SPECIALI</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-nonna-brown" />
              <span className="text-xl font-serif italic">Ogni giorno dalle 19:00 alle 22:00</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-nonna-brown" />
              <span className="text-xl font-serif italic">Degustazioni guidate</span>
            </div>
          </div>
          <p className="text-white max-w-2xl mx-auto italic">
            Vieni a trocarci per un&apos;esperienza sensoriale indimenticabile tra i sapori della nostra terra.
          </p>
        </div>
      </section>

      {/* COSA DICONO I NOSTRI CLIENTI */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-nonna-chocolate uppercase tracking-widest">COSA DICONO I NOSTRI CLIENTI</h2>
            <p className="text-nonna-chocolate tracking-widest uppercase text-[10px] font-bold">Testimonianze</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-nonna-brown/20">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Maria Rossi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-nonna-chocolate">Maria Rossi</h3>
              <Quote className="w-8 h-8 text-nonna-brown/40" />
              <p className="text-nonna-chocolate italic leading-relaxed">
                &quot;L&apos; Azienda Agricola Nonna Palma è un punto di riferimento per la qualità. I prodotti sono genuini e il sapore è autentico.&quot;
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-nonna-brown/20">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Antonio Esposito" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-nonna-chocolate">Antonio Esposito</h3>
              <Quote className="w-8 h-8 text-nonna-brown/40" />
              <p className="text-nonna-chocolate italic leading-relaxed">
                &quot;Ho acquistato l&apos;olio extravergine di oliva e devo dire che è il migliore che abbia mai provato. Complimenti!&quot;
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-nonna-brown/20">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Giovanna Bianchi" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-bold text-nonna-chocolate">Giovanna Bianchi</h3>
              <Quote className="w-8 h-8 text-nonna-brown/40" />
              <p className="text-nonna-chocolate italic leading-relaxed">
                &quot;Partecipo spesso agli eventi di degustazione e ogni volta rimango sorpresa dalla varietà e bontà dei prodotti offerti.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
