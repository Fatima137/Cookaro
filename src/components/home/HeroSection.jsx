"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle responsive detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Set up the event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Recipe data with slugs for detail pages
  const recipes = [
    {
      id: 1,
      title: "Session Margarita",
      image: "/mint.jpg",
      slug: "session-margarita"
    },
    {
      id: 2,
      title: "Taco Salad with Crunchy Chickpeas",
      image: "/chickpea.jpg",
      slug: "taco-salad-crunchy-chickpeas"
    },
    {
      id: 3,
      title: "Chocolate Dump-It Cake",
      image: "/cake.jpg",
      slug: "chocolate-dump-it-cake"
    }
  ];
  
  return (
    <section className="container mx-auto px-4 py-6 md:py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8">
        {/* Left Column - Shop Items */}
        <div className="w-full sm:w-auto sm:flex lg:block flex-row sm:justify-center gap-4 lg:w-64 lg:flex-col lg:gap-6 order-2 lg:order-1">
          <div className="relative w-full sm:w-64 mb-6 lg:mb-0">
            <div className="absolute top-4 left-4 text-sm italic text-gray-600 font-medium bg-white/70 px-2 py-1 rounded-md" style={{ fontFamily:'MyCustomFontItalic' }}>
              in the shop
            </div>
            <Image
              src="/glass.jpg" 
              width={250}
              height={250}
              alt="Stackable glasses"
              className="object-cover w-full aspect-square"
            />
            <div className="mt-3">
              <h3 className="text-lg font-medium " style={{ fontFamily:'MyCustomFontItalic' }}>Everything Under the Sun</h3>
              <p className="text-sm text-gray-600">Stackable glasses in sizes for sipping and socializing.</p>
              <Link href="" className="text-sm text-gray-500 flex items-center mt-2">
                SHOP NOW <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          
          <div className="relative w-full sm:w-64">
            <div className="absolute top-4 left-4 text-sm text-gray-600 italic font-medium bg-white/70 px-2 py-1 rounded-md" style={{ fontFamily:'MyCustomFontItalic' }}>
              in the shop
            </div>
            <Image
              src="/rack.jpg" 
              width={250}
              height={250}
              alt="Dish rack"
              className="object-cover w-full aspect-square"
            />
            <div className="mt-3">
              <h3 className="text-lg font-medium" style={{ fontFamily:'MyCustomFontItalic' }}>You Wash, I&apos;ll Dry</h3>
              <p className="text-sm text-gray-600">Your favorite dish rack, right this way.</p>
              <Link href="" className="text-sm text-gray-500 flex items-center mt-2">
                SHOP NOW <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Center Hero - Main Feature */}
        <div className="flex-1 w-full order-1 lg:order-2 mb-6 lg:mb-0">
          <div className="relative group">
            <Image
              src="/egg.jpg" 
              width={900}
              height={600}
              alt="Elegant table setting with food"
              className="w-full object-cover aspect-[4/3] md:aspect-[3/2]"
            />
            <div className={`${isMobile ? 'relative mt-4 bg-gray-50' : 'absolute bottom-6 left-6 bg-white opacity-0 group-hover:opacity-100'} p-4 md:p-6 rounded-lg shadow-md max-w-md transition-opacity duration-300`}>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Cook What You Love!</h2>
              <p className="text-xs md:text-sm text-gray-600 mb-4">
                Discover fresh flavors, trending recipes, and a passionate foodie community.
              </p>
              <button className="bg-gray-900 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm">
                Find a Recipe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center mt-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800" style={{ fontFamily:'MyCustomFontItalic' }}>25% Off Our Five Two Favorites</h2>
            <Image 
              src="/divider.jpeg" 
              width={120}
              height={20}
              alt=""
              className="mx-auto my-2"
            />
            <p className="text-base md:text-lg text-gray-700 max-w-2xl">
              From pans to prep tools, our collection is designed by cooks, for cooks—
              and it&apos;s all on sale (for a limited time).
            </p>
          </div>
        </div>

        {/* Right Column - Featured Recipes */}
        <div className="w-full lg:w-64 order-3">
          <h3 className="text-lg font-medium mb-4 text-center lg:text-left italic" style={{ fontFamily:'MyCustomFont' }}>Recipes We&apos;re Loving</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="group cursor-pointer">
                <Link href={`/recipes/${recipe.slug}`}>
                  <div className="transition-transform duration-300 transform hover:scale-105">
                    <Image
                      src={recipe.image} 
                      width={250}
                      height={180}
                      alt={recipe.title}
                      className="object-cover w-full aspect-video hover:shadow-md transition-shadow duration-300"
                    />
                    <p className="mt-2 text-base text-center group-hover:text-orange-500 transition-colors duration-300" style={{ fontFamily:'MyCustomFontItalic' }}>{recipe.title}</p>
                    <Image 
                      src="/di.jpeg" 
                      width={120}
                      height={20}
                      alt=""
                      className="mx-auto"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}