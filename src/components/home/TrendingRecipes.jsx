"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaClock, FaAngleRight } from "react-icons/fa";

export default function TrendingRecipes() {
  return (
    <section className="bg-[#F8FAF7] py-20">
      <div className="container mx-auto px-6">
        {/* Unique asymmetrical header */}
        <div className="relative mb-16">
          <div className="absolute left-0 w-12 h-1 bg-[#383O1B] top-1/2 -translate-y-1/2"></div>
          <h3 className="text-3xl font-light tracking-wider text-[#0B0A08] ml-16" style={{ fontFamily:'MyCustomFont' }}>
            Trending <span className="italic" style={{ fontFamily:'MyCustomFont' }}>Recipes</span>
          </h3>
          <div className="mt-3 ml-16 max-w-xl">
            <p className="text-[#0B0A08]/70 text-sm tracking-wide">Explore our curated selection of trending recipes that have captivated our community of chefs and food enthusiasts.</p>
          </div>
          <Link
            href=""
            className="absolute right-0 top-3 flex items-center text-[#383O1B] hover:text-[#0B0A08] transition-colors duration-300"
          >
            <span className="text-sm mr-2 border-b border-[#383O1B]">View Collection</span>
            <FaAngleRight />
          </Link>
        </div>

        {/* Hexagonal layout grid with varied card styles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature Recipe (Wider card) */}
          <div className="md:col-span-8 group">
            <div className="relative h-full overflow-hidden shadow-md bg-white">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-3/5 relative">
                  <Image
                    src="/noodle.jpg"
                    width={500}
                    height={400}
                    alt="Spicy Thai Noodles"
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/90 text-sm mb-3 font-light">
                      A flavorful Thai-inspired noodle dish with a perfect balance of spicy, sweet, and tangy flavors. Ready in just 15 minutes!
                    </p>
                  </div>
                  <div className="absolute top-4 left-4 bg-[#B3A88F]/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-[#0B0A08] font-medium">
                    CHEF'S CHOICE
                  </div>
                </div>
                <div className="md:w-2/5 p-6 flex flex-col justify-between bg-[#F8FAF7]">
                  <div>
                    <h4 className="text-xl font-medium text-[#0B0A08] mb-2" style={{ fontFamily:'MyCustomFont' }}>Spicy Thai Noodles</h4>
                    <div className="flex items-center mb-4">
                      <div className="h-6 w-6 rounded-full bg-[#B3A88F] flex items-center justify-center mr-2">
                        <FaClock className="text-[#0B0A08]" size={12} />
                      </div>
                      <span className="text-xs text-[#0B0A08]/70">15 mins</span>
                    </div>
                    <div className="h-px w-full bg-[#B3A88F]/30 my-3"></div>
                    <p className="text-xs text-[#0B0A08]/70 tracking-wide mb-4">
                      This popular Thai dish combines rice noodles with a spicy sauce made from chili, garlic, and lime.
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-[#B3A88F] mr-2">
                        <Image src="/api/placeholder/30/30" width={30} height={30} alt="chef" />
                      </div>
                      <span className="text-xs font-medium text-[#0B0A08]">Amanda Suarez</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#383O1B] mr-2">★★★★★</span>
                      <span className="text-xs text-[#0B0A08]/70">(18)</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="absolute top-4 right-4 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-10">
                <FaHeart className="text-[#B3A88F] hover:text-[#383O1B] transition-colors" size={16} />
              </button>
            </div>
          </div>

          {/* Vertical Recipe Card */}
          <div className="md:col-span-4 group">
            <div className="relative overflow-hidden shadow-md h-full bg-white">
              <div className="h-48">
                <Image
                  src="/toast.jpg"
                  width={400}
                  height={300}
                  alt="Vegan Avocado Toast"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white/90 text-sm font-light">
                    Creamy avocado spread on artisanal sourdough bread, topped with microgreens and a sprinkle of everything bagel seasoning.
                  </p>
                </div>
              </div>
              <div className="p-5 bg-[#F8FAF7]">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-[#0B0A08]" style={{ fontFamily:'MyCustomFont' }}>Vegan Avocado Toast</h4>
                  <div className="ml-2 bg-[#383O1B]/20 text-[#383O1B] text-xs px-2 py-0.5 rounded-full">Vegan</div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="h-5 w-5 rounded-full bg-[#B3A88F] flex items-center justify-center mr-2">
                    <FaClock className="text-[#0B0A08]" size={10} />
                  </div>
                  <span className="text-xs text-[#0B0A08]/70">24 mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-[#B3A88F] mr-2">
                      <Image src="/api/placeholder/30/30" width={30} height={30} alt="chef" />
                    </div>
                    <span className="text-xs font-medium text-[#0B0A08]">Ali Imtiaz</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#383O1B] mr-1">★★★★★</span>
                    <span className="text-xs text-[#0B0A08]/70">(32)</span>
                  </div>
                </div>
              </div>
              <button className="absolute top-4 right-4 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors duration-300">
                <FaHeart className="text-[#383O1B]" size={16} />
              </button>
            </div>
          </div>

          {/* Horizontal Recipe Card */}
          <div className="md:col-span-6 group">
            <div className="relative h-full overflow-hidden shadow-md bg-white">
              <div className="flex h-full">
                <div className="w-2/5 relative">
                  <Image
                    src="/sandwhich.jpg"
                    width={300}
                    height={200}
                    alt="Grilled Chicken Salad"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0B0A08]/80 to-transparent text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">18 mins</span>
                      <span className="text-[#B3A88F] text-xs">★★★★★</span>
                    </div>
                  </div>
                </div>
                <div className="w-3/5 p-5 relative bg-[#F8FAF7]">
                  <h4 className="font-medium text-[#0B0A08] pr-16" style={{ fontFamily:'MyCustomFont' }}>Grilled Chicken Salad</h4>
                  <p className="text-xs text-[#0B0A08]/70 mt-2 mb-3">
                    Tender grilled chicken breast over a bed of mixed greens with avocado and cherry tomatoes.
                  </p>
                  <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full overflow-hidden bg-[#B3A88F] mr-2">
                        <Image src="/api/placeholder/30/30" width={30} height={30} alt="chef" />
                      </div>
                      <span className="text-xs font-medium text-[#0B0A08]">Samin Nosrat</span>
                    </div>
                    <div className="group-hover:opacity-100 opacity-0 transition-opacity text-xs text-[#383O1B] font-medium">
                      View Recipe →
                    </div>
                  </div>
                </div>
              </div>
              <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors duration-300">
                <FaHeart className="text-[#383O1B]" size={16} />
              </button>
            </div>
          </div>

          {/* Circle Feature Recipe */}
          <div className="md:col-span-6 group">
            <div className="relative h-full overflow-hidden shadow-md bg-[#F8FAF7] p-5">
              <div className="flex items-center h-full">
                <div className="w-1/3 relative">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-[#B3A88F]/30 shadow-inner">
                    <Image
                      src="/pancake.jpg"
                      width={200}
                      height={200}
                      alt="Classic Pancakes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-2/3 pl-6">
                  <div className="mb-1 flex items-center">
                    <div className="h-1 w-5 bg-[#383O1B] mr-2"></div>
                    <span className="text-xs font-light text-[#383O1B] uppercase tracking-wider">Breakfast</span>
                  </div>
                  <h4 className="text-xl font-medium text-[#0B0A08] mb-2" style={{ fontFamily:'MyCustomFont' }}>Classic Pancakes</h4>
                  <p className="text-sm text-[#0B0A08]/70 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                    Light and fluffy pancakes with a hint of vanilla, served with fresh berries and pure maple syrup.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaClock className="text-[#383O1B] mr-2" size={14} />
                      <span className="text-xs text-[#0B0A08]/70">32 mins</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#383O1B] mr-1">★★★★★</span>
                      <span className="text-xs text-[#0B0A08]/70">(24)</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#B3A88F]/30 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-[#B3A88F] mr-2">
                        <Image src="/api/placeholder/30/30" width={30} height={30} alt="chef" />
                      </div>
                      <span className="text-xs font-medium text-[#0B0A08]">Massimo Bottura</span>
                    </div>
                    <button className="p-1.5 rounded-full hover:bg-[#B3A88F]/20 transition-colors">
                      <FaHeart className="text-[#B3A88F] hover:text-[#383O1B] transition-colors" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}