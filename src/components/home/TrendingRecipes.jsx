"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function TrendingRecipes() {
  return (
    <section className="container mx-auto px-10 py-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-medium">Trending Recipes</h3>
        <Link
          href=""
          className="text-sm text-gray-600 hover:underline flex items-center gap-1"
        >
          VIEW ALL RECIPES <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Recipe Card 1 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/noodle.jpg"
              width={300}
              height={200}
              alt="Spicy Thai Noodles"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <FaHeart className="text-gray-300 hover:text-red-500 transition-colors" />
            </button>
          </div>
          <h4 className="mt-3 text-lg font-medium">Spicy Thai Noodles</h4>
          <p className="text-sm text-gray-600">By AMANDA SUAREZ</p>
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
              src="/toast.jpg"
              width={300}
              height={200}
              alt="Vegan Avocado Toast"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <FaHeart className="text-red-500" />
            </button>
          </div>
          <h4 className="mt-3 text-lg font-medium">Vegan Avocado Toast</h4>
          <p className="text-sm text-gray-600">By ALI IMTIAZ</p>
          <p className="text-sm text-gray-600">Total time: 24 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(32)</span>
          </div>
        </div>

        {/* Recipe Card 3 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/sandwhich.jpg"
              width={300}
              height={200}
              alt="Grilled Chicken Salad"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <FaHeart className="text-red-500" />
            </button>
          </div>
          <h4 className="mt-3 text-lg font-medium">Grilled Chicken Salad</h4>
          <p className="text-sm text-gray-600">By SAMIN NOSRAT</p>
          <p className="text-sm text-gray-600">Total time: 18 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(16)</span>
          </div>
        </div>

        {/* Recipe Card 4 */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/pancake.jpg"
              width={300}
              height={200}
              alt="Classic Pancakes"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
              <FaHeart className="text-gray-300 hover:text-red-500 transition-colors" />
            </button>
          </div>
          <h4 className="mt-3 text-lg font-medium">Classic Pancakes</h4>
          <p className="text-sm text-gray-600">By MASSIMO BOTTURA</p>
          <p className="text-sm text-gray-600">Total time: 32 mins</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">(24)</span>
          </div>
        </div>
      </div>
    </section>
  );
}