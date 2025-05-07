'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function VideosPage() {
  const router = useRouter();
  
  const videoCategories = [
    {
      title: "Featured Videos",
      count: 245,
      videos: [
        {
          id: 1,
          title: "How to Make Pork Dumplings from Scratch | It's Fine | Food52",
          thumbnail: "/images/videos/pork-dumplings.jpg",
          chef: "Tess Gigone",
          duration: "9 min",
          description: "Welcome to It's Fine, our series where home cook Tess Gigone invites you into her childhood kitchen to watch her make iconic dishes."
        },
        {
          id: 2,
          title: "The Secret Behind Soothr's Signature Dumplings | Yes, Chef | Food52",
          thumbnail: "/images/videos/signature-dumplings.jpg",
          chef: "Chef Nate",
          duration: "7 min",
          description: "Learn the secret techniques behind restaurant-quality dumplings with perfect folds and delicious filling."
        },
        {
          id: 3,
          title: "Nea's Swedish Dumle Cookies | What's For Fika? | Food52", 
          thumbnail: "/images/videos/swedish-cookies.jpg",
          chef: "Nea Petersson",
          duration: "6 min",
          description: "Discover the perfect Swedish cookies for your next fika break with this traditional recipe."
        },
        {
          id: 4,
          title: "Tess Makes Coq au Vin for the First Time | It's Fine | Food52",
          thumbnail: "/images/videos/coq-au-vin.jpg",
          chef: "Tess Gigone",
          duration: "12 min",
          description: "Join Tess as she tackles this classic French dish for the first time with delicious results."
        }
      ]
    },
    {
      title: "Recipe Drop",
      count: 83,
      videos: [
        {
          id: 5,
          title: "How to Make Sopa de Res y Fideos | Recipe Drop | Food52",
          thumbnail: "/images/videos/sopa-de-res.jpg",
          chef: "Miguel Rodriguez",
          duration: "10 min",
          description: "Learn how to make this hearty beef and noodle soup that's perfect for cold weather."
        },
        {
          id: 6,
          title: "Zucchini and Feta Pasta with Za'atar Pangrattato | Recipe Drop | Food52",
          thumbnail: "/images/videos/zucchini-pasta.jpg",
          chef: "Drew & Gavin",
          duration: "8 min",
          description: "A simple pasta dish elevated with Mediterranean flavors and crunchy breadcrumbs."
        },
        {
          id: 7,
          title: "A Quick & Hearty White Bean & Sausage Soup | Recipe Drop | Food52",
          thumbnail: "/images/videos/bean-soup.jpg",
          chef: "Julia Turshen",
          duration: "7 min",
          description: "This comforting soup comes together in under 30 minutes with pantry staples."
        },
        {
          id: 8,
          title: "How to Make Lake Ice Cream | Recipe Drop | Food52",
          thumbnail: "/images/videos/ice-cream.jpg",
          chef: "Rick Martinez",
          duration: "15 min",
          description: "Learn the technique for making this uniquely textured ice cream that's creamy and refreshing."
        }
      ]
    },
    {
      title: "Yes, Chef",
      count: 9,
      videos: [
        {
          id: 9,
          title: "Watch Chef Ed Szymanski Make Quail Toast | Yes, Chef | Food52",
          thumbnail: "/images/videos/quail-toast.jpg",
          chef: "Ed Szymanski",
          duration: "11 min",
          description: "Chef Ed from Dame restaurant shares his signature dish that combines game bird with fine dining technique."
        },
        {
          id: 10,
          title: "Renee Erickson's Melted Anchovy Toast | Yes, Chef | Food52",
          thumbnail: "/images/videos/anchovy-toast.jpg",
          chef: "Renee Erickson",
          duration: "6 min",
          description: "Seattle chef Renee Erickson demonstrates her famous savory toast that's full of umami flavor."
        },
        {
          id: 11,
          title: "Homemade Trofie Pasta with Pesto | Yes, Chef | Food52",
          thumbnail: "/images/videos/trofie-pasta.jpg",
          chef: "Evan Funke",
          duration: "14 min",
          description: "Master pasta maker Evan Funke shows how to shape traditional Ligurian trofie by hand with the perfect pesto."
        },
        {
          id: 12,
          title: "Our Favorite Crab Fried Rice | Yes, Chef | Food52",
          thumbnail: "/images/videos/crab-rice.jpg",
          chef: "Lucas Sin",
          duration: "9 min",
          description: "Chef Lucas shares his wok techniques for making the ultimate seafood fried rice with fresh crab."
        }
      ]
    },
    {
      title: "Let Me Show You",
      count: 4,
      videos: [
        {
          id: 13,
          title: "Let Me Show You: Herbs | Food52",
          thumbnail: "/images/videos/herbs.jpg",
          chef: "Harold Villarosa",
          duration: "5 min",
          description: "Chef Harold breaks down everything you need to know about selecting, storing, and using fresh herbs."
        },
        {
          id: 14,
          title: "Let Me Show You: Pans | Food52",
          thumbnail: "/images/videos/pans.jpg",
          chef: "Harold Villarosa",
          duration: "7 min",
          description: "A comprehensive guide to choosing the right pan for every cooking technique."
        },
        {
          id: 15,
          title: "Let Me Show You: Salt | Food52",
          thumbnail: "/images/videos/salt.jpg",
          chef: "Harold Villarosa",
          duration: "6 min",
          description: "Discover the different types of salt and when to use each one for maximum flavor."
        },
        {
          id: 16,
          title: "Let Me Show You: Knives | Food52",
          thumbnail: "/images/videos/knives.jpg",
          chef: "Harold Villarosa",
          duration: "8 min",
          description: "Learn proper knife techniques and maintenance for safe and efficient cooking."
        }
      ]
    },
    {
      title: "It's Fine",
      count: 12,
      videos: [
        {
          id: 17,
          title: "Making My Grandmother's Chicken Soup | It's Fine | Food52",
          thumbnail: "/images/videos/chicken-soup.jpg",
          chef: "Tess Gigone",
          duration: "11 min",
          description: "Tess recreates a cherished family recipe while sharing stories of her grandmother's cooking."
        },
        {
          id: 18,
          title: "First Time Making Sourdough | It's Fine | Food52",
          thumbnail: "/images/videos/sourdough.jpg",
          chef: "Tess Gigone",
          duration: "15 min",
          description: "Join Tess as she navigates the ups and downs of making sourdough bread from scratch."
        },
        {
          id: 19,
          title: "Attempting French Macarons | It's Fine | Food52",
          thumbnail: "/images/videos/macarons.jpg",
          chef: "Tess Gigone",
          duration: "13 min",
          description: "Watch as Tess tackles one of the most finicky pastries with determination and humor."
        },
        {
          id: 20,
          title: "My First Thanksgiving Turkey | It's Fine | Food52",
          thumbnail: "/images/videos/turkey.jpg",
          chef: "Tess Gigone",
          duration: "18 min",
          description: "Tess faces the challenge of cooking a holiday centerpiece for the first time with surprising results."
        }
      ]
    },
    {
      title: "Absolute Best",
      count: 15,
      videos: [
        {
          id: 21,
          title: "The Absolute Best Way to Cook Steak | Food52",
          thumbnail: "/images/videos/steak.jpg",
          chef: "Daniel Gritzer",
          duration: "12 min",
          description: "We test multiple methods to find the definitive best technique for cooking the perfect steak."
        },
        {
          id: 22,
          title: "The Absolute Best Way to Make Scrambled Eggs | Food52",
          thumbnail: "/images/videos/scrambled-eggs.jpg",
          chef: "Emma Laperruque",
          duration: "8 min",
          description: "From slow and creamy to fast and fluffy, discover which method makes the best scrambled eggs."
        },
        {
          id: 23,
          title: "The Absolute Best Way to Roast Potatoes | Food52",
          thumbnail: "/images/videos/roast-potatoes.jpg",
          chef: "Sohla El-Waylly",
          duration: "10 min",
          description: "Learn the secret to perfectly crispy exteriors and fluffy interiors for game-changing potatoes."
        },
        {
          id: 24,
          title: "The Absolute Best Way to Make Brownies | Food52",
          thumbnail: "/images/videos/brownies.jpg",
          chef: "Coral Lee",
          duration: "14 min",
          description: "Fudgy vs. cakey? Corner piece vs. center? We settle all the brownie debates once and for all."
        }
      ]
    },
    {
      title: "Big Little Recipes",
      count: 7,
      videos: [
        {
          id: 25,
          title: "3-Ingredient Pasta Sauce | Big Little Recipes | Food52",
          thumbnail: "/images/videos/pasta-sauce.jpg",
          chef: "Emma Laperruque",
          duration: "5 min",
          description: "Make a restaurant-quality pasta sauce with just three ingredients and minimal effort."
        },
        {
          id: 26,
          title: "2-Ingredient Chocolate Mousse | Big Little Recipes | Food52",
          thumbnail: "/images/videos/chocolate-mousse.jpg",
          chef: "Emma Laperruque",
          duration: "6 min",
          description: "The simplest way to make a decadent chocolate mousse with perfect texture."
        },
        {
          id: 27,
          title: "4-Ingredient Potato Gratin | Big Little Recipes | Food52",
          thumbnail: "/images/videos/potato-gratin.jpg",
          chef: "Emma Laperruque",
          duration: "7 min",
          description: "A simplified version of the classic French dish that doesn't sacrifice flavor or texture."
        },
        {
          id: 28,
          title: "3-Ingredient Peanut Butter Cookies | Big Little Recipes | Food52",
          thumbnail: "/images/videos/pb-cookies.jpg",
          chef: "Emma Laperruque",
          duration: "4 min",
          description: "These flourless cookies come together in minutes with ingredients you already have."
        }
      ]
    }
  ];

  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleVideoClick = (videoId) => {
    router.push(`/videos/${videoId}`);
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-serif">Videos</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border-b-2 border-black">New</button>
          <button className="px-4 py-2">Popular</button>
          <button className="px-4 py-2">Home52</button>
        </div>
      </div>

      {/* Hero Video Carousel */}
      <div className="relative w-full h-96 bg-gray-100 mb-12 overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* This would be a carousel - showing placeholder for now */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 z-20 text-white">
              <h2 className="text-4xl font-bold mb-2">Crème Brûlée French Toast</h2>
              <p className="text-lg">The overnight breakfast youve been dreaming of</p>
            </div>
            <div className="absolute flex space-x-2 bottom-8 right-8 z-20">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
            </div>
            <div className="h-full w-full bg-gray-300 flex items-center justify-center text-2xl text-gray-500">
              Hero Video Placeholder
            </div>
          </div>
        </div>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Video Categories */}
      {videoCategories.map((category) => (
        <div key={category.title} className="mb-16">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-serif">{category.title} <span className="text-base text-gray-500 ml-2">({category.count})</span></h2>
            <Link href={`/videos/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
              See all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.videos.map((video) => (
              <div 
                key={video.id} 
                className="relative cursor-pointer group"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  {/* Placeholder for video thumbnail */}
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    {video.title}
                  </div>
                  
                  {/* Video duration */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                    {video.duration}
                  </div>
                  
                  {/* Hover overlay */}
                  {hoveredVideo === video.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-200">
                      <div className="text-white p-4 text-center">
                        <p className="text-sm">{video.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="mt-2 font-medium text-base line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.chef}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}