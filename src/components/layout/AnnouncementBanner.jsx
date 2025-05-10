// AnnouncementBanner.jsx
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-white text-center py-2 px-4 text-[#38301B] w-full relative border-b border-[#ECECEC] shadow-sm">
      <div className="container mx-auto flex items-center justify-center">
        <span className="text-[#38301B] font-semibold mr-2">🔥 New Summer Grilling Recipes Added!</span>
        <span className="text-[#B3A88F] text-sm">
          Check out our <a href="/easter-guide" className="underline font-medium hover:text-[#38301B] transition-colors">Easter Baking Guide</a>!
        </span>
        <button 
          className="absolute right-4 text-[#38301B] hover:text-[#B3A88F] transition-colors"
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
