@AGENTS.md

# 🌾 Azienda Agricola Nonna Palma: Core Mandates & Architecture

Questo documento fornisce la guida tecnica e architettonica per lo sviluppo della piattaforma e-commerce "Nonna Palma". L'obiettivo è sostituire il precedente sito Wix con un'app proprietaria ad altissime prestazioni (SEO-first e PWA), azzerando i costi fissi.

## 🏗️ 1. Architectural Blueprint & Stack

- **Framework:** Next.js 16+ (Strictly App Router).
- **React:** React 19 (React Compiler abilitato).
- **Styling:** Tailwind CSS v4.
- **Hosting / Edge:** Cloudflare Pages (tramite `@opennextjs/cloudflare`).
- **Database & Storage:** Supabase (PostgreSQL per catalogo, Storage per immagini).
- **Auth:** Supabase Auth (esclusivamente per proteggere la route `/admin`).
- **Pagamenti:** Stripe Checkout.

## 📂 2. Directory Structure (App Router)

Il progetto deve seguire rigorosamente questa divisione tramite Route Groups:
- `app/(storefront)/`: Contiene le pagine pubbliche indicizzabili (Home, Catalogo, Prodotto singolo, Carrello).
- `app/(admin)/`: Contiene il gestionale protetto (Dashboard, Gestione Prodotti, Ordini).
- `app/api/`: Route handlers per webhooks (es. Stripe) e operazioni server-side specifiche.
- `src/components/`: Componenti UI riutilizzabili.
- `src/lib/`: Client di configurazione (Supabase, Stripe) e utility.
- `src/types/`: Definizioni delle interfacce TypeScript (Product, CartItem, Order).

## 🎨 3. Design System & UI/UX

L'interfaccia deve richiamare la natura e l'agricoltura, mantenendo un look moderno, pulito e rigorosamente **Mobile-First**. 
Nota Bene: Il design parte da mobile, ma deve scalare in un'esperienza desktop premium, ampia e immersiva, sfruttando griglie multi-colonna e hover states eleganti per schermi grandi.

**Variabili Tailwind (da usare per la coerenza del tema):**
- **Primary (Verdi):** Tonalità salvia e foglia (es. `bg-green-700` per i bottoni primari).
- **Secondary (Terra):** Tonalità terracotta o legno per accenti e icone.
- **Backgrounds:** Bianchi caldi, panna o grigi chiarissimi (es. `bg-stone-50`) per non affaticare la vista.
- **Typography:** Font sans-serif puliti per la UI, eventuali font serif eleganti solo per gli headings (titoli dei prodotti).

## 💾 4. Data Fetching & State Management

- **SEO First:** Le pagine pubbliche dei prodotti e del catalogo devono usare i **Server Components** per fetchare i dati da Supabase in modo da generare HTML statico/SSR (fondamentale per Google).
- **Mutations:** Usa le **Server Actions** di Next.js per operazioni come l'aggiunta di prodotti dal pannello admin o l'aggiornamento delle scorte.
- **Carrello:** Gestito lato client (Client Component) tramite un Context o uno store (Zustand) persistito in `localStorage`.

## ⚠️ 5. Critical Safety Rules per l'Agente AI

1. **Mai esporre le chiavi:** `STRIPE_SECRET_KEY` e `SUPABASE_SERVICE_ROLE_KEY` non devono MAI finire in un file `"use client"`.
2. **Immagini:** Usa sempre il componente `<Image>` di Next.js. Poiché siamo su Cloudflare, assicurati di configurare correttamente i domini esterni (Supabase Storage) nel `next.config.ts`.
3. **Nessun `any`:** Il codice deve essere fortemente tipizzato. Se un tipo non è noto, definiscilo nella cartella `types`.
4. **App Router Only:** Ignora qualsiasi documentazione o pattern relativo al vecchio `pages/` directory.