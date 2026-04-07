"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "療癒體驗", href: "#experiences" },
    { name: "師資介紹", href: "#teacher" },
    { name: "科學實證", href: "#science" },
    { name: "空間據點", href: "#locations" },
  ];

  return (
    <>
      <nav id="main-nav" className={cn(scrolled && "scrolled")}>
        <Link href="/" className="nav-logo">
          <img src="/images/logo-gold.png" alt="樺芯苑" />
          <span className="nav-logo-text">樺芯苑</span>
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>
        <a href="https://shop.soulvibetw.com" className="nav-cta">立即預約</a>
        <div className="nav-hamburger" id="hamburger" onClick={() => setIsMenuOpen(true)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={cn("mobile-nav-overlay", isMenuOpen && "open")} id="mobile-nav">
        <span className="mobile-nav-close" id="nav-close" onClick={() => setIsMenuOpen(false)}>✕</span>
        {links.map((link) => (
          <a key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}
        <a 
          href="https://shop.soulvibetw.com" 
          className="btn-primary" 
          style={{ marginTop: '1rem', color: '#000000', backgroundColor: 'var(--gold)' }} 
          onClick={() => setIsMenuOpen(false)}
        >
          立即預約體驗
        </a>
      </div>
    </>
  );
}
