import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAF7] text-[#38301B] pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/image/logo.png"
                alt="Cookaroo Logo"
                width={200}
                height={60}
                className="mb-4"
              />
              <div className="w-24 h-1 bg-[#B3A88F] mb-6"></div>
              <p className="text-[#38301B] max-w-md text-sm md:text-base">
                Bringing flavor to your feed—one recipe at a time. Discover culinary inspiration, cooking techniques, and food stories from around the world.
              </p>
            </div>
            
            {/* Newsletter signup - Added feature */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white border border-[#B3A88F] text-[#38301B] p-2 text-sm rounded-l w-full focus:outline-none focus:border-[#38301B]"
                />
                <button className="bg-[#B3A88F] hover:bg-[#38301B] hover:text-[#F8FAF7] text-[#38301B] px-4 py-2 text-sm rounded-r transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          
          {/* Footer links in columns */}
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2.5 text-[#38301B] text-sm">
              <li><Link href="/about" className="hover:text-[#B3A88F] transition-colors">Our Story</Link></li>
              <li><Link href="/team" className="hover:text-[#B3A88F] transition-colors">Team</Link></li>
              <li><Link href="/careers" className="hover:text-[#B3A88F] transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-[#B3A88F] transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2.5 text-[#38301B] text-sm">
              <li><Link href="/recipes" className="hover:text-[#B3A88F] transition-colors">Recipe Index</Link></li>
              <li><Link href="/videos" className="hover:text-[#B3A88F] transition-colors">Cooking Videos</Link></li>
              <li><Link href="/meal-plans" className="hover:text-[#B3A88F] transition-colors">Meal Plans</Link></li>
              <li><Link href="/tips" className="hover:text-[#B3A88F] transition-colors">Cooking Tips</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2.5 text-[#38301B] text-sm">
              <li><Link href="/community" className="hover:text-[#B3A88F] transition-colors">Community</Link></li>
              <li><Link href="/forums" className="hover:text-[#B3A88F] transition-colors">Forums</Link></li>
              <li><Link href="/events" className="hover:text-[#B3A88F] transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-[#B3A88F] transition-colors">Contact Us</Link></li>
              <li><Link href="/feedback" className="hover:text-[#B3A88F] transition-colors">Feedback</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Social media icons */}
        <div className="flex justify-center gap-6 mb-8">
          <Link href="" className="text-[#38301B] hover:text-[#B3A88F] transition-colors">
            <FaFacebook size={20} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="" className="text-[#38301B] hover:text-[#B3A88F] transition-colors">
            <FaInstagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="" className="text-[#38301B] hover:text-[#B3A88F] transition-colors">
            <FaTwitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="" className="text-[#38301B] hover:text-[#B3A88F] transition-colors">
            <FaPinterest size={20} />
            <span className="sr-only">Pinterest</span>
          </Link>
          <Link href="" className="text-[#38301B] hover:text-[#B3A88F] transition-colors">
            <FaYoutube size={20} />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
        
        {/* Copyright and legal */}
        <div className="border-t border-[#B3A88F] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#38301B] text-xs md:text-sm mb-4 md:mb-0">
            © 2025 Cookaroo. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs md:text-sm text-[#38301B]">
            <Link href="/privacy" className="hover:text-[#B3A88F] transition-colors">Privacy Policy</Link>
            <span className="mx-1">•</span>
            <Link href="/terms" className="hover:text-[#B3A88F] transition-colors">Terms & Conditions</Link>
            <span className="mx-1">•</span>
            <Link href="/accessibility" className="hover:text-[#B3A88F] transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}