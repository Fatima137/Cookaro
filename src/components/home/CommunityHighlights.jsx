"use client";

import Image from "next/image";

export default function CommunityHighlights() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center sm:text-left">
        Community Highlights / Activity Feed
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Activity Item 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            src="/brownie.jpg"
            width={400}
            height={300}
            alt="Vegan Brownies"
            className="w-full h-60 sm:h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white text-center text-sm sm:text-base">
            <span className="font-semibold">@foodlover123</span> posted a new review on Vegan Brownies
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            src="/grill.jpg"
            width={400}
            height={300}
            alt="Grilled Chicken"
            className="w-full h-60 sm:h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white text-center text-sm sm:text-base">
            <span className="font-semibold">@chef_mary</span> shared her Grilled Chicken masterpiece
          </div>
        </div>

        {/* Activity Item 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <Image
            src="/oil.jpg"
            width={400}
            height={300}
            alt="Cooking Oils"
            className="w-full h-60 sm:h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-white text-center text-sm sm:text-base">
            <span className="font-semibold">🔥 Hot Topic:</span> "Best Cooking Oils for High Heat"
          </div>
        </div>
      </div>
    </section>
  );
}