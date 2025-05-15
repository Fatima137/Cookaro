// Header.jsx
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaUser, FaShoppingCart, FaSearch, FaChevronDown, FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import AnnouncementBanner from "./AnnouncementBanner";
import SponsorBanner from "./SponsorBanner";

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [recipesDropdownOpen, setRecipesDropdownOpen] = useState(false);
  const recipesDropdownRef = useRef(null);
  const HEADER_STACK_HEIGHT = 180; // px, adjusted to remove gap

  const languages = ["EN", "DE", "IT", "FR", "ES"];

  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      
      <AnnouncementBanner />
      <SponsorBanner />
      <header className="bg-white border-b border-[#B3A88F] shadow-md">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between py-5 gap-x-12">
            {/* Left: Nav/Menu */}
            <div className="flex items-center min-w-[220px]">
              <button
                className="md:hidden text-[#38301B] mr-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <FaBars size={20} />
              </button>
              <div className="hidden md:flex gap-6 text-sm font-medium text-[#0B0A08]">
                {['RECIPES', 'VIDEOS', 'STORIES', 'COMMUNITY', 'SHOP'].map((item, i) => (
                  item === 'RECIPES' ? (
                    <div
                      key={i}
                      className="relative group"
                      onMouseEnter={() => setRecipesDropdownOpen(true)}
                      onMouseLeave={(e) => {
                        // Check if we're moving to the dropdown
                        const toElement = e.relatedTarget;
                        if (recipesDropdownRef.current && recipesDropdownRef.current.contains(toElement)) {
                          return;
                        }
                        setRecipesDropdownOpen(false);
                      }}
                    >
                      <Link
                        href="/recipes"
                        className="hover:text-[#38301B] transition-colors duration-200 hover:underline hover:font-bold underline-offset-4"
                      >
                        {item}
                      </Link>
                      {/* Dropdown Mega Menu */}
                      {recipesDropdownOpen && (
                        <div
                          ref={recipesDropdownRef}
                          className="fixed left-0 w-screen z-[9999] flex justify-center"
                          style={{ top: HEADER_STACK_HEIGHT }}
                          onMouseEnter={() => setRecipesDropdownOpen(true)}
                          onMouseLeave={() => setRecipesDropdownOpen(false)}
                        >
                          <div className="w-[900px] bg-white/95 shadow-2xl rounded-2xl border border-[#E5E5E5] p-8 flex gap-0 text-[#38301B] text-base md:text-lg divide-x divide-[#ECECEC] backdrop-blur-sm" style={{ minWidth: '700px' }}>
                            {/* Dinner */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-4 tracking-wider" style={{ fontFamily: 'MyCustomFont' }}>Dinner</h4>
                              <div className="h-px w-12 bg-[#B3A88F] mb-4"></div>
                              <ul className="space-y-2">
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Quick Dinners</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Family Favorites</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Weekend Specials</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>One-Pot Meals</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Sheet Pan Dinners</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Slow Cooker</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Grilling</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Pasta</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/dinner" className="font-bold mt-4 hover:underline block text-[15px]" style={{ fontFamily: 'MyCustomFont' }}>VIEW ALL</Link>
                                </li>
                              </ul>
                            </div>
                            {/* Breakfast */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-4 tracking-wider" style={{ fontFamily: 'MyCustomFont' }}>Breakfast</h4>
                              <div className="h-px w-12 bg-[#B3A88F] mb-4"></div>
                              <ul className="space-y-2">
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Quick Breakfasts</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Weekend Brunch</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Eggs</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Pancakes & Waffles</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Smoothies</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Overnight Oats</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Breakfast Bowls</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Breakfast Sandwiches</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/breakfast" className="font-bold mt-4 hover:underline block text-[15px]" style={{ fontFamily: 'MyCustomFont' }}>VIEW ALL</Link>
                                </li>
                              </ul>
                            </div>
                            {/* Baking & Desserts */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-4 tracking-wider" style={{ fontFamily: 'MyCustomFont' }}>Baking & Desserts</h4>
                              <div className="h-px w-12 bg-[#B3A88F] mb-4"></div>
                              <ul className="space-y-2">
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Cookies</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Bread</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Cake</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Pie</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Banana Bread</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Chocolate Cake</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Ice Cream</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Cheesecake</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="hover:text-[#0B0A08] hover:font-semibold transition-colors block text-[15px]" style={{ fontFamily: 'MyCustomFontItalic' }}>Brownies</Link>
                                </li>
                                <li>
                                  <Link href="/recipes/category/baking" className="font-bold mt-4 hover:underline block text-[15px]" style={{ fontFamily: 'MyCustomFont' }}>VIEW ALL</Link>
                                </li>
                              </ul>
                            </div>
                            {/* Featured Section */}
                            <div className="flex-1 min-w-[200px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-4 tracking-wider" style={{ fontFamily: 'MyCustomFont' }}>Featured</h4>
                              <div className="h-px w-12 bg-[#B3A88F] mb-4"></div>
                              <div className="space-y-4">
                                <Link href="/recipes/featured" className="block group">
                                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-2">
                                    <Image
                                      src="/featured-recipe.jpg"
                                      alt="Featured Recipe"
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                      <span className="text-white text-sm font-medium" style={{ fontFamily: 'MyCustomFontItalic' }}>Spring Collection</span>
                                    </div>
                                  </div>
                                </Link>
                                <Link href="/recipes/seasonal" className="block group">
                                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-2">
                                    <Image
                                      src="/seasonal-recipe.jpg"
                                      alt="Seasonal Recipe"
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                      <span className="text-white text-sm font-medium" style={{ fontFamily: 'MyCustomFontItalic' }}>Seasonal Favorites</span>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={i}
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-[#38301B] transition-colors duration-200 hover:underline hover:font-bold underline-offset-4"
                    >
                      {item}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center flex-1 mx-auto">
              <Link href="/">
                <Image
                  src="/image/image1.png"
                  alt="Cookaroo Logo"
                  width={200}
                  height={70}
                  priority
                />
              </Link>
            </div>

            {/* Right: Icons/Search */}
            <div className="flex items-center justify-end min-w-[260px] gap-4">
              <div className="hidden md:flex items-center border border-[#B3A88F] rounded-full px-4 py-2 w-56">
                <FaSearch className="text-[#38301B] mr-2 text-sm" />
                <input
                  type="text"
                  placeholder="Search for recipe"
                  className="outline-none w-full text-sm text-[#0B0A08] bg-transparent"
                />
              </div>
              <div className="relative">
                <FaHeart className="text-[#38301B] text-xl cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-[#38301B] text-white text-xs rounded-full px-1.5">3</span>
              </div>
              <FaUser className="text-[#38301B] text-xl cursor-pointer" />
              <FaShoppingCart className="text-[#38301B] text-xl cursor-pointer" />
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center text-[#38301B] hover:text-[#0B0A08]"
                >
                  <span className="text-sm font-medium mr-1">{language}</span>
                  <FaChevronDown className="text-xs" />
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-20 bg-white border border-[#B3A88F] rounded shadow-lg z-50">
                    <ul>
                      {languages.map((lang) => (
                        <li
                          key={lang}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#F8FAF7] ${
                            language === lang ? "text-[#38301B] font-medium" : "text-[#0B0A08]"
                          }`}
                          onClick={() => selectLanguage(lang)}
                        >
                          {lang}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#F8FAF7] border-t border-[#B3A88F] py-4">
              <nav className="flex flex-col gap-4 px-4">
                {["RECIPES", "VIDEOS", "STORIES", "COMMUNITY", "SHOP"].map((item, i) => (
                  <Link key={i} href={`/${item.toLowerCase()}`} className="py-2 border-b border-[#B3A88F] text-[#0B0A08]">
                    {item}
                  </Link>
                ))}
                <div className="relative border border-[#B3A88F] rounded-full px-4 py-2 mt-2">
                  <FaSearch className="absolute left-4 top-3 text-[#38301B] text-sm" />
                  <input
                    type="text"
                    placeholder="Search for recipe"
                    className="outline-none w-full text-sm text-[#0B0A08] bg-transparent pl-7"
                  />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}