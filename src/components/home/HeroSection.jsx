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
      image: "/image/mint.jpg",
      slug: "session-margarita"
    },
    {
      id: 2,
      title: "Taco Salad with Crunchy Chickpeas",
      image: "/image/chickpea.jpg",
      slug: "taco-salad-crunchy-chickpeas"
    },
    {
      id: 3,
      title: "Chocolate Dump-It Cake",
      image: "/image/cake.jpg",
      slug: "chocolate-dump-it-cake"
    }
  ];
  
  // Latest stories data (for left column)
  const latestStories = [
    {
      category: "FOOD CULTURE",
      title: "The Revival of Ancient Grains: How Heritage Wheat is Changing Modern Baking",
      description: "This restaurant is redefining innovative approach to eliminating food waste.",
      readTime: "6 min read"
    },
    {
      category: "RESTAURANT SPOTLIGHT",
      title: "Inside the World's Most Sustainable Restaurant: Zero-Waste Cooking at Its Finest",
      description: "This Copenhagen restaurant is redefining fine dining with their innovative approach to eliminating food waste.",
      readTime: "7 min read"
    }
  ];
  
  return (
    <section className="pt-2 container mx-auto px-4 pb-8">
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
        {/* Left Column - Two Stories and Shop */}
        <div className="w-full lg:w-64 flex flex-col h-full order-2 lg:order-1 gap-4">
          {/* Latest Stories Heading */}
          <h3 className="text-lg font-medium text-center lg:text-left italic text-[#0B0A08] mb-3" style={{ fontFamily:'MyCustomFont' }}>Latest Stories</h3>
          {/* Story Card 1 */}
          <div className="group cursor-pointer bg-[#F8FAF7] border border-[#B3A88F] overflow-hidden transition-shadow hover:shadow-md">
            <div className="h-28 w-full overflow-hidden flex items-center justify-center bg-[#ECECEC]">
              <Image
                src="/image/chef1.jpg"
                width={250}
                height={110}
                alt={latestStories[0].title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <span className="text-[#B3A88F] uppercase text-xs tracking-wider font-medium">{latestStories[0].category}</span>
              <h4 className="text-base font-serif text-[#0B0A08] mt-1 leading-tight group-hover:text-[#38301B] transition-colors">{latestStories[0].title}</h4>
              <p className="text-xs text-[#38301B]">{latestStories[0].description}</p>
              <span className="text-[#38301B] text-xs mt-1 block">{latestStories[0].readTime}</span>
            </div>
          </div>
          {/* Divider */}
          <Image 
            src="/image/divid.png" 
            width={120}
            height={20}
            alt=""
            className="mx-auto"
            style={{marginTop: 0, marginBottom: 0}}
          />
          {/* Shop Heading */}
          <h3 className="text-lg font-medium text-center lg:text-left italic text-[#0B0A08]" style={{ fontFamily:'MyCustomFont' }}>Shop</h3>
          {/* Shop Card */}
          <div className="group cursor-pointer bg-[#F8FAF7] border border-[#B3A88F] overflow-hidden transition-shadow hover:shadow-md">
            <div className="h-28 w-full overflow-hidden flex items-center justify-center bg-[#ECECEC] relative">
              <div className="absolute top-2 left-2 text-xs italic font-medium bg-white/80 text-[#38301B] px-2 py-1 rounded-md z-10" style={{ fontFamily:'MyCustomFontItalic' }}>
                in the shop
              </div>
              <Image
                src="/image/glass.jpg"
                width={250}
                height={110}
                alt="Stackable glasses"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <h3 className="text-base font-medium text-[#0B0A08]" style={{ fontFamily:'MyCustomFontItalic' }}>Everything Under the Sun</h3>
              <p className="text-xs text-[#38301B]">Stackable glasses in sizes for sipping and socializing.</p>
              <Link href="" className="text-xs text-[#B3A88F] flex items-center mt-1 hover:text-[#38301B]">
                SHOP NOW <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          <Image 
            src="/image/divid.png" 
            width={120}
            height={20}
            alt=""
            className="mx-auto"
            style={{marginTop: 0, marginBottom: 0}}
          />
        </div>
        

        {/* Center Hero - Main Feature */}
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative group">
            <Image
              src="/image/egg.jpg" 
              width={900}
              height={600}
              alt="Elegant table setting with food"
              className="w-full object-cover aspect-[4/3] md:aspect-[3/2] border border-[#B3A88F]"
            />

          </div>
          <div className="flex flex-col items-center text-center mt-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0B0A08]" style={{ fontFamily:'MyCustomFontItalic' }}>25% Off Our Five Two Favorites</h2>
            <Image 
              src="/image/divider.jpeg" 
              width={120}
              height={20}
              alt=""
              className="mx-auto my-2"
            />
            <p className="text-base md:text-lg text-[#38301B] max-w-2xl">
              From pans to prep tools, our collection is designed by cooks, for cooks—
              and it&apos;s all on sale (for a limited time).
            </p>
          </div>
        </div>

        

        {/* Right Column - Featured Recipes */}
        <div className="w-full lg:w-64 flex flex-col h-full order-3">
          <h3 className="text-lg font-medium mb-4 text-center lg:text-left italic text-[#0B0A08]" style={{ fontFamily:'MyCustomFont' }}>Latest Recipes</h3>
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
                      className="object-cover w-full aspect-video hover:shadow-md transition-shadow duration-300 border border-[#B3A88F]"
                    />
                    <p className="mt-2 text-base text-center group-hover:text-[#38301B] transition-colors duration-300 text-[#38301B]" style={{ fontFamily:'MyCustomFontItalic' }}>{recipe.title}</p>
                    <Image 
                      src="/image/divid.png" 
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