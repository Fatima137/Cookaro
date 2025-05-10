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
  const HEADER_STACK_HEIGHT = 220; // px, adjust if your header stack height changes

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
                      onMouseLeave={e => {
                        if (!recipesDropdownRef.current || !recipesDropdownRef.current.contains(e.relatedTarget)) {
                          setRecipesDropdownOpen(false);
                        }
                      }}
                    >
                      <Link
                        href="/recipes"
                        className="hover:text-[#38301B] transition-colors duration-200 hover:underline hover:font-bold underline-offset-4"
                        onClick={e => {
                          e.preventDefault();
                          setRecipesDropdownOpen(!recipesDropdownOpen);
                        }}
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
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-2 tracking-wider">Dinner</h4>
                              <ul className="space-y-1">
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Pasta</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Pizza</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Chili</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Lasagna</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Meatloaf</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Casserole</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Mac and Cheese</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Tacos</li>
                                <li className="font-bold mt-2 hover:underline cursor-pointer">VIEW ALL</li>
                              </ul>
                            </div>
                            {/* Lunch */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-2 tracking-wider">Lunch</h4>
                              <ul className="space-y-1">
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Salad</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Sandwich</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Soup</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Stew</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Potato Salad</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Pasta Salad</li>
                                <li className="font-bold mt-2 hover:underline cursor-pointer">VIEW ALL</li>
                              </ul>
                            </div>
                            {/* Baking & Desserts */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-2 tracking-wider">Baking & Desserts</h4>
                              <ul className="space-y-1">
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Cookies</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Bread</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Cake</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Pie</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Banana Bread</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Chocolate Cake</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Ice Cream</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Cheesecake</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Brownies</li>
                                <li className="font-bold mt-2 hover:underline cursor-pointer">VIEW ALL</li>
                              </ul>
                            </div>
                            {/* Breakfast */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-2 tracking-wider">Breakfast</h4>
                              <ul className="space-y-1">
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Quiche</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Granola</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Smoothie</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Frittata</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Omelet</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Pancakes</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Waffles</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">French Toast</li>
                                <li className="font-bold mt-2 hover:underline cursor-pointer">VIEW ALL</li>
                              </ul>
                            </div>
                            {/* More */}
                            <div className="flex-1 min-w-[120px] px-6 first:pl-0 last:pr-0">
                              <h4 className="uppercase text-xs font-bold text-[#B3A88F] mb-2 tracking-wider">More</h4>
                              <ul className="space-y-1">
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Sides</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Entrees</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Appetizers</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Snacks</li>
                                <li className="hover:text-[#0B0A08] hover:font-semibold transition-colors cursor-pointer">Drinks</li>
                              </ul>
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