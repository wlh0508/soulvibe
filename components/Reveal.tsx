"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className={isInView ? "reveal visible" : "reveal"} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
