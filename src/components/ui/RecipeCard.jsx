import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function RecipeCard({
  image, 
  title, 
  author, 
  time, 
  rating, 
  reviews, 
  isFavorite = false,
  isNew = false
}) {
  return (
    <div className="relative">
      <div className="relative">
        <Image
          src={image}
          width={300}
          height={200}
          alt={title}
          className="rounded-lg w-full object-cover aspect-[4/3]"
        />
        <button className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
          {isNew ? (
            <span className="text-xs font-medium px-2 py-0.5 bg-white rounded-full">New</span>
          ) : (
            <FaHeart className={`${isFavorite ? "text-red-500" : "text-gray-300 hover:text-red-500 transition-colors"}`} />
          )}
        </button>
      </div>
      <h4 className="mt-3 text-lg font-medium">{title}</h4>
      {author && <p className="text-sm text-gray-600">By {author}</p>}
      <p className="text-sm text-gray-600">Total time: {time}</p>
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        <span className="ml-2 text-sm text-gray-600">({reviews})</span>
      </div>
    </div>
  );
}