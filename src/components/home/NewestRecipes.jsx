"use client";

import Image from "next/image";

export default function NewestRecipes() {
  const moreRecipes = [
    { name: "Chili Lime Grilled Corn", time: "32 mins", rating: 4.8 },
    { name: "No-Bake Oreo Cheesecake", time: "12 mins", rating: 4.9 },
    { name: "Spicy Thai Basil Chicken", time: "20 mins", rating: 4.7 },
    { name: "Mediterranean Quinoa Bowl", time: "25 mins", rating: 4.5 },
    { name: "Apple Cinnamon Overnight Oats", time: "5 mins", rating: 4.6 },
    { name: "Lemon Garlic Roasted Broccoli", time: "15 mins", rating: 4.4 }
  ];

  return (
    <section className="container mx-auto px-10 py-12">
      <h3 className="text-2xl font-medium mb-6">Newest Recipes</h3>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Recipe Card 1 */}
        <div className="md:w-1/3 relative">
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
        <div className="md:w-1/3 relative">
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

        {/* More Recipes List */}
        <div className="md:w-1/3 bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium">More Recipes</h4>
            <span className="text-sm text-blue-600 font-medium">View All</span>
          </div>
          <div className="space-y-3">
            {moreRecipes.map((recipe, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-0">
                <div>
                  <p className="font-medium text-sm">{recipe.name}</p>
                  <p className="text-xs text-gray-500">{recipe.time}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-sm mr-1">★</span>
                  <span className="text-xs text-gray-600">{recipe.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}