'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const popularVideos = [
  { id: 1, title: 'Classic Mussels Dish', subtitle: 'Feel Good Food | Cookaroo', thumbnail: '/image/c1.jpg', brand: 'Cookaroo' },
  { id: 2, title: 'Date Snacking Cake', subtitle: 'Cook and a Half', thumbnail: '/image/c2.jpg', brand: 'Cookaroo' },
  { id: 3, title: 'Lazy Marys Lemon Tart', subtitle: 'Cookaroo', thumbnail: '/image/vegan.jpg', brand: 'Cookaroo' },
  { id: 4, title: 'How to Make Fried Enoki Mushrooms', subtitle: 'Cookaroo', thumbnail: '/image/soup.jpg', brand: 'Cookaroo' },
  { id: 5, title: 'Whipped Greek Yogurt "Pudding"', subtitle: 'Cookaroo', thumbnail: '/image/oven2.jpg', brand: 'Cookaroo' },
  { id: 6, title: 'Pasta With Garlic Butter Sauce', subtitle: 'Big Little Recipes', thumbnail: '/image/c3.jpg', brand: 'Cookaroo' },
  { id: 7, title: 'How to Make an Aperol Spritz', subtitle: 'At Home With Us', thumbnail: '/image/club.jpg', brand: 'Cookaroo' },
  { id: 8, title: 'No-Frills Miso Dressing', subtitle: 'Cookaroo', thumbnail: '/image/cof.jpg', brand: 'Cookaroo' },
  { id: 9, title: 'Deviled Eggs', subtitle: 'Cookaroo', thumbnail: '/image/c4.jpg', brand: 'Cookaroo' },
  { id: 10, title: 'Brownie Cookies', subtitle: 'Cookaroo', thumbnail: '/image/c5.jpg', brand: 'Cookaroo' },
];

const tabs = [
  { id: 'home', label: 'Home', path: '/videos' },
  { id: 'featured', label: 'Featured', path: '/videos/featured' },
  { id: 'popular', label: 'Popular', path: '/videos/popular' },
  { id: 'latest', label: 'Latest', path: '/videos/latest' },
];

export default function PopularVideosPage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#F8FAF7]">
      {/* Fixed Video Navigation */}
      <div className="fixed top-[170px] left-0 w-full bg-white border-b border-[#B3A88F] shadow-sm z-40">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex justify-center">
            <nav className="flex items-center space-x-12 py-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    pathname === tab.path
                      ? 'text-[#38301B] border-b-2 border-[#38301B]'
                      : 'text-[#0B0A08] hover:text-[#38301B]'
                  }`}
                  style={{ fontFamily: 'MyCustomFont' }}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="pt-[64px] pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#38301B] mb-2" style={{ fontFamily: 'MyCustomFont' }}>
          What&apos;s Popular
        </h1>
        <div className="flex justify-center mb-3">
          <div className="h-0.5 w-24 bg-[#B3A88F] rounded-full"></div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popularVideos.map((video) => (
            <div key={video.id} className="bg-white shadow-md overflow-hidden group relative border border-[#ECECEC]">
              <div className="relative aspect-video">
                <Image 
                src={video.thumbnail} 
                width={300}
                height={300}
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 font-semibold tracking-wide">{video.brand}</div>
                <button className="absolute top-2 right-2 bg-white/80 p-2 hover:bg-white shadow transition"><svg className="text-[#38301B] w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg></button>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold text-[#38301B] mb-1 truncate" style={{ fontFamily: 'MyCustomFont' }}>{video.title}</h3>
                <p className="text-[#0B0A08] text-sm truncate" style={{ fontFamily: 'MyCustomFontItalic' }}>{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 