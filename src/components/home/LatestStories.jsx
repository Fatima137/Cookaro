import Image from "next/image";

const LatestStories = () => {
  const stories = [
    {
      id: 1,
      title: "5 Kitchen Hacks You Didn't Know",
      image: "/interior.jpg",
      description:
        "Unlock 5 genius kitchen hacks you can try today—from peeling garlic in seconds to keeping herbs fresh longer. Simple, smart, and totally doable at home!",
    },
    {
      id: 2,
      title: "How to Master Sourdough",
      image: "/dough.jpg",
      description:
        "Learn the art of sourdough—from creating your own starter to perfecting the crust. A step-by-step guide for beginners and home bakers ready to level up.",
    },
    {
      id: 3,
      title: "Seasonal Ingredients Guide",
      image: "/capsicum.jpg",
      description:
        "Explore what's in season and how to make the most of it—our guide helps you pick the freshest ingredients for every time of year, with recipe ideas to match.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium mb-8">Latest Stories</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={story.image}
                fill
                alt={story.title}
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-medium">{story.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestStories;