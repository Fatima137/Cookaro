import { useState } from "react";
import Image from "next/image";

const LatestStories = () => {
  const stories = [
    {
      id: 1,
      title: "5 Kitchen Hacks You Didn't Know",
      image: "/interior.jpg",
      description: "Unlock 5 genius kitchen hacks you can try today—from peeling garlic in seconds to keeping herbs fresh longer. Simple, smart, and totally doable at home!",
      category: "Tips & Tricks",
    },
    {
      id: 2,
      title: "How to Master Sourdough",
      image: "/dough.jpg",
      description: "Learn the art of sourdough—from creating your own starter to perfecting the crust. A step-by-step guide for beginners and home bakers ready to level up.",
      category: "Baking",
    },
    {
      id: 3,
      title: "Seasonal Ingredients Guide",
      image: "/capsicum.jpg",
      description: "Explore what's in season and how to make the most of it—our guide helps you pick the freshest ingredients for every time of year.",
      category: "Seasonal",
    },
    {
      id: 4,
      title: "Perfect Pasta: Italian Secrets",
      image: "/interior.jpg",
      description: "Master the art of al dente pasta with authentic Italian techniques passed down through generations.",
      category: "Techniques",
    },
    {
      id: 5,
      title: "Plant-Based Protein Sources",
      image: "/dough.jpg",
      description: "Discover delicious plant-based proteins that will satisfy even the most dedicated meat lovers.",
      category: "Nutrition",
    }
  ];
  
  // Split stories into featured cards (first 2) and list items (next 3)
  const featuredStories = stories.slice(0, 2);
  const listStories = stories.slice(2, 5);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r black">
        Latest Stories
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {featuredStories.map((story) => (
          <div key={story.id} className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image 
                src={story.image} 
                fill 
                alt={story.title} 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                {story.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors duration-300">
                {story.title}
              </h3>
              <p className="text-gray-600">{story.description}</p>
              <button className="mt-4 text-amber-600 font-medium hover:text-amber-800 transition-colors duration-300 flex items-center">
                Read more <span className="inline-block ml-1">&#8594;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-2xl p-6">
        <h3 className="text-xl font-medium mb-6">More Articles</h3>
        <div className="flex flex-col divide-y">
          {listStories.map((story) => (
            <div key={story.id} className="py-5 flex items-center gap-4 group">
              <div className="relative min-w-24 w-24 h-24 rounded-lg overflow-hidden">
                <Image 
                  src={story.image} 
                  fill 
                  alt={story.title} 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-amber-600 mb-1">{story.category}</div>
                <h4 className="font-medium group-hover:text-amber-600 transition-colors duration-300">
                  {story.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{story.description}</p>
              </div>
              <div className="ml-2">
                <span className="text-gray-400 group-hover:text-amber-600 transition-colors duration-300">&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestStories;