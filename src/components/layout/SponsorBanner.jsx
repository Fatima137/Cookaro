export default function SponsorBanner() {
    return (
      <div className="bg-[#F8FAF7] py-3 border-b border-[#B3A88F]">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="w-20 hidden sm:block">
            <div className="w-14 h-6 bg-white rounded flex items-center justify-center shadow-sm">
              <span className="text-[#0B0A08] text-xs">LOGO</span>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="border-l border-r border-[#B3A88F] px-4 md:px-6 py-1">
              <p className="text-[#0B0A08] text-xs md:text-sm tracking-wide font-light">
                <span className="font-medium">Le Creuset Spring Collection</span> — Discover the new season's colors
              </p>
            </div>
          </div>
          
          <div className="w-20 flex justify-end">
            <button className="border border-[#B3A88F] px-2 py-0.5 text-xs text-[#0B0A08] bg-white hover:bg-[#F8FAF7] transition-colors shadow-sm">
              View
            </button>
          </div>
        </div>
      </div>
    );
  }
  