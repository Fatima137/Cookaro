'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronLeft, FaChevronRight, FaEllipsisV } from 'react-icons/fa';

const featuredVideos = [
  {
    id: 1,
    title: 'We Tried Making a Savory Jello Salad From the 50s',
    subtitle: "It's Fine | Cookaroo",
    thumbnail: '/image/cake.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 2,
    title: 'This Classic Mussels Dish is Easier Than It Looks',
    subtitle: 'Feel Good Food | Cookaroo',
    thumbnail: '/image/diner.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 3,
    title: 'The One-Pot Dinner This Chef Makes on Repeat',
    subtitle: 'Yes, Chef | Cookaroo',
    thumbnail: '/image/egg.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 4,
    title: 'How to Make the Ultimate Seafood Tower at Home',
    subtitle: "It's Fine | Cookaroo",
    thumbnail: '/image/eq4.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 5,
    title: 'The Secret Behind Soothrs Signature Dumplings',
    subtitle: 'Yes, Chef | Cookaroo',
    thumbnail: '/image/eq3.jpg',
    brand: 'Cookaroo',
  },
];

const recipeDrop = [
  {
    id: 1,
    title: 'How to Make Sopa de Res y Fideos',
    subtitle: 'Recipe Drop | Cookaroo',
    thumbnail: '/image/cros.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 2,
    title: 'Zucchini and Feta Pasta with Zaatar Pangrattato',
    subtitle: 'Recipe Drop | Cookaroo',
    thumbnail: '/image/cof.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 3,
    title: 'A Quick & Hearty White Bean & Sausage Soup',
    subtitle: 'Recipe Drop | Cookaroo',
    thumbnail: '/image/ch5.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 4,
    title: 'How to Make Latke Ice Cream',
    subtitle: 'Recipe Drop | Cookaroo',
    thumbnail: '/image/cake2.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 5,
    title: 'A Sweet and Savory Arepa Swap',
    subtitle: 'Recipe Drop | Cookaroo',
    thumbnail: '/image/grill.jpg',
    brand: 'Cookaroo',
  },
];

const yesChef = [
  {
    id: 1,
    title: 'How to Make Latke Ice Cream',
    subtitle: 'Yes, Chef | Cookaroo',
    thumbnail: '/image/ch3.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 2,
    title: 'A Sweet and Savory Arepa Swap',
    subtitle: 'Yes, Chef | Cookaroo',
    thumbnail: '/image/mcup.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 3,
    title: 'How to Make the Ultimate Seafood Tower at Home',
    subtitle: 'Yes, Chef | Cookaroo',
    thumbnail: '/image/cake3.jpg',
    brand: 'Cookaroo',
  },
];

const placeholderVideos = [
  {
    id: 1,
    title: 'Placeholder Video 1',
    subtitle: 'Placeholder | Cookaroo',
    thumbnail: '/image/mint.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 2,
    title: 'Placeholder Video 2',
    subtitle: 'Placeholder | Cookaroo',
    thumbnail: '/image/cake3.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 3,
    title: 'Placeholder Video 3',
    subtitle: 'Placeholder | Cookaroo',
    thumbnail: '/image/ch2.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 4,
    title: 'Placeholder Video 4',
    subtitle: 'Placeholder | Cookaroo',
    thumbnail: '/image/oreo.jpg',
    brand: 'Cookaroo',
  },
  {
    id: 5,
    title: 'Placeholder Video 5',
    subtitle: 'Placeholder | Cookaroo',
    thumbnail: '/image/riso.jpg',
    brand: 'Cookaroo',
  },
];

function VideoSection({ title, count, videos }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#38301B]" style={{ fontFamily: 'MyCustomFont' }}>{title} <span className="text-base font-normal text-[#B3A88F]">({count})</span></h2>
      </div>
      <div className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar">
        {videos.map((video) => (
          <div key={video.id} className="min-w-[320px] max-w-[320px] bg-white rounded-lg shadow-md overflow-hidden group relative">
            <div className="relative aspect-video">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-semibold tracking-wide">{video.brand}</div>
              <button className="absolute top-2 right-2 bg-white/80 rounded-full p-2 hover:bg-white shadow transition"><FaEllipsisV className="text-[#38301B] w-4 h-4" /></button>
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold text-[#38301B] mb-1 truncate" style={{ fontFamily: 'MyCustomFont' }}>{video.title}</h3>
              <p className="text-[#0B0A08] text-sm truncate" style={{ fontFamily: 'MyCustomFontItalic' }}>{video.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VideosPage() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', path: '/videos' },
    { id: 'featured', label: 'Featured', path: '/videos/featured' },
    { id: 'popular', label: 'Popular', path: '/videos/popular' },
    { id: 'latest', label: 'Latest', path: '/videos/latest' },
  ];

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

      {/* Hero/Carousel */}
      <div className="pt-[120px] bg-white border-b border-[#B3A88F] pb-4">
        <div className="container mx-auto px-0 md:px-8 lg:px-16">
          <div className="relative w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden flex items-center mb-3">
            <button className="absolute left-4 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"><FaChevronLeft className="w-6 h-6 text-[#38301B]" /></button>
            <img src="/image/dump.jpg" alt="Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'MyCustomFont' }}>Watch <span className="text-[#B3A88F]">Cookaroo</span></h1>
              <p className="text-white/90 text-lg md:text-xl" style={{ fontFamily: 'MyCustomFontItalic' }}>Your favorite shows, chefs, and recipes</p>
            </div>
            <button className="absolute right-4 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-white"><FaChevronRight className="w-6 h-6 text-[#38301B]" /></button>
          </div>
        </div>
      </div>

      {/* Main Content: Sectioned Rows */}
      <div className="container mx-auto px-0 md:px-8 lg:px-16 pb-6">
        <VideoSection title="Featured Videos" count={249} videos={featuredVideos} />
        <VideoSection title="Recipe Drop" count={83} videos={recipeDrop} />
        <VideoSection title="Yes, Chef" count={10} videos={yesChef} />
        <VideoSection title="Placeholder Section 1" count={12} videos={placeholderVideos} />
        <VideoSection title="Placeholder Section 2" count={8} videos={placeholderVideos} />
        <VideoSection title="Placeholder Section 3" count={15} videos={placeholderVideos} />
        <VideoSection title="Placeholder Section 4" count={6} videos={placeholderVideos} />
        <VideoSection title="Placeholder Section 5" count={20} videos={placeholderVideos} />
      </div>
    </div>
  );
} 