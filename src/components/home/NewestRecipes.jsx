"use client";

import Image from "next/image";

export default function NewestRecipes() {
  return (
    <section className="container mx-auto px-10 py-12">
      <h3 className="text-2xl font-medium mb-6">Newest Recipes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Recipe Card 1 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/shrimp.jpg"
              width={300}
              height={200}
              alt="Garlic Butter Shrimp Pasta"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <span className="text-xs font-medium px-2 py-0.5 bg-white rounded-full">New</span>
            </div>
          </div>
          <h4 className="mt-3 text-lg font-medium">Garlic Butter Shrimp Pasta</h4>
          <p className="text-sm text-gray-600">Total time: 15 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(18)</span>
          </div>
        </div>

        {/* Recipe Card 2 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/riso.jpg"
              width={300}
              height={200}
              alt="Creamy Mushroom Risotto"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <span className="text-xs font-medium px-2 py-0.5 bg-white rounded-full">New</span>
            </div>
          </div>
          <h4 className="mt-3 text-lg font-medium">Creamy Mushroom Risotto</h4>
          <p className="text-sm text-gray-600">Total time: 18 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(24)</span>
          </div>
        </div>

        {/* Recipe Card 3 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/corn.jpg"
              width={300}
              height={200}
              alt="Chili Lime Grilled Corn"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <span className="text-xs font-medium px-2 py-0.5 bg-white rounded-full">New</span>
            </div>
          </div>
          <h4 className="mt-3 text-lg font-medium">Chili Lime Grilled Corn</h4>
          <p className="text-sm text-gray-600">Total time: 32 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(12)</span>
          </div>
        </div>

        {/* Recipe Card 4 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/oreo.jpg"
              width={300}
              height={200}
              alt="No-Bake Oreo Cheesecake"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <span className="text-xs font-medium px-2 py-0.5 bg-white rounded-full">New</span>
            </div>
          </div>
          <h4 className="mt-3 text-lg font-medium">No-Bake Oreo Cheesecake</h4>
          <p className="text-sm text-gray-600">Total time: 12 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(13)</span>
          </div>
        </div>
      </div>
    </section>
  );
}