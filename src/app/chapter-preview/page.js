"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ChapterPreview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl font-serif mb-8">
          Exclusive Chapter Preview
        </h1>
        <p className="text-xl leading-relaxed">
          Here’s a captivating excerpt from <em>The Ritual of Intimacy</em>:
        </p>

        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-scarlet-500 space-y-4 text-left">
          <p>
            <em>
              “Every intimate act is, at its core, a sacred ritual—a powerful fusion of physical,
              emotional, and spiritual energies. Consider intimacy as a key that unlocks your
              metaphysical safe, releasing orgasmic energy capable of profound healing, transformative
              manifestation, and spiritual protection...”
            </em>
          </p>
          <p>
            This is just the beginning of your journey toward deeper intimacy and greater manifestation power.
            In the full guide, you'll learn the exact rituals to transform your connection and unleash your
            inherent magic.
          </p>
        </div>

        <p className="mt-8 text-xl">
          Ready to experience the full book? 
          <br />
          <a
            href="https://payhip.com/b/poaeC"
            className="inline-block mt-4 px-6 py-3 font-bold rounded-full bg-gradient-to-r from-scarlet-700 to-scarlet-500 border-2 border-scarlet-500 transition-transform duration-200 hover:scale-105"
          >
            Buy The Ritual of Intimacy
          </a>
        </p>
      </motion.div>
    </div>
  );
}
