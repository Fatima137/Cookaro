"use client";

import Image from "next/image";

export default function FeaturedCategories() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
        Featured Categories
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Category 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            src="/table.jpg"
            width={400}
            height={300}
            alt="Quick Dinners"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-black/70 text-white px-4 py-1.5 rounded-full text-sm sm:text-base font-medium">
              Quick Dinners
            </span>
          </div>
        </div>

        {/* Category 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            src="/vege.jpg"
            width={400}
            height={300}
            alt="Vegan Delights"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-black/70 text-white px-4 py-1.5 rounded-full text-sm sm:text-base font-medium">
              Vegan Delights
            </span>
          </div>
        </div>

        {/* Category 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            src="/chef.jpg"
            width={400}
            height={300}
            alt="Summer Grilling"
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-black/70 text-white px-4 py-1.5 rounded-full text-sm sm:text-base font-medium">
              Summer Grilling
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}