"use client";

import { motion } from "framer-motion";
import SectionRings from "./SectionRings";

export default function Hero() {
  return (
    <header id="hero">
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="hero-bg"
        style={{ backgroundImage: "url('/images/DM3.jpg')" }}
      />
      <div className="hero-overlay"></div>
      
      <SectionRings />

      <div className="hero-content">
        <img src="/images/logo-gold.png" alt="樺芯苑" className="hero-logo" />
        <p className="hero-eyebrow">頌缽 · 頻率 · 療癒空間</p>
        <h1>給關不掉大腦的你，<br />一場 <em>60 分鐘</em>的深層靜音</h1>
        <p className="hero-subtitle">不需練習冥想，只需躺下感受<br />為都會高壓族設計的頻率放鬆所・台北・嘉義・高雄</p>
        <div className="hero-cta-row">
          <a href="https://soulvibetw.com/booking" className="btn-primary">立即預約體驗</a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        向下探索
      </div>
    </header>
  );
}
