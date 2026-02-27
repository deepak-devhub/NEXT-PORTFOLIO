"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorTracker() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-12 h-12 border-2 border-accent-primary rounded-full pointer-events-none mix-blend-screen z-40"
      animate={{
        x: cursorPos.x - 24,
        y: cursorPos.y - 24,
        opacity: isMoving ? 1 : 0.3,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
    />
  );
}
