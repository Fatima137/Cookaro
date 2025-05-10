"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function FoodHomepage() {
  // Refs for scroll functionality
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Hero section data
  const heroArticle = {
    category: "PRODUCT REVIEW",
    title: "I Found a Store-Bought Hummus I Actually Love—Here's What to Eat It With",
    description: "Tired of bad store-bought hummus? This new collab from Graza and Ithaca might just change your mind.",
    image: "/image/cros.jpg"
  };

  // Latest sidebar articles
  const latestArticles = [
    {
      category: "QUICK AND EASY",
      title: "34 Easy Memorial Day Recipes for Summer Celebrating",
      description: "Fire up the grill and break out the picnic blankets: these crowd-pleasing Memorial Day dishes are simple to make and guaranteed to impress."
    },
    {
      category: "HEY THERE, IT'S AMANDA",
      title: "From Florida Zucchini to Jersey Asparagus: Spring Is (Finally) Doing Its Thing",
      description: "Wherever you are, it's time to eat what's in season now."
    },
    {
      category: "GRADUATION GIFTS",
      title: "Best Gifts for College Grads, According to Recent Graduates",
      description: "A curated list of actually great graduation gifts, according to recent grads themselves."
    }
  ];

  // Newest recipes data
  const newestRecipes = [
    {
      image: "/image/cocktails.jpg",
      title: "Blood and Sand",
      category: "Cocktails"
    },
    {
      image: "/image/chickpea.jpg",
      title: "Simple Fiddlehead Ferns",
      category: "Spring Vegetables" 
    },
    {
      image: "/image/glass.jpg", 
      title: "Chartreuse Margarita",
      category: "Cocktails"
    },
    {
      image: "/image/corn.jpg",
      title: "Quick Pickled Vegetables",
      category: "Preserves"
    },
    {
      image: "/image/cof.jpg",
      title: "Spring Pasta Primavera",
      category: "Main Course"
    },
    {
      image: "/image/salad.jpg",
      title: "Strawberry Arugula Salad",
      category: "Salads" 
    }
  ];

  // Handle scrolling
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Initialize scroll state
  useEffect(() => {
    if (scrollContainerRef.current) {
      handleScroll();
      const container = scrollContainerRef.current;
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F8FAF7] font-serif mb-8">
      {/* Header */}
      <header className="container mx-auto py-6 px-6 lg:px-8 border-b border-[#B3A88F]">
        <h1 className="text-4xl font-serif text-[#0B0A08]">Food</h1>
      </header>

      {/* Hero Section - Reduced size */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main article - smaller width */}
          <div className="lg:w-1/2">
            <div className="relative">
              <Image
                src={heroArticle.image}
                width={700}
                height={500}
                alt={heroArticle.title}
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="mt-4">
                <span className="text-[#383O1B] uppercase text-sm tracking-wider font-medium">{heroArticle.category}</span>
                <h2 className="text-2xl font-serif text-[#0B0A08] mt-2 leading-tight">{heroArticle.title}</h2>
                <p className="text-[#383O1B] mt-2 text-base">{heroArticle.description}</p>
              </div>
            </div>
          </div>

          {/* Latest sidebar - proportional to main article size */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 bg-[#F8FAF7] p-6 border-l border-[#B3A88F]">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif text-[#383O1B] italic">Latest</h3>
              <div className="ml-2">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 6H1M1 6L6 1M1 6L6 11" stroke="#383O1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-8">
              {latestArticles.map((article, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-[#B3A88F] pt-6' : ''}`}>
                  <span className="text-[#383O1B] uppercase text-sm tracking-wider font-medium">{article.category}</span>
                  <h4 className="text-lg font-serif text-[#0B0A08] mt-2 leading-tight">{article.title}</h4>
                  <p className="text-[#383O1B] text-sm mt-2">{article.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newest Recipes Section - Using same margins as top section */}
      <section className="relative bg-[#B3A88F] py-8 mt-8">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#0B0A08] italic mb-6">Our Newest Recipes</h2>
        
          {/* Scroll Controls and Content */}
          <div className="relative">
            {showLeftScroll && (
              <button 
                onClick={scrollLeft}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#F8FAF7] bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#0B0A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            
            {showRightScroll && (
              <button 
                onClick={scrollRight}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#F8FAF7] bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="#0B0A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            
            {/* Scrollable Container - Aligned with heading */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex gap-6 pb-4" style={{ minWidth: 'min-content' }}>
                {newestRecipes.map((recipe, index) => (
                  <div key={index} className="flex-none w-64 group cursor-pointer">
                    <div className="relative overflow-hidden rounded bg-[#F8FAF7] p-2">
                      <Image
                        src={recipe.image}
                        width={260}
                        height={180}
                        alt={recipe.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 p-2 bg-[#F8FAF7]">
                      <span className="text-[#383O1B] text-xs uppercase tracking-wider">{recipe.category}</span>
                      <h3 className="text-[#0B0A08] text-base font-medium group-hover:text-[#383O1B] transition-colors">{recipe.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            {/* <div className="mt-4">
              <div className="flex gap-1">
                {newestRecipes.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full flex-grow ${index === 0 ? 'bg-[#0B0A08]' : 'bg-[#F8FAF7]'}`}
                  ></div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}