"use client";

import { useEffect, useRef, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export default function Ojos() {
  const [cursor, setCursor] = useState<Position>({ x: 0, y: 0 });
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calcIrisOffset = (eye: HTMLDivElement | null) => {
    if (!eye) return { x: 0, y: 0 };

    const rect = eye.getBoundingClientRect();
    const eyeCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    const dx = cursor.x - eyeCenter.x;
    const dy = cursor.y - eyeCenter.y;

    // Distancia máxima del iris respecto al centro
    const distance = Math.min(3, Math.sqrt(dx * dx + dy * dy));
    const angle = Math.atan2(dy, dx);

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const leftOffset = calcIrisOffset(leftEyeRef.current);
  const rightOffset = calcIrisOffset(rightEyeRef.current);

  return (
    <div className="fixed right-1 bottom-4">
      <img
        src={"/Yo-sinojos-low.webp"}
        width={160}
        alt="cientific cartoon style"
      />
      <div className="absolute flex flex-row top-14 left-10 -z-10">
        {[leftOffset, rightOffset].map((offset, index) => (
          <div
            key={index}
            ref={index === 0 ? leftEyeRef : rightEyeRef}
            className="w-8 h-7 bg-white rounded-full border-2 border-black"
          >
            <div
              className="relative w-2 h-2 bg-gray-900 rounded-full"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
