// AnnouncementBanner.jsx
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#38301B] text-center py-2.5 px-4 text-[#F8FAF7] w-full relative">
      <div className="container mx-auto flex items-center justify-center">
        <span className="text-[#B3A88F] font-semibold mr-2">🔥 New Summer Grilling Recipes Added!</span>
        <span className="text-[#F8FAF7] text-sm">
          Check out our <a href="/easter-guide" className="underline font-medium hover:text-[#B3A88F] transition-colors">Easter Baking Guide</a>!
        </span>
        <button 
          className="absolute right-4 text-[#F8FAF7] hover:text-[#B3A88F] transition-colors"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
        >
          <FaTimes size={14} />
        </button>
      </div>
    </div>
  );
}

// SponsorBanner.jsx
