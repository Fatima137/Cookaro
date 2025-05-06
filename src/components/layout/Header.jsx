import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaUser, FaShoppingCart, FaGlobe, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Header with fixed position, appears below any announcement banner */}
      <header className="fixed top-0 left-0 w-full bg-white z-40 border-b border-gray-200">
        <div className="flex items-center justify-between px-10 py-4">
          {/* Left navigation */}
          <nav className="flex items-center gap-6 text-sm text-gray-700 font-medium">
            <Link href="/recipes" className="hover:text-gray-900">RECIPES</Link>
            <Link href="" className="hover:text-gray-900">VIDEOS</Link>
            <Link href="" className="hover:text-gray-900">STORIES</Link>
            <Link href="" className="hover:text-gray-900">COMMUNITY</Link>
            <Link href="" className="hover:text-gray-900">KITCHEN</Link>
            <Link href="" className="hover:text-gray-900">SHOP</Link>

          </nav>

          {/* Centered logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Cookaroo Logo"
                width={140}
                height={35}
                priority
              />
            </Link>
          </div>
          {/* Right side: Actions */}
          <div className="flex items-center gap-5">
  
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-48">
              <FaSearch className="text-gray-500 mr-2 text-sm" />
              <input
                type="text"
                placeholder="Search for recipe"
                className="outline-none w-full text-sm text-gray-700 bg-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaHeart className="text-gray-500 text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">3</span>
              </div>
              <FaUser className="text-gray-500 text-lg" />
              <FaShoppingCart className="text-gray-500 text-lg" />
              <FaGlobe className="text-gray-500 text-lg" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding under the fixed header */}
      <div className="h-16"></div>
    </>
  );
}