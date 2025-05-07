"use client";

import Image from "next/image";
import { GiChefToque, GiKnifeFork, GiSaucepan } from "react-icons/gi";

export default function ProKitchenSection() {
  return (
    <section className="">
      <div className="bg-white px-6 py-12 lg:px-16 lg:py-16 shadow-lg border border-gray-100 overflow-hidden">
        {/* Header with custom icons */}
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="p-4 bg-amber-100 rounded-full">
              <GiChefToque className="text-amber-600 text-2xl" />
            </div>
            <div className="p-4 bg-red-100 rounded-full">
              <GiKnifeFork className="text-red-600 text-2xl" />
            </div>
            <div className="p-4 bg-emerald-100 rounded-full">
              <GiSaucepan className="text-emerald-600 text-2xl" />
            </div>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily:'MyCustomFont' }}>
            Professional <span className="text-amber-600" style={{ fontFamily:'MyCustomFont' }}>Kitchen Secrets</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elevate your cooking with techniques from world-class chefs
          </p>
        </div>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Knife Skills Card */}
          <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative h-60">
              <Image
                src="/knife.jpg"
                fill
                alt="Knife Skills"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
                <span className="text-xs font-medium text-gray-800">ESSENTIAL</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-amber-100 flex items-center justify-center mr-3">
                  <GiKnifeFork className="text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily:'MyCustomFont' }}>Knife Mastery</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Precision cutting techniques that save time and improve results
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-700">45 min</span>
                <button className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">
                  Learn Now →
                </button>
              </div>
            </div>
          </div>
          
          {/* Pasta Card */}
          <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative h-60">
              <Image
                src="/ramen.jpg"
                fill
                alt="Pasta Techniques"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
                <span className="text-xs font-medium text-gray-800">ITALIAN</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <GiSaucepan className="text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily:'MyCustomFont' }}>Pasta Perfection</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                From dough preparation to al dente cooking every time
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-700">1h 10min</span>
                <button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
                  Learn Now →
                </button>
              </div>
            </div>
          </div>
          
          {/* Plating Card */}
          <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative h-60">
              <Image
                src="/plate.jpg"
                fill
                alt="Plating Techniques"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
                <span className="text-xs font-medium text-gray-800">ARTISTRY</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <GiChefToque className="text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900" style={{ fontFamily:'MyCustomFont' }}>Plating Design</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Transform your dishes into restaurant-quality presentations
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-700">35 min</span>
                <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                  Learn Now →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white font-medium px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg">
            View All Chef Techniques
          </button>
        </div>
      </div>
    </section>
  );
}