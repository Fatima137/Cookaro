"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function CookingStoriesPage() {
  // Refs for scroll functionality
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Hero section data - featured story
  const heroStory = {
    category: "CHEF JOURNEY",
    title: "From Home Cook to Michelin Star: Chef Sarah Kim's Remarkable Story",
    description: "How a passionate home cook pursued her dreams and became one of the most celebrated chefs in modern cuisine.",
    image: "/image/chef1.jpg",
    readTime: "8 min read"
  };

  // Latest stories sidebar
  const latestStories = [
    {
      category: "FOOD CULTURE",
      title: "The Revival of Ancient Grains: How Heritage Wheat is Changing Modern Baking",
      description: "Meet the farmers and bakers bringing forgotten grains back to our tables and why it matters for flavor and nutrition.",
      readTime: "6 min read"
    },
    {
      category: "RESTAURANT SPOTLIGHT",
      title: "Inside the World's Most Sustainable Restaurant: Zero-Waste Cooking at Its Finest",
      description: "This Copenhagen restaurant is redefining fine dining with their innovative approach to eliminating food waste.",
      readTime: "7 min read"
    },
    {
      category: "CULINARY TRADITIONS",
      title: "The Secret Recipes of Italian Grandmothers: Preserving a Disappearing Legacy",
      description: "How one food historian is documenting the unwritten recipes passed down through generations of Italian families.",
      readTime: "5 min read"
    }
  ];

  // Featured story collections
  const storyCollections = [
    {
      image: "/image/table.jpg",
      title: "The Modern Farm-to-Table Movement",
      category: "Sustainable Food",
      readTime: "10 min read"
    },
    {
      image: "/image/oreo.jpg",
      title: "The Art of Bean-to-Bar Chocolate",
      category: "Food Craft",
      readTime: "7 min read"
    },
    {
      image: "/image/riso.jpg", 
      title: "Exploring the World's Greatest Spice Markets",
      category: "Food Travel",
      readTime: "9 min read"
    },
    {
      image: "/image/glass.jpg",
      title: "Hidden Wine Regions Worth Discovering",
      category: "Beverage",
      readTime: "8 min read"
    },
    {
      image: "/image/oven2.jpg",
      title: "Inside the Home Kitchens of Famous Chefs",
      category: "Chef Stories",
      readTime: "6 min read"
    },
    {
      image: "/image/pizza.jpg",
      title: "The Science and Art of Food Photography",
      category: "Visual Arts",
      readTime: "5 min read"
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
    <div className="bg-[#F8FAF7] font-serif">
      {/* Header */}
      <header className="container mx-auto py-6 px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-[#0B0A08]">Culinary Stories</h1>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main featured story */}
          <div className="lg:w-1/2">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={heroStory.image}
                  width={700}
                  height={500}
                  alt={heroStory.title}
                  className="w-full object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-500"
                />
                {/* Read time badge */}
                <div className="absolute bottom-4 right-4 bg-[#F8FAF7] bg-opacity-90 text-[#0B0A08] px-3 py-1 text-sm rounded-full font-medium">
                  {heroStory.readTime}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[#383018] uppercase text-sm tracking-wider font-medium">{heroStory.category}</span>
                <h2 className="text-2xl font-serif text-[#0B0A08] mt-2 leading-tight group-hover:text-[#383018] transition-colors">{heroStory.title}</h2>
                <p className="text-[#383018] mt-2 text-base">{heroStory.description}</p>
              </div>
            </div>
          </div>

          {/* Latest stories sidebar */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif text-[#383018] italic">Latest Stories</h3>
              <div className="ml-2">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 6H1M1 6L6 1M1 6L6 11" stroke="#B3A88F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-8">
              {latestStories.map((story, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-[#B3A88F] pt-6' : ''} cursor-pointer group`}>
                  <span className="text-[#B3A88F] uppercase text-sm tracking-wider font-medium">{story.category}</span>
                  <div className="flex justify-between mt-2">
                    <h4 className="text-lg font-serif text-[#0B0A08] leading-tight group-hover:text-[#383018] transition-colors">{story.title}</h4>
                    <span className="text-[#383018] text-sm whitespace-nowrap">{story.readTime}</span>
                  </div>
                  <p className="text-[#383018] text-sm mt-2">{story.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider and Featured Collections Section */}
      <div className="w-full flex justify-center mt-12 mb-6">
        <div className="h-0.5 w-32 bg-[#E5E5E5] rounded-full"></div>
      </div>
      <section className="mb-12 relative mt-8">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383018] italic mb-6">Featured Collections</h2>
        
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
                {storyCollections.map((story, index) => (
                  <div key={index} className="flex-none w-64 group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={story.image}
                        width={260}
                        height={180}
                        alt={story.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Read time badge */}
                      <div className="absolute bottom-2 right-2 bg-[#F8FAF7] bg-opacity-90 text-[#0B0A08] px-2 py-1 text-xs">
                        {story.readTime}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-[#B3A88F] text-xs">{story.category}</span>
                      <h3 className="text-[#0B0A08] text-base font-medium mt-1 group-hover:text-[#383018] transition-colors">{story.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            {/* <div className="mt-4">
              <div className="flex gap-1">
                {storyCollections.map((_, index) => (
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

      {/* Story Categories Section */}
      {/* <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383018] italic mb-6">Browse by Topic</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Chef Profiles", "Food History", "Restaurant Stories", "Culinary Travel", "Food Science", "Kitchen Tips"].map((category, index) => (
              <div key={index} className="bg-[#B3A88F] hover:bg-[#383018] hover:text-[#F8FAF7] transition-colors rounded-lg p-4 text-center cursor-pointer">
                <span className="text-[#0B0A08] font-medium group-hover:text-[#F8FAF7]">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Editor's Picks Section */}
      <section className="mb-12 bg-[#B3A88F] py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#0B0A08] italic mb-8">Editor's Picks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Forgotten Cuisine of the American South",
                category: "CULINARY HERITAGE",
                image: "/image/rack.jpg",
                readTime: "12 min read",
                excerpt: "Exploring the rich, diverse culinary traditions that have been overshadowed in modern Southern cooking."
              },
              {
                title: "Foraging in the Digital Age: The New Generation of Wild Food Experts",
                category: "NEW TRADITIONS",
                image: "/image/plate.jpg",
                readTime: "9 min read",
                excerpt: "How social media has created a resurgence in the ancient practice of finding food in the wild."
              },
              {
                title: "The Psychology Behind Comfort Food: Why We Crave What We Crave",
                category: "FOOD SCIENCE",
                image: "/image/table.jpg",
                readTime: "7 min read",
                excerpt: "The fascinating science behind why certain foods bring us emotional comfort and security."
              }
            ].map((pick, index) => (
              <div key={index} className="bg-[#F8FAF7] shadow-sm group cursor-pointer">
                <div className="relative">
                  <Image
                    src={pick.image}
                    width={400}
                    height={240}
                    alt={pick.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#F8FAF7] px-3 py-1 rounded-full text-xs font-medium text-[#0B0A08]">
                    {pick.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-medium text-[#0B0A08] group-hover:text-[#383018] transition-colors">{pick.title}</h3>
                  <p className="text-[#383018] text-sm mt-2">{pick.excerpt}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#383018] text-xs">{pick.readTime}</span>
                    <span className="text-[#383018] text-sm font-medium group-hover:underline">Read More</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-[#F8FAF7] p-6 md:p-8 shadow-md">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif text-[#0B0A08] mb-2">Get Culinary Stories in Your Inbox</h3>
                <p className="text-[#383018]">Subscribe to our newsletter for weekly food stories, chef interviews, and cooking inspiration.</p>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 rounded-l border border-[#B3A88F] focus:outline-none focus:ring-2 focus:ring-[#383018]"
                  />
                  <button className="bg-[#383018] hover:bg-[#0B0A08] transition-colors text-[#F8FAF7] px-4 py-2 rounded-r font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}