"use client";

import Image from "next/image";

export default function Carousel() {
  const images = [
    "/NextJs.jpeg",
    "/React.png",
    "/TypeScript.jpeg",
    "/JavaScript.png",
    "/Tailwind.jpeg",
    "/Python.jpeg",
    "/C++.jpeg",
  ];

  const items = [...images, ...images];

  return (
    <div className="shadow-sm border-2 border-green-300 rounded-lg relative mx-auto mt-18 w-[700px] max-w-full h-20 overflow-hidden bg-black">

      {/* scrolling row */}
      <div className="flex h-full items-center gap-8 animate-scroll">
        {items.map((src, i) => (
          <div
            key={i}
            className="relative gap-4 flex-none h-full aspect-[16/9]"
          >
            <Image
              src={src}
              alt={`tech-${i}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />

      <style jsx>{`
        .animate-scroll {
          animation: scroll 22s linear infinite;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}