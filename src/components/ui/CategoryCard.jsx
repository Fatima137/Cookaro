import Image from "next/image";

export default function CategoryCard({ image, title }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image
        src={image}
        width={400}
        height={300}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <span className="bg-black/70 text-white px-6 py-2 rounded-full font-medium">
          {title}
        </span>
      </div>
    </div>
  );
}