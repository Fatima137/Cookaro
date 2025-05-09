"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function CookingCommunityPage() {
  // Refs for scroll functionality
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Hero section data - featured community member/story
  const heroCommunity = {
    category: "MEMBER SPOTLIGHT",
    title: "How Lisa's Virtual Cooking Club Connected 500 Home Chefs During Lockdown",
    description: "Meet the home baker who created a thriving online community that continues to inspire culinary creativity worldwide.",
    image: "/image/c1.jpg",
    memberSince: "Member since 2022"
  };

  // Latest community discussions
  const communityDiscussions = [
    {
      category: "TRENDING DISCUSSION",
      title: "What's your secret ingredient that makes everyone ask for the recipe?",
      description: "Over 230 members are sharing their unexpected cooking hacks and special additions that transform ordinary dishes.",
      engagement: "182 replies • 24 hours ago"
    },
    {
      category: "RECIPE EXCHANGE",
      title: "Monthly Heritage Recipe Swap: Grandmother's Classics Edition",
      description: "Share and discover treasured family recipes that have been passed down through generations.",
      engagement: "94 replies • 2 days ago"
    },
    {
      category: "COOKING CHALLENGE",
      title: "June's Mystery Basket Challenge: Create a Dish Using All 5 Ingredients",
      description: "This month's ingredients have been revealed! You have until June 20 to submit your creative culinary creations.",
      engagement: "156 participants • 5 days remaining"
    }
  ];

  // Community events/meetups
  const communityEvents = [
    {
      image: "/image/c2.jpg",
      title: "Farmer's Market Tour with Chef Rodriguez",
      location: "Portland, OR",
      category: "In-Person Event",
      date: "June 18, 2025"
    },
    {
      image: "/image/c3.jpg",
      title: "Virtual Pasta Making Masterclass",
      location: "Online",
      category: "Virtual Workshop",
      date: "June 20, 2025"
    },
    {
      image: "/image/c4.jpg", 
      title: "Monthly Cookbook Club: 'Mediterranean Fresh'",
      location: "Multiple Locations",
      category: "Book Discussion",
      date: "June 25, 2025"
    },
    {
      image: "/image/c5.jpg",
      title: "Community Pop-up Dinner: Summer Edition",
      location: "Chicago, IL",
      category: "Dining Experience",
      date: "July 2, 2025"
    },
    {
      image: "/image/c6.jpg",
      title: "Food Photography Workshop for Beginners",
      location: "Online",
      category: "Virtual Workshop",
      date: "July 8, 2025"
    },
    {
      image: "/image/c7.jpg",
      title: "Q&A with James Beard Award Winner Chef Lin",
      location: "Online",
      category: "Live Discussion",
      date: "July 15, 2025"
    }
  ];

  // Featured community members
  const communityMembers = [
    {
      name: "Michael Torres",
      specialty: "Bread Baking",
      location: "Austin, TX",
      image: "/image/ch2.jpg",
      contributions: "215 recipes shared"
    },
    {
      name: "Priya Sharma",
      specialty: "Indian Fusion",
      location: "Toronto, Canada",
      image: "/image/ch3.jpg",
      contributions: "42 tutorials created"  
    },
    {
      name: "David Chen",
      specialty: "Molecular Gastronomy",
      location: "Seattle, WA",
      image: "/image/ch4.jpg",
      contributions: "187 recipes shared"
    },
    {
      name: "Amara Johnson",
      specialty: "Soul Food",
      location: "Atlanta, GA",
      image: "/image/ch5.jpg",
      contributions: "28 events hosted"
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
      <header className="container mx-auto py-6 px-6 lg:px-8 border-b border-[#B3A88F]">
        <h1 className="text-4xl font-serif text-[#0B0A08]">Cooking Community</h1>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-8 mb-12 mt-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main featured community story */}
          <div className="lg:w-1/2">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={heroCommunity.image}
                  width={700}
                  height={500}
                  alt={heroCommunity.title}
                  className="w-full object-cover aspect-[16/9] rounded group-hover:scale-105 transition-transform duration-500"
                />
                {/* Member badge */}
                <div className="absolute bottom-4 right-4 bg-[#383O1B] bg-opacity-90 text-[#F8FAF7] px-3 py-1 text-sm rounded-full font-medium">
                  {heroCommunity.memberSince}
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[#383O1B] uppercase text-sm tracking-wider font-medium">{heroCommunity.category}</span>
                <h2 className="text-2xl font-serif text-[#0B0A08] mt-2 leading-tight group-hover:text-[#383O1B] transition-colors">{heroCommunity.title}</h2>
                <p className="text-[#383O1B] mt-2 text-base">{heroCommunity.description}</p>
              </div>
            </div>
          </div>

          {/* Community discussions sidebar */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 bg-[#F8FAF7] p-6 border-l border-[#B3A88F]">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif text-[#383O1B] italic">Active Discussions</h3>
              <div className="ml-2">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 6H1M1 6L6 1M1 6L6 11" stroke="#383O1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-8">
              {communityDiscussions.map((discussion, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-[#B3A88F] pt-6' : ''} cursor-pointer group`}>
                  <span className="text-[#383O1B] uppercase text-sm tracking-wider font-medium">{discussion.category}</span>
                  <div className="flex justify-between mt-2">
                    <h4 className="text-lg font-serif text-[#0B0A08] leading-tight group-hover:text-[#383O1B] transition-colors">{discussion.title}</h4>
                  </div>
                  <p className="text-[#383O1B] text-sm mt-2">{discussion.description}</p>
                  <div className="mt-3">
                    <span className="text-[#0B0A08] text-xs font-medium">{discussion.engagement}</span>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <button className="text-[#383O1B] font-medium hover:text-[#0B0A08] transition-colors flex items-center">
                  View All Community Discussions
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="mb-12 relative bg-[#B3A88F] py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#0B0A08] italic mb-6">Upcoming Community Events</h2>
        
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
                {communityEvents.map((event, index) => (
                  <div key={index} className="flex-none w-64 group cursor-pointer">
                    <div className="relative overflow-hidden rounded">
                      <Image
                        src={event.image}
                        width={260}
                        height={180}
                        alt={event.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category badge */}
                      <div className="absolute top-2 left-2 bg-[#383O1B] bg-opacity-90 text-[#F8FAF7] px-2 py-1 text-xs rounded-full">
                        {event.category}
                      </div>
                      {/* Date badge */}
                      <div className="absolute bottom-2 right-2 bg-[#F8FAF7] bg-opacity-90 text-[#0B0A08] px-2 py-1 text-xs rounded-full font-medium">
                        {event.date}
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-[#F8FAF7]">
                      <span className="text-[#383O1B] text-xs">{event.location}</span>
                      <h3 className="text-[#0B0A08] text-base font-medium mt-1 group-hover:text-[#383O1B] transition-colors">{event.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-4">
              <div className="flex gap-1">
                {communityEvents.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full flex-grow ${index === 0 ? 'bg-[#0B0A08]' : 'bg-[#F8FAF7]'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-[#0B0A08] hover:bg-[#383O1B] text-[#F8FAF7] px-6 py-2 rounded-full font-medium transition-colors">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured Community Members */}
      <section className="mb-12 bg-[#F8FAF7] py-10 border-y border-[#B3A88F]">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383O1B] italic mb-8">Featured Community Members</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMembers.map((member, index) => (
              <div key={index} className="bg-[#F8FAF7] rounded-lg overflow-hidden shadow-sm border border-[#B3A88F] group cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src={member.image}
                    width={300}
                    height={300}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-[#0B0A08]">{member.name}</h3>
                  <p className="text-[#383O1B] font-medium text-sm mt-1">{member.specialty}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-[#383O1B]">
                    <span>{member.location}</span>
                    <span>{member.contributions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Categories Section */}
      <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383O1B] italic mb-6">Community Groups</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Baking Club", "Plant-Based", "Grilling Masters", "Weeknight Cooks", "Culinary Students", "Recipe Testing"].map((category, index) => (
              <div key={index} className="bg-[#B3A88F] hover:bg-[#383O1B] hover:text-[#F8FAF7] transition-colors rounded-lg p-4 text-center cursor-pointer">
                <span className="text-[#0B0A08] font-medium group-hover:text-[#F8FAF7]">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-[#B3A88F] rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif text-[#0B0A08] mb-2">Our Growing Community</h2>
              <p className="text-[#383O1B]">Join thousands of passionate home cooks sharing recipes and culinary knowledge</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "15,428", label: "Community Members" },
                { value: "32,851", label: "Shared Recipes" },
                { value: "1,245", label: "Monthly Events" },
                { value: "8,752", label: "Active Discussions" }
              ].map((stat, index) => (
                <div key={index} className="bg-[#F8FAF7] p-4 rounded-lg">
                  <p className="text-3xl font-bold text-[#0B0A08]">{stat.value}</p>
                  <p className="text-[#383O1B] text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-[#0B0A08] text-[#F8FAF7] rounded-lg p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif mb-2">Join Our Cooking Community Today</h3>
                <p className="text-[#B3A88F]">Connect with fellow food enthusiasts, share recipes, participate in challenges, and attend exclusive events.</p>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0 text-center">
                <button className="bg-[#F8FAF7] text-[#0B0A08] hover:bg-[#B3A88F] transition-colors px-6 py-3 rounded font-medium">
                  Create Free Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}