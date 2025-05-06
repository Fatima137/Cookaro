"use client";

import Image from "next/image";

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Quick Dinners",
      image: "/table.jpg",
      color: "from-blue-500/80"
    },
    {
      name: "Vegan Delights",
      image: "/vege.jpg",
      color: "from-green-500/80"
    },
    {
      name: "Summer Grilling",
      image: "/chef.jpg",
      color: "from-amber-500/80"
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Featured Categories
        </h3>
        <div className="hidden sm:flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            ←
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            →
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-hide">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-0 md:w-1/3 relative rounded-xl overflow-hidden snap-start cursor-pointer group"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent opacity-60`}></div>
              
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold">+</span>
                </div>
                
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-bold text-lg sm:text-xl drop-shadow-md">
                    {category.name}
                  </h4>
                  <p className="text-white/90 text-sm mt-1 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Discover amazing recipes in our {category.name.toLowerCase()} collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}