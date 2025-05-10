export default function SponsorBanner() {
  return (
    <div className="bg-[#38301B] py-0.5">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <div className="flex items-center w-full max-w-xl mx-auto rounded-full bg-[#38301B] px-4 py-0 gap-2 min-h-7">
          {/* Sponsor Logo/Icon */}
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#B3A88F] mr-1">
            <span className="text-[#38301B] text-xs font-bold tracking-tight">LC</span>
          </div>
          {/* Sponsor Text */}
          <div className="flex-1 text-center">
            <span className="text-[#F8FAF7] text-xs font-medium tracking-wide">
              Le Creuset Spring Collection
            </span>
            <span className="mx-1 text-[#B3A88F] text-xs font-light hidden sm:inline">•</span>
            <span className="text-[#F8FAF7] text-xs font-light">Discover the new season's colors</span>
          </div>
          {/* View Button */}
          <div className="flex items-center">
            <button className="bg-[#B3A88F] hover:bg-[#F8FAF7] hover:text-[#38301B] text-[#38301B] px-2 py-0.5 rounded-full text-xs font-semibold transition-colors duration-200 flex items-center gap-0.5 min-h-5">
              <span>View</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  