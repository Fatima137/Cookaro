"use client";

import Image from "next/image";

export default function ProKitchenSection() {
  return (
    <section className="container mx-auto py-12">
      <div className="bg-gray-800 rounded-lg px-10 py-12">
        <h3 className="text-2xl font-medium mb-8 text-white text-center">From the Pro Kitchen</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pro Kitchen Item 1 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/knife.jpg"
                fill
                alt="Knife Skills"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-white text-lg font-medium">Knife Skills Every Chef Should Know</h4>
            </div>
          </div>
          
          {/* Pro Kitchen Item 2 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/ramen.jpg"
                fill
                alt="Pasta Techniques"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-white text-lg font-medium">Secrets to Perfect Pasta Every Time</h4>
            </div>
          </div>
          
          {/* Pro Kitchen Item 3 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/plate.jpg"
                fill
                alt="Plating Techniques"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-white text-lg font-medium">10 Plating Techniques to Impress</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}