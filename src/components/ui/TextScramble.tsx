"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  autostart?: boolean;
  characters?: string;
  speed?: number;
}

export default function TextScramble({
  text,
  className = "",
  triggerOnHover = true,
  autostart = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><=",
  speed = 30,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  }, [text, isScrambling, characters, speed]);

  useEffect(() => {
    setDisplayText(text);
    if (autostart) {
      scramble();
    }
  }, [text, autostart, scramble]);

  return (
    <span
      onMouseEnter={() => {
        if (triggerOnHover) scramble();
      }}
      className={`inline-block transition-colors cursor-default ${className} ${
        isScrambling ? "text-lavender-deep" : ""
      }`}
    >
      {displayText}
    </span>
  );
}
