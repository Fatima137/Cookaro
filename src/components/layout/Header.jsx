import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaUser, FaShoppingCart, FaGlobe, FaSearch } from "react-icons/fa";
import AnnouncementBanner from "./AnnouncementBanner";

export default function Header() {
  const bannerHeight = 40; // Adjust this if your banner's height changes

  return (
    <>
      {/* Announcement Banner */}
      <div className={`fixed top-0 w-full bg-yellow-400 z-50 h-[${bannerHeight}px]`}>
        <AnnouncementBanner />
      </div>

      {/* Header just below the banner */}
      <header
        className="fixed w-full bg-white z-90 border-b border-gray-200 shadow-sm"
        style={{ top: `${bannerHeight}px` }}
      >
        <div className="flex items-center justify-between px-16 py-6">
          {/* Left navigation */}
          <nav className="flex items-center gap-8 text-sm text-gray-700 font-medium " style={{ fontFamily: 'MyCustomFont, sans-serif' }}>
            {["RECIPES", "VIDEOS", "STORIES", "COMMUNITY", "KITCHEN", "SHOP"].map((item, i) => (
              <Link key={i} href={`/${item.toLowerCase()}`} className="relative group">
                <span className="hover:text-orange-500 transition-colors duration-200">
                  {item}
                </span>
                <span className="absolute bottom-[-2px] bold left-0 w-0 h-[1.5px] bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Centered logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Cookaroo Logo"
                width={220}
                height={80}
                priority
              />
            </Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-56">
              <FaSearch className="text-gray-500 mr-2 text-sm" />
              <input
                type="text"
                placeholder="Search for recipe"
                className="outline-none w-full text-sm text-gray-700 bg-transparent"
                style={{ fontFamily: 'MyCustomFont, sans-serif' }}
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <FaHeart className="text-gray-500 text-xl cursor-pointer hover:text-red-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">3</span>
              </div>
              <FaUser className="text-gray-500 text-xl cursor-pointer hover:text-gray-800 transition-colors" />
              <FaShoppingCart className="text-gray-500 text-xl cursor-pointer hover:text-gray-800 transition-colors" />
              <FaGlobe className="text-gray-500 text-xl cursor-pointer hover:text-gray-800 transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to push content below both fixed elements */}
      <div style={{ height: `${bannerHeight + 96}px` }}></div> {/* 96 = py-6 * 2 + header content */}
    </>
  );
}