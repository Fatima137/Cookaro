"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function FeaturedCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto rotate carousel unless user is hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  const categories = [
    {
      name: "Quick Dinners",
      image: "/table.jpg",
      description: "Meals ready in 30 minutes or less"
    },
    {
      name: "Vegan Delights",
      image: "/vege.jpg",
      description: "Plant-based recipes that satisfy"
    },
    {
      name: "Summer Grilling",
      image: "/chef.jpg",
      description: "Perfect ideas for outdoor cooking"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading with higher z-index and more prominent position */}
        <div className="relative mb-20 text-center z-50">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-px bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200"></div>
          <h2 className="text-4xl font-light pt-6 inline-block relative">
            <span className="text-gray-800" style={{ fontFamily:'MyCustomFont' }}>Featured</span>
            <span className="font-medium text-gray-900" style={{ fontFamily:'MyCustomFont' }}> Categories</span>
            <div className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </h2>
        </div>
        
        {/* Carousel container pushed down with reduced height */}
        <div 
          className="relative h-[400px] perspective-1000 mx-auto max-w-5xl mt-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Carousel items */}
          <div className="absolute w-full h-full flex justify-center items-center">
            {categories.map((category, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + categories.length) % categories.length;
              const isNext = index === (activeIndex + 1) % categories.length;
              
              let positionClass = "opacity-0 scale-75";
              if (isActive) positionClass = "z-30 opacity-100 scale-100";
              else if (isPrev) positionClass = "z-20 opacity-70 scale-85 -translate-x-3/4 -rotate-6";
              else if (isNext) positionClass = "z-20 opacity-70 scale-85 translate-x-3/4 rotate-6";
              
              return (
                <div 
                  key={index}
                  className={`absolute w-full max-w-lg transition-all duration-700 ease-in-out ${positionClass}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="group relative overflow-hidden shadow-2xl bg-white">
                    {/* Image container */}
                    <div className="relative h-72">
                      <Image
                        src={category.image}
                        fill
                        alt={category.name}
                        className="object-cover transform transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Explore button */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 rotate-45 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500">
                        <span className="text-white text-lg font-semibold drop-shadow-lg">Explore</span>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="relative p-6 bg-white">
                      {/* Decorative accent line */}
                      <div className="absolute -top-px left-8 w-16 h-1 bg-gray-200 rounded-full"></div>
                      
                      <h4 className="text-xl font-medium text-gray-800 mb-2" style={{ fontFamily:'MyCustomFont' }}>{category.name}</h4>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      
                      {/* Interactive button */}
                      <div className="flex items-center justify-between">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        <button className="w-10 h-10 rounded-full bg-gray-100 shadow-md flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                          <span className="text-gray-600">→</span>
                        </button>
                      </div>
                      
                      {/* Pulse animation for active items */}
                      {isActive && (
                        <div className="absolute top-6 right-6 flex items-center">
                          <span className="absolute animate-ping w-2 h-2 rounded-full bg-gray-400 opacity-75"></span>
                          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                        </div>
                      )}
                    </div>
                    
                    {/* Bottom decorative element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation dots */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-gray-800 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 sm:px-10 z-40 opacity-0 hover:opacity-100 transition-opacity">
            <button 
              onClick={() => setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 group"
            >
              <span className="text-gray-600 group-hover:text-gray-800 transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
            </button>
            <button 
              onClick={() => setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 group"
            >
              <span className="text-gray-600 group-hover:text-gray-800 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}