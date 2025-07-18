// src/app/product/[id]/page.tsx
"use client";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Товар не найден</div>;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-30 bg-black/60"
      />
      <div className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
        <motion.img
          src={product.img}
          alt={product.name}
          layoutId={`product-image-${product.id}`}
          className="rounded-xl w-[28rem] h-100 object-cover shadow-2xl pointer-events-auto"
          style={{ zIndex: 41 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-xl p-8 mt-8 w-[30rem] text-center pointer-events-auto"
          style={{ zIndex: 42 }}
        >
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.desc}</p>
          <div className="text-xl font-semibold mb-8">{product.price} ₽</div>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
          >
            Назад
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
