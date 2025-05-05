import Image from "next/image";
import Link from "next/link";

export default function ShopItem({ image, title, description }) {
  return (
    <div className="relative">
      <div className="absolute top-4 left-4 text-sm text-gray-600 font-medium">
        in the shop
      </div>
      <Image
        src={image}
        width={250}
        height={250}
        alt={title}
        className="rounded-lg object-cover w-full aspect-square"
      />
      <div className="mt-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <Link href="" className="text-sm text-gray-500 flex items-center mt-2">
          SHOP NOW <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}