import Image from "next/image";

export default function StoryCard({ image, title, description }) {
  return (
    <div className="flex flex-col">
      <div className="relative h-48">
        <Image
          src={image}
          width={300}
          height={200}
          alt={title}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <h3 className="mt-4 text-xl font-medium">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}