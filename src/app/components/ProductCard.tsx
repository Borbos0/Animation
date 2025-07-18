"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  img: string;
};

export function ProductCard({ id, name, price, img }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <motion.div
        layoutId={`card-container-${id}`}
        className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition cursor-pointer group"
        whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.16)" }}
      >
        <motion.img
          src={img}
          alt={name}
          layoutId={`product-image-${id}`}
          className="rounded-lg w-full h-80 object-cover mb-4"
        />
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-500">{price} ₽</div>
      </motion.div>
    </Link>
  );
}
