"use client";

import Image from "next/image";

export default function AdBanner() {
  return (
    <section className="container mx-auto px-4 py-6 mb-12">
      <div className="relative bg-teal-500 rounded-lg overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="max-w-lg text-center md:text-left">
            <div className="bg-yellow-300 px-4 py-1 mb-4 inline-block font-bold text-black text-sm md:text-base">
              MOBILE AD FORMATS
            </div>
            <h4 className="text-xl md:text-2xl text-white font-bold">
              LAB #3 - BANNER ADS
            </h4>
            <p className="text-lg md:text-xl text-white font-bold">
              DOS & DON&apos;TS
            </p>
          </div>
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/banana.jpg"
              fill
              alt="Banana Peel"
              className="object-contain"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
            Ad Here
          </button>
          <button className="bg-transparent text-white font-bold hover:text-gray-200 text-lg">
            ✕
          </button>
        </div>
      </div>
    </section>
  );
}