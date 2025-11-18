"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard({ product, onViewMore }) {
  const { title, description, price, rating, imageUrl, inStock, onSale } = product;

  const handleAddToCart = () => {
    alert("Your Product has been added to the cart");
  };

  const handleViewMore = () => {
    alert("Getting more details about the product.");
    if (onViewMore) onViewMore(product);
  };

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="group max-w-sm w-full rounded-2xl border border-slate-200 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
    >
      {/* Product Image */}
      <figure className="relative w-full h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {!inStock && (
          <span className="absolute left-2 top-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Out of stock
          </span>
        )}

        {inStock && onSale && (
          <span className="absolute left-2 top-2 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Sale
          </span>
        )}
      </figure>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 gap-3">
        <header className="text-center space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
        </header>

        <div className="flex items-center justify-between text-sm mt-1">
          <div className="font-semibold">₹{price.toFixed(2)}</div>

          <div
            className="flex items-center gap-1 text-amber-500"
            aria-label={`Rated ${rating} out of 5`}
          >
            <span className="text-xs font-medium">{rating.toFixed(1)}</span>
            <span aria-hidden="true">★</span>
          </div>
        </div>

        {/* Buy Now Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white py-2.5 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {inStock ? "Buy Now" : "Out of Stock"}
        </button>

        {/* Full-width View More Button */}
        <button
          type="button"
          onClick={handleViewMore}
          className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-slate-800 text-slate-900 dark:text-white dark:border-white py-2.5 text-sm font-semibold transition hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          View More
        </button>
      </div>
    </motion.article>
  );
}
