import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="mb-2">
              <Image
                src="/logo.png" // Update this path to your actual logo file
                alt="Cookaroo Logo"
                width={150}
                height={40} // This makes the logo white for dark background
              />
            </div>
            <div className="w-36 h-1 bg-orange-500 mb-4"></div>
            <p className="text-gray-400 max-w-md">
              Bringing flavor to your feed—one recipe at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="">Our Story</Link></li>
                <li><Link href="">Team</Link></li>
                <li><Link href="">Careers</Link></li>
                <li><Link href="">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="">Recipe Index</Link></li>
                <li><Link href="">Cooking Videos</Link></li>
                <li><Link href="">Meal Plans</Link></li>
                <li><Link href="">Cooking Tips</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="">Community</Link></li>
                <li><Link href="">Forums</Link></li>
                <li><Link href="">Events</Link></li>
                <li><Link href="">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="">Privacy Policy</Link></li>
                <li><Link href="">Terms & Conditions</Link></li>
                <li><Link href="">Contact Us</Link></li>
                <li><Link href="">Feedback</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Cookaroo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <FaUser className="h-6 w-6" />
            </Link>
            <Link href="" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <FaUser className="h-6 w-6" />
            </Link>
            <Link href="" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}