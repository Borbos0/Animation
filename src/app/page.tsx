"use client";

import { ProductCard } from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}
