"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

export default function EbookFunnel() {
  return (
    <>
      {/* 1) Load MailerLite Universal Script */}
      <Script
        id="mailer-lite-universal"
        strategy="beforeInteractive"
      >
        {`
          (function(w,d,e,u,f,l,n){
            w[f]=w[f]||function(){
              (w[f].q=w[f].q||[]).push(arguments);
            },
            l=d.createElement(e);
            l.async=1;l.src=u;
            n=d.getElementsByTagName(e)[0];
            n.parentNode.insertBefore(l,n);
          })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');

          ml('account', '1394794'); // Replace with your actual account ID if different
        `}
      </Script>

      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
        {/* 2) Smoke animation background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/smoke-animation.gif')] bg-cover bg-center opacity-30"
        />

        {/* 3) Main funnel content */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full relative z-10 space-y-10 md:space-y-0 md:space-x-10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Hero Image */}
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

          {/* Text & Bullet Points */}
          <div className="w-full max-w-lg text-center md:text-left">
            <h1 className="text-5xl font-serif leading-snug tracking-wide">
              Discover the Rituals to Ignite Passion & Manifest Your Deepest Desires
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed bg-gray-900 p-6 rounded-lg border border-scarlet-500 shadow-lg shadow-black/50">
              Step into a realm where intimacy becomes your most powerful magical practice. In this exclusive preview of <strong>The Ritual of Intimacy</strong>, you&apos;ll uncover potent rituals that amplify passion, ignite profound pleasure, and harness orgasmic energy to bring your desires into reality.
            </p>
            <div className="mt-6 md:ml-8 text-lg text-gray-300">
              <ul className="space-y-2">
                <li>✔️ Master Ancient Intimacy Rituals for Lasting Passion</li>
                <li>✔️ Channel Orgasmic Energy to Fuel Your Manifestation</li>
                <li>✔️ Deepen Spiritual &amp; Emotional Bonds Instantly</li>
                <li>✔️ Turn Your Desires into Tangible Realities</li>
              </ul>
              <p className="mt-4">
                Enter your email below and immediately <strong>claim your free preview</strong> into the
                practices that will transform your intimacy and supercharge your manifestation.
              </p>
            </div>

            {/* 4) Embed your MailerLite form */}
            <div className="mt-8 p-6 flex flex-col space-y-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <div class="ml-embedded" data-form="6jOTxn"></div>
                  `
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
