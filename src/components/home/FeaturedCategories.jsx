"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function ShopPage() {
  // Refs for scroll functionality
  const scrollContainerRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  // Hero section data - featured product
  const heroProduct = {
    category: "FEATURED PRODUCT",
    title: "Professional Chef's Knife Set with Wooden Block",
    description: "Our top-rated knife set includes 8 professional-grade knives crafted from high-carbon German stainless steel with ergonomic handles.",
    image: "/knife.jpg",
    price: "$129.99",
    originalPrice: "$159.99"
  };

  // Latest featured products
  const featuredProducts = [
    {
      category: "BESTSELLER",
      title: "Cast Iron Dutch Oven with Lid",
      description: "Perfect for slow cooking, braising, roasting and baking. Pre-seasoned cast iron that gets better with use.",
      price: "$89.99",
      originalPrice: "$109.99"
    },
    {
      category: "NEW ARRIVAL",
      title: "Smart Wireless Meat Thermometer",
      description: "Monitor your cooking from your phone with Bluetooth technology. Perfect temperature results every time.",
      price: "$49.99"
    },
    {
      category: "LIMITED EDITION",
      title: "Artisanal Ceramic Bakeware Set",
      description: "Handcrafted ceramic baking dishes in exclusive seasonal colors. Oven, microwave, and dishwasher safe.",
      price: "$79.99",
      originalPrice: "$99.99"
    }
  ];

  // Trending products (replaces community events)
  const trendingProducts = [
    {
      image: "/image/spat.jpg",
      title: "Premium Silicone Spatula Set",
      rating: "4.8",
      category: "Kitchen Tools",
      price: "$24.99"
    },
    {
      image: "/image/sgrin.jpg",
      title: "Electric Spice Grinder",
      rating: "4.7",
      category: "Appliances",
      price: "$34.99"
    },
    {
      image: "/image/cuttin.jpg", 
      title: "Bamboo Cutting Board with Juice Groove",
      rating: "4.9",
      category: "Kitchen Essentials",
      price: "$29.99"
    },
    {
      image: "/image/mcup.jpg",
      title: "Stainless Steel Measuring Cups & Spoons",
      rating: "4.6",
      category: "Baking Tools",
      price: "$19.99"
    },
    {
      image: "/image/proc.jpg",
      title: "Compact Food Processor",
      rating: "4.7",
      category: "Appliances",
      price: "$69.99"
    },
    {
      image: "/image/bowls.jpg",
      title: "Nesting Mixing Bowls with Lids",
      rating: "4.8",
      category: "Kitchen Essentials",
      price: "$39.99"
    }
  ];

  // Featured brands (replaces community members)
  const featuredBrands = [
    {
      name: "CuisineCraft",
      specialty: "Premium Cookware",
      country: "Italy",
      image: "/image/eq1.webp",
      products: "42 products available"
    },
    {
      name: "GourmetPro",
      specialty: "Professional Kitchen Tools",
      country: "Germany",
      image: "/image/eq2.jpg",
      products: "36 products available"  
    },
    {
      name: "BakeMaster",
      specialty: "Baking Equipment",
      country: "France",
      image: "/image/eq3.jpg",
      products: "28 products available"
    },
    {
      name: "ChefTech",
      specialty: "Kitchen Appliances",
      country: "USA",
      image: "/image/eq4.jpg",
      products: "19 products available"
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

  // Function to add to cart
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="bg-[#F8FAF7] font-serif"> {/* Ice color as background */}
      {/* Header */}
      <header className="container mx-auto py-6 px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-4xl font-serif text-[#0B0A08]">Shop</h1> {/* Charcoal color for text */}
        <div className="relative">
          <button className="text-[#0B0A08] hover:text-[#383O1B]"> {/* Charcoal to Moss on hover */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#383O1B] text-[#F8FAF7] text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main featured product */}
          <div className="lg:w-1/2">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src={heroProduct.image}
                  width={700}
                  height={500}
                  alt={heroProduct.title}
                  className="w-full object-cover aspect-[16/9] rounded group-hover:scale-105 transition-transform duration-500"
                />
                {/* Sale badge */}
                <div className="absolute top-4 left-4 bg-[#0B0A08] bg-opacity-90 text-[#F8FAF7] px-3 py-1 text-sm rounded-full font-medium">
                  SALE
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[#383O1B] uppercase text-sm tracking-wider font-medium">{heroProduct.category}</span>
                <h2 className="text-2xl font-serif text-[#0B0A08] mt-2 leading-tight group-hover:text-[#383O1B] transition-colors">{heroProduct.title}</h2>
                <p className="text-[#0B0A08] mt-2 text-base">{heroProduct.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-xl font-medium text-[#0B0A08]">{heroProduct.price}</span>
                  {heroProduct.originalPrice && (
                    <span className="ml-2 text-sm text-[#B3A88F] line-through">{heroProduct.originalPrice}</span>
                  )}
                </div>
                <button 
                  onClick={addToCart}
                  className="mt-4 bg-[#383O1B] hover:bg-[#0B0A08] text-[#F8FAF7] px-4 py-2 rounded font-medium transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Featured products sidebar */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif text-[#383O1B] italic">Featured Products</h3>
              <div className="ml-2">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 6H1M1 6L6 1M1 6L6 11" stroke="#B3A88F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="space-y-8">
              {featuredProducts.map((product, index) => (
                <div key={index} className={`${index > 0 ? 'border-t border-[#B3A88F] pt-6' : ''} cursor-pointer group`}>
                  <span className="text-[#B3A88F] uppercase text-sm tracking-wider font-medium">{product.category}</span>
                  <div className="flex justify-between mt-2">
                    <h4 className="text-lg font-serif text-[#0B0A08] leading-tight group-hover:text-[#383O1B] transition-colors">{product.title}</h4>
                  </div>
                  <p className="text-[#383O1B] text-sm mt-2">{product.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-[#0B0A08] font-medium">{product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-[#B3A88F] line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={addToCart}
                      className="text-[#383O1B] hover:text-[#0B0A08] text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <button className="text-[#383O1B] font-medium hover:text-[#0B0A08] transition-colors flex items-center">
                  View All Featured Products
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="mb-12 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383O1B] italic mb-6">Trending Products</h2>
        
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
                {trendingProducts.map((product, index) => (
                  <div key={index} className="flex-none w-64 group cursor-pointer">
                    <div className="relative overflow-hidden rounded">
                      <Image
                        src={product.image}
                        width={260}
                        height={180}
                        alt={product.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category badge */}
                      <div className="absolute top-2 left-2 bg-[#383O1B] bg-opacity-90 text-[#F8FAF7] px-2 py-1 text-xs rounded-full">
                        {product.category}
                      </div>
                      {/* Rating badge */}
                      <div className="absolute bottom-2 right-2 bg-[#F8FAF7] bg-opacity-90 text-[#0B0A08] px-2 py-1 text-xs rounded-full font-medium flex items-center">
                        <svg className="w-3 h-3 text-[#383O1B] mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        {product.rating}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-[#0B0A08] font-medium">{product.price}</span>
                      <h3 className="text-[#0B0A08] text-base font-medium mt-1 group-hover:text-[#383O1B] transition-colors">{product.title}</h3>
                      <button 
                        onClick={addToCart}
                        className="mt-2 text-[#383O1B] hover:text-[#0B0A08] text-sm font-medium flex items-center"
                      >
                        Add to Cart
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                          <path d="M3 6h19l-3 10H6L3 6zm0 0l-.73-2.2A1 1 0 001.27 3H0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 21a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M19 21a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-4">
              <div className="flex gap-1">
                {trendingProducts.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full flex-grow ${index === 0 ? 'bg-[#0B0A08]' : 'bg-[#B3A88F]'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-[#383O1B] hover:bg-[#0B0A08] text-[#F8FAF7] px-6 py-2 rounded-full font-medium transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="mb-12 bg-[#B3A88F] py-10"> {/* Nordic Mist background */}
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#0B0A08] italic mb-8">Featured Brands</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBrands.map((brand, index) => (
              <div key={index} className="bg-[#F8FAF7] rounded-lg overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src={brand.image}
                    width={300}
                    height={300}
                    alt={brand.name}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-[#0B0A08]">{brand.name}</h3>
                  <p className="text-[#383O1B] font-medium text-sm mt-1">{brand.specialty}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-[#B3A88F]">
                    <span>{brand.country}</span>
                    <span>{brand.products}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-[#383O1B] italic mb-6">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Cookware", "Bakeware", "Knives", "Appliances", "Kitchen Tools", "Tableware"].map((category, index) => (
              <div key={index} className="bg-[#B3A88F] hover:bg-[#383O1B] transition-colors rounded-lg p-4 text-center cursor-pointer group">
                <span className="text-[#F8FAF7] font-medium group-hover:text-[#F8FAF7]">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Stats Section */}
      <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-[#F8FAF7] border border-[#B3A88F] rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif text-[#0B0A08] mb-2">Join Our Foodie Community</h2>
              <p className="text-[#383O1B]">Quality products, expert-tested recipes, and a supportive cooking community</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "500+", label: "Curated Products" },
                { value: "Free", label: "Shipping over $50" },
                { value: "30-Day", label: "Money-Back Guarantee" },
                { value: "24/7", label: "Customer Support" }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-[#383O1B]">{stat.value}</p>
                  <p className="text-[#B3A88F] text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-[#0B0A08] text-[#F8FAF7] rounded-lg p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif mb-2">Subscribe for Special Offers</h3>
                <p className="text-[#B3A88F]">Get exclusive deals, new product alerts, and recipe inspiration delivered to your inbox.</p>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 rounded-l outline-none text-[#0B0A08] w-full"
                  />
                  <button className="bg-[#383O1B] hover:bg-[#B3A88F] text-[#F8FAF7] px-4 py-2 rounded-r font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}