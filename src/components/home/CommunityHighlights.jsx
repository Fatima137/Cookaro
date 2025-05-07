"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaHeart, FaComment, FaShare, FaCircle } from "react-icons/fa";

export default function CommunityHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto rotate carousel unless user is hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  const highlights = [
    {
      id: 1,
      image: "/brownie.jpg",
      title: "Vegan Brownies",
      author: "@foodlover123",
      action: "posted a new review",
      likes: 128,
      comments: 45,
      shares: 12,
    },
    {
      id: 2,
      image: "/grill.jpg",
      title: "Grilled Chicken",
      author: "@chef_mary",
      action: "shared her masterpiece",
      likes: 256,
      comments: 78,
      shares: 34,
    },
    {
      id: 3,
      image: "/oil.jpg",
      title: "Cooking Oils",
      author: "🔥 Hot Topic:",
      action: "\"Best Cooking Oils for High Heat\"",
      likes: 312,
      comments: 102,
      shares: 56,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-100 py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Stylish heading with decorative elements */}
        <div className="relative mb-16 text-center">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-500"></div>
          <h3 className="text-4xl font-bold pt-6 inline-block relative">
            <span className="bg-clip-text text-orange-500" style={{ fontFamily:'MyCustomFont' }}>
              Community Highlights
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </h3>
        </div>

        {/* Showcase container with perspective effect */}
        <div 
          className="relative h-[500px] perspective-1000 mx-auto max-w-5xl"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute w-full h-full flex justify-center items-center">
            {/* 3D Carousel Effect */}
            {highlights.map((highlight, index) => {
              // Calculate positioning and animations
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + highlights.length) % highlights.length;
              const isNext = index === (activeIndex + 1) % highlights.length;
              
              let positionClass = "opacity-0 scale-75";
              if (isActive) positionClass = "z-30 opacity-100 scale-100";
              else if (isPrev) positionClass = "z-20 opacity-70 scale-85 -translate-x-3/4 -rotate-6";
              else if (isNext) positionClass = "z-20 opacity-70 scale-85 translate-x-3/4 rotate-6";
              
              return (
                <div 
                  key={highlight.id}
                  className={`absolute w-full max-w-lg transition-all duration-700 ease-in-out ${positionClass}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="group relative overflow-hidden shadow-2xl">
                    {/* Image container with animated gradient overlay */}
                    <div className="relative h-96">
                      <Image
                        src={highlight.image}
                        fill
                        alt={highlight.title}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-80 transition-opacity"></div>
                      
                      {/* Floating interactive elements */}
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <FaShare className="text-white w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Content with glass morphism effect */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-xl">
                        {/* Decorative accent line */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full"></div>
                        
                        <h4 className="text-xl font-bold text-white mb-1" style={{ fontFamily:'MyCustomFont' }}>{highlight.title}</h4>
                        <p className="text-sm text-gray-200 mb-3">
                          <span className="font-medium">{highlight.author}</span> {highlight.action}
                        </p>
                        
                        {/* Interaction metrics with animated hover effects */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center group/btn">
                              <div className="relative">
                                <FaHeart className="text-rose-400 group-hover/btn:scale-110 transition-transform mr-2" />
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                              </div>
                              <span>{highlight.likes}</span>
                            </div>
                            <div className="flex items-center group/btn">
                              <FaComment className="text-amber-400 group-hover/btn:scale-110 transition-transform mr-2" />
                              <span>{highlight.comments}</span>
                            </div>
                            <div className="flex items-center group/btn">
                              <FaShare className="text-blue-400 group-hover/btn:scale-110 transition-transform mr-2" />
                              <span>{highlight.shares}</span>
                            </div>
                          </div>
                          
                          {/* Pulse animation for active items */}
                          {isActive && (
                            <div className="relative flex items-center">
                              <span className="absolute animate-ping w-2 h-2 rounded-full bg-amber-400 opacity-75"></span>
                              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation dots */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-amber-400 w-8" 
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}