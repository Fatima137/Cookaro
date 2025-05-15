"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function CookingVideoHomepage() {
  // Refs for scroll functionality
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Hero section data - featured cooking video
  const heroVideo = {
    category: "CHEF SPOTLIGHT",
    title: "Master the Art of French Pastry with Chef Marie Laurent",
    description: "Go behind the scenes with award-winning pastry chef Marie Laurent as she reveals her secrets for perfect croissants.",
    image: "/image/pound-cake.jpg",
    duration: "18:45"
  };

  // Latest video sidebar
  const latestVideos = [
    {
      category: "QUICK RECIPES",
      title: "15-Minute Weeknight Dinners That Actually Impress",
      description: "Chef Tom shows three restaurant-quality meals you can make in just 15 minutes with pantry staples.",
      duration: "12:24"
    },
    {
      category: "TECHNIQUE MASTERCLASS",
      title: "Perfect Your Knife Skills: Essential Cutting Techniques Every Home Chef Should Know",
      description: "Learn professional knife techniques that will revolutionize your prep work and cooking efficiency.",
      duration: "24:30"
    },
    {
      category: "BAKING BASICS",
      title: "Sourdough 101: Creating and Maintaining Your Starter",
      description: "Everything you need to know about creating, feeding, and baking with your own sourdough starter.",
      duration: "15:45"
    }
  ];

  // Featured cooking video series
  const cookingVideoSeries = [
    {
      image: "/image/pasta-making.jpg",
      title: "Handmade Pasta From Scratch",
      category: "Italian Cooking",
      duration: "22:15"
    },
    {
      image: "/image/sushi.jpg",
      title: "Perfect Sushi Rolling Technique",
      category: "Japanese Cuisine",
      duration: "14:30"
    },
    {
      image: "/image/mixing.jpg", 
      title: "Summer Cocktails Masterclass",
      category: "Mixology",
      duration: "18:05"
    },
    {
      image: "/image/breadb.jpg",
      title: "Artisan Bread Fundamentals",
      category: "Baking",
      duration: "28:45"
    },
    {
      image: "/image/steak.jpg",
      title: "How to Cook the Perfect Steak",
      category: "Meat Preparation",
      duration: "16:20"
    },
    {
      image: "/image/vegi.jpg",
      title: "Creative Vegetable Carving",
      category: "Food Styling",
      duration: "12:10"
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
    <div className="bg-[#F8FAF7] font-serif mt-8 py-16">
      {/* Header */}
      <header className="container mx-auto py-6 px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-[#0B0A08]">Cooking Videos</h1>
      </header>

      {/* Hero Section - Reduced size */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main featured video */}
          <div className="lg:w-1/2">
            <div className="relative group cursor-pointer">
              <div className="relative">
                <Image
                  src={heroVideo.image}
                  width={700}
                  height={500}
                  alt={heroVideo.title}
                  className="w-full object-cover aspect-[16/9]"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center rounded">
                  <div className="bg-[#F8FAF7] bg-opacity-80 p-4 rounded-lg shadow-lg transform transition-transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="#0B0A08" />
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-[#0B0A08] bg-opacity-70 text-[#F8FAF7] px-2 py-1 text-sm">
                  {heroVideo.duration}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[#383018] uppercase text-sm tracking-wider font-medium">{heroVideo.category}</span>
                <h2 className="text-2xl font-serif text-[#0B0A08] mt-2 leading-tight">{heroVideo.title}</h2>
                <p className="text-[#383018] mt-2 text-base">{heroVideo.description}</p>
              </div>
            </div>
          </div>

          {/* Latest videos sidebar */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif text-[#383018] italic">Latest Videos</h3>
              <div className="ml-2">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 6H1M1 6L6 1M1 6L6 11" stroke="#B3A88F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-8">
              {latestVideos.map((video, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-[#B3A88F] pt-6' : ''} cursor-pointer group`}>
                  <span className="text-[#B3A88F] uppercase text-sm tracking-wider font-medium">{video.category}</span>
                  <div className="flex justify-between mt-2">
                    <h4 className="text-lg font-serif text-[#0B0A08] leading-tight group-hover:text-[#383018] transition-colors">{video.title}</h4>
                    <span className="text-[#383018] text-sm whitespace-nowrap">{video.duration}</span>
                  </div>
                  <p className="text-[#383018] text-sm mt-2">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider and Video Series Section */}
      <div className="w-full flex justify-center mt-12 mb-6">
        <div className="h-0.5 w-32 bg-[#E5E5E5] rounded-full"></div>
      </div>
      <section className="relative mt-8">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383018] italic mb-6">Featured Cooking Series</h2>
        
          {/* Scroll Controls and Content */}
          <div className="relative">
            {showLeftScroll && (
              <button 
                onClick={scrollLeft}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#F8FAF7] bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#383018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M9 6L15 12L9 18" stroke="#383018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex gap-6 pb-4" style={{ minWidth: 'min-content' }}>
                {cookingVideoSeries.map((video, index) => (
                  <div key={index} className="flex-none w-64 group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={video.image}
                        width={260}
                        height={180}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-[#F8FAF7] bg-opacity-80 rounded-full p-3 shadow-lg">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="#0B0A08" />
                          </svg>
                        </div>s
                      </div>
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-[#0B0A08] bg-opacity-70 text-[#F8FAF7] px-2 py-1 text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-[#B3A88F] text-xs">{video.category}</span>
                      <h3 className="text-[#0B0A08] text-base font-medium mt-1 group-hover:text-[#383018] transition-colors">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            {/* <div className="mt-4">
              <div className="flex gap-1">
                {cookingVideoSeries.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full flex-grow ${index === 0 ? 'bg-[#0B0A08]' : 'bg-[#B3A88F]'}`}
                  ></div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Video Categories Section */}
      {/* <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383018] italic mb-6">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Quick Meals", "Baking", "International", "Desserts", "Vegetarian", "Techniques"].map((category, index) => (
              <div key={index} className="bg-[#B3A88F] hover:bg-[#383018] hover:text-[#F8FAF7] transition-colors p-4 text-center cursor-pointer">
                <span className="text-[#0B0A08] font-medium group-hover:text-[#F8FAF7]">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}