"use client";

import Image from "next/image";

export default function NewestRecipes() {
  // Food recipe cards data
  const recipeCards = [
    {
      image: "/shrimp.jpg",
      title: "Garlic Butter Shrimp Pasta",
      time: "15 mins",
      rating: 5,
      reviews: 18,
      isNew: true
    },
    {
      image: "/riso.jpg",
      title: "Creamy Mushroom Risotto",
      time: "18 mins",
      rating: 5,
      reviews: 24,
      isNew: true
    }
  ];

  // News-style article listings
  const newsArticles = [
    {
      category: "GROCERY",
      timeAgo: "35 MINUTES AGO",
      title: "Trader Joe's Fans Are 'Taking Home 5' Boxes of This Seasonal Treat",
      image: "/cros.jpg" // Replace with your actual image path
    },
    {
      category: "TRENDS",
      timeAgo: "1 HOUR AGO",
      title: "Our Most-Saved Mother's Day Recipe of All Time Is 'Sensational'",
      image: "/toast.jpg" // Replace with your actual image path
    },
    {
      category: "GROCERY",
      timeAgo: "2 HOURS AGO",
      title: "These $3 Aldi Cookies Are So Good, Fans Say They're 'Gone in 60 Seconds'",
      image: "/vege.jpg" // Replace with your actual image path
    }
  ];

  return (
    <section className="container mx-auto px-4 md:px-10 py-12">
      <h3 className="text-2xl font-medium mb-6" style={{ fontFamily:'MyCustomFont' }}>Newest Recipes</h3>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Recipe Cards - 2/3 of the space */}
        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row gap-6">
            {recipeCards.map((recipe, index) => (
              <div key={index} className="md:w-1/2 relative">
                <div className="relative">
                  <Image
                    src={recipe.image}
                    width={300}
                    height={200}
                    alt={recipe.title}
                    className="w-full object-cover aspect-[4/3]"
                  />
                  {recipe.isNew && (
                    <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow">
                      <span className="text-xs font-medium px-2 py-0.5 bg-white rounded-full">New</span>
                    </div>
                  )}
                </div>
                <h4 className="mt-3 text-lg font-medium" style={{ fontFamily:'MyCustomFont' }}>{recipe.title}</h4>
                <p className="text-sm text-gray-600">Total time: {recipe.time}</p>
                <div className="flex items-center mt-1">
                  {[...Array(recipe.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({recipe.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Articles - 1/3 of the space */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="space-y-4">
            {newsArticles.map((article, index) => (
              <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
                <div className="flex gap-3">
                  <div className="w-1/4">
                    <div className="relative aspect-square">
                      <Image
                        src={article.image}
                        width={80}
                        height={80}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-3/4">
                    <div className="flex flex-wrap items-center gap-x-2 mb-1">
                      <span className="text-gray-600 font-medium text-xs" style={{ fontFamily:'MyCustomFont' }}>{article.category}</span>
                      <span className="text-gray-400 text-xs">|</span>
                      <span className="text-gray-500 text-xs">{article.timeAgo}</span>
                    </div>
                    <h4 className="text-sm font-bold leading-tight" style={{ fontFamily:'MyCustomFont' }}>{article.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}