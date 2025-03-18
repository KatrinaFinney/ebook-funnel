"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Button = ({ onClick, children, className }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 text-lg font-bold tracking-wide rounded-full border-2 border-scarlet-500 transition duration-300 transform hover:scale-110 hover:bg-opacity-80 bg-gradient-to-r from-scarlet-700 to-scarlet-500 shadow-xl shadow-scarlet-900/80 ${className}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  >
    {children}
  </motion.button>
);

const Input = ({ type, placeholder, value, onChange, className }) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    className={`p-3 w-full rounded-lg border border-gray-600 focus:border-red-500 transition duration-300 bg-gray-800 text-white ${className}`} 
  />
);

const Card = ({ children, className }) => (
  <div className={`mt-6 bg-gray-900 p-8 rounded-xl text-white shadow-xl ${className}`}>{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

export default function EbookFunnel() {
  const [email, setEmail] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [countdown, setCountdown] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleOptIn = () => {
    if (email) {
      setShowDetails(true);
      // Integrate MailerLite API for email capture
      fetch("https://api.mailerlite.com/api/v2/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjQ2Y2JkNWNhM2QyNjQ1NTUxNWRjYzU3MTA0NmExMjQxODcxOTgwMDczYTc2OGRiMDhiMTRhOTZhZjM3NTY1NTJjM2E4YmMzNmUzZGQ3MDciLCJpYXQiOjE3NDIzMzczNjAuMjA5NTM1LCJuYmYiOjE3NDIzMzczNjAuMjA5NTM4LCJleHAiOjQ4OTgwMTA5NjAuMjAzODQ5LCJzdWIiOiIxNDA3NDU1Iiwic2NvcGVzIjpbXX0.wukGMB3Ox9iRuc1aMLPzIPsOEQtygaAi_1LLl8Omsssy8DzDeO6Wi1risz_eEs4VUUB-t4aTXVi1WOM3TS9dkmhUAsHx7Kh6ponb5-JYY0n1POJXX7ggsFljqaLm6WtM3ZsgOCC2_ZlBHprgQQK4Z5HFMkGDOpamzyHTg8am9QmfXOa892b_ob-jE-UL2KrfaW-BHiTMDjoqqObtIqiki20BT5eThLHBhasPFj9yhFBV2NFJq6VLntPijBEo1qSLRQFzeiwqRp_BHUj278N6Cvr5KgL57UUQfu283L9fFis8vXGxy-hxYtLvqVc65MRw22OIskDnJ8GNSrNnJYX3U9Vk_lAwbbw65T3HaBHUQac8WbSsvrAUvlCZgL0zYuqGnWmA4_qMKYlrf0scDmJWb7m1qGUHBYNJaW3PqeKUpPmtgdgkARDVQGzT8BLnFGOMkLsrXLMfbtBGgkflbT_ss0djJ8n1PEb9ZjDTH2_UnfVgdkVXfaLJRvEBn3F1jeEzhH7w6f0BMON_9V76TMxdCLqhxG_mWO5_GPL8wb7XYz1DPS089OP2asfTHSGSrmOlE65G1cW0kp4HtXeDmxUSw7-YTlDzYL0bdaPZK60YMSFcWEZOkFKUcfzCs7GQ2Qp98rmlb37942mM4DOPW03fFQPl_y3yjLLwfVYnttNNMq0"
        },
        body: JSON.stringify({
          email: email,
          resubscribe: true
        })
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.5 }} 
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/smoke-animation.gif')] bg-cover bg-center opacity-30"
        />
      </div>
      {!showDetails ? (
        <motion.div className="flex flex-col md:flex-row items-center max-w-5xl w-full relative z-10 space-y-10 md:space-y-0 md:space-x-10 pt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img 
            src="/hero-image.png" 
            alt="A mystical journey into intimate rituals" 
            className="w-1/2 max-w-lg rounded-xl object-cover md:mr-8 opacity-90 shadow-lg shadow-black/40 -mt-8" 
            style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)" }} 
          />
          <div className="text-left w-full max-w-lg">
            <h1 className="text-5xl font-serif text-white leading-snug tracking-wide">
              Unlock the Mystical Secrets of Intimate Rituals
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed bg-gray-900 p-6 rounded-lg border border-scarlet-500 shadow-lg shadow-black/50">
              Step into a realm of enchantment where every ritual is infused with magic and desire. In this exclusive preview of <strong>The Ritual of Intimacy</strong>, a mystical guide to intimate rituals, you'll uncover esoteric practices that ignite passion and deepen your soul's connection.
            </p>
            <div className="mt-6 text-center md:text-left md:ml-8">
              <ul className="mt-4 text-lg text-gray-300">
                <li>✔ Unveil sacred rituals for profound intimacy</li>
                <li>✔ Rekindle passion with enchanted practices</li>
                <li>✔ Discover mystical secrets for lasting allure</li>
              </ul>
              <p className="mt-4 text-lg text-gray-300">
                Claim your exclusive preview now by entering your email below, and step into a world where magic and intimacy intertwine.
              </p>
            </div>
            <div className="mt-8 p-6 rounded-xl flex flex-col space-y-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Button onClick={handleOptIn} className="mt-4">
                Reveal My Exclusive Preview
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div className="text-center max-w-3xl relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl font-serif text-white tracking-wide">
            The Ritual of Intimacy
          </h1>
          <p className="mt-4 text-xl text-gray-300 leading-relaxed">
            A magical guide to awakening deep connection, passion, and transformation.
          </p>
          <Card>
            <CardContent>
              <img src="/mockup.png" alt="The Ritual of Intimacy cover" className="w-full rounded-lg" />
              <p className="mt-4 text-lg">✔ Embrace the enchantment of intimate rituals</p>
              <p className="text-lg">✔ Deepen both emotional and mystical connections</p>
              <p className="text-lg">✔ Discover sacred practices for a passionate, magical life</p>
              <Button className="mt-4" onClick={() => window.location.href = " https://payhip.com/b/poaeC"}>
                Buy The Book - $19.99
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
