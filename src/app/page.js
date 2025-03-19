"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Button = ({ onClick, children, className }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 text-lg font-bold tracking-wide rounded-full border-2 border-scarlet-500 transition-transform duration-200 bg-gradient-to-r from-scarlet-700 to-scarlet-500 hover:from-scarlet-600 hover:to-scarlet-400 shadow-xl shadow-scarlet-900/80 ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

export default function EbookFunnel() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleOptIn = () => {
    if (email) {
      fetch("https://api.mailerlite.com/api/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({ email, resubscribe: true })
      }).then((response) => {
        if (response.ok) {
          router.push('/chapter-preview');
        } else {
          alert('Oops, something went wrong. Please try again!');
        }
      });
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.5 }} 
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[url('/smoke-animation.gif')] bg-cover bg-center opacity-30"
      />

      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full relative z-10 space-y-10 md:space-y-0 md:space-x-10 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full md:w-1/2 max-w-lg -mt-12 md:-mt-8 flex justify-center">
          <Image 
            src="/hero-image.png" 
            alt="A mystical journey into intimate rituals" 
            width={600}
            height={800}
            className="rounded-xl object-cover opacity-90 shadow-lg shadow-black/40"
            style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)" }}
          />
        </div>

        <div className="w-full max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-serif leading-snug tracking-wide">
            Unlock the Mystical Secrets of Intimate Rituals
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed bg-gray-900 p-6 rounded-lg border border-scarlet-500 shadow-lg shadow-black/50">
            Step into a realm of enchantment where every ritual is infused with magic and desire. In this exclusive preview of <strong>The Ritual of Intimacy</strong>, you&apos;ll uncover esoteric practices that ignite passion and deepen your soul&apos;s connection.
          </p>
          <div className="mt-6 md:ml-8 text-lg text-gray-300">
            <ul className="space-y-2">
              <li>✔ Unveil sacred rituals for profound intimacy</li>
              <li>✔ Rekindle passion with enchanted practices</li>
              <li>✔ Discover mystical secrets for lasting allure</li>
            </ul>
            <p className="mt-4">
              Claim your exclusive preview now by entering your email below, and step into a world where magic and intimacy intertwine.
            </p>
          </div>
          <div className="mt-8 p-6 flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full rounded-lg border border-gray-600 focus:border-red-500 transition duration-300 bg-gray-800 text-white"
            />
            <Button onClick={handleOptIn} className="mx-auto">
              Reveal My Exclusive Preview
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
