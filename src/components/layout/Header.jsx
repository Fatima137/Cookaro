import Link from "next/link";
import { FaHeart, FaUser, FaShoppingCart, FaGlobe, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 border-b border-gray-200 w-full">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="text-4xl font-[var(--font-playfair)] text-gray-900 tracking-wide"
        >
          Cookaroo
        </Link>

        <nav className="flex gap-8 text-sm text-gray-700 font-medium tracking-wide">
        <Link href="/recipes" className="text-lg font-medium hover:underline">RECIPES</Link>
          <Link href="">VIDEOS</Link>
          <Link href="">STORIES</Link>
          <Link href="">COMMUNITY</Link>
          <Link href="">KITCHEN PRO</Link>
          <Link href="">SHOP</Link>
        </nav>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center gap-6">
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-1 w-64">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for recipe"
            className="outline-none w-full text-sm text-gray-700 bg-transparent"
          />
        </div>
        <div className="relative">
          <FaHeart className="text-gray-500 text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">3</span>
        </div>
        <FaUser className="text-gray-500 text-xl" />
        <FaShoppingCart className="text-gray-500 text-xl" />
        <FaGlobe className="text-gray-500 text-xl" />
      </div>
    </header>
  );
}