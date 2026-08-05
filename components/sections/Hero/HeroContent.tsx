"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="font-semibold text-blue-600">
        👋 Hello, I'm
      </span>

      <h1 className="mt-4 text-6xl font-black leading-tight">
        {profile.name}
      </h1>

      <h2 className="mt-6 text-2xl text-slate-500 dark:text-slate-300">
        {profile.title}
      </h2>

      <p className="mt-8 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
        {profile.description}
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-10">
        <HeroSocials />
      </div>
    </motion.div>
  );
}