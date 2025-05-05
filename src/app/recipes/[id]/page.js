"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// This would normally come from a database or API
export default function RecipeDetailPage({ params }) {
  const { id } = params || { id: "1" };
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const [activeTab, setActiveTab] = useState("ingredients");

  // Mock recipe data - this would come from your API/database
  const recipe = {
    id: id,
    title: "French Toast Is Crispy,Perfection",
    author: "Christine Gallary",
    date: "May 5, 2025",
    rating: 4.8,
    reviewCount: 43,
    prepTime: "15 mins",
    cookTime: "45 mins",
    totalTime: "1 hour",
    servings: "6 servings",
    image: "/french-toast.jpg",
    description: "This delicious pull-apart cinnamon french toast casserole combines the best of both worlds: crispy edges and a soft, custardy center. It's perfect for weekend brunch or special holiday mornings when you want something impressive but easy to make ahead.",
    authorNote: "I've been making this recipe for years, and it's always a hit with my family. The secret is using day-old bread so it really soaks up the custard without becoming soggy. I like to prepare it the night before and bake it in the morning - the amazing cinnamon smell will wake everyone up!",
    ingredients: [
      "1 loaf (about 1 pound) brioche or challah bread, cut into 1-inch cubes",
      "8 large eggs",
      "2 cups whole milk",
      "1/2 cup heavy cream",
      "1/2 cup granulated sugar",
      "1/4 cup brown sugar, packed",
      "2 tablespoons vanilla extract",
      "1 tablespoon ground cinnamon",
      "1/4 teaspoon ground nutmeg",
      "1/4 teaspoon salt",
      "2 tablespoons unsalted butter, melted",
      "Powdered sugar, for serving",
      "Fresh blueberries, for serving",
      "Maple syrup, for serving"
    ],
    directions: [
      {
        step: 1,
        text: "Grease a 9x13-inch baking dish with butter or cooking spray. Place the bread cubes evenly in the dish."
      },
      {
        step: 2,
        text: "In a large bowl, whisk together eggs, milk, heavy cream, granulated sugar, brown sugar, vanilla, cinnamon, nutmeg, and salt until well combined."
      },
      {
        step: 3,
        text: "Pour the egg mixture evenly over the bread cubes, making sure all pieces are coated. Press down gently to help the bread absorb the custard."
      },
      {
        step: 4,
        text: "Cover with plastic wrap and refrigerate for at least 2 hours or overnight (preferred)."
      },
      {
        step: 5,
        text: "When ready to bake, preheat oven to 350°F (175°C). Remove the baking dish from the refrigerator while the oven preheats."
      },
      {
        step: 6,
        text: "Brush the top of the casserole with melted butter. Bake uncovered for 45-50 minutes, until puffed, golden brown, and set in the center."
      },
      {
        step: 7,
        text: "Let cool for 5 minutes, then dust with powdered sugar and top with fresh blueberries. Serve warm with maple syrup."
      }
    ],
    tips: [
      "Use day-old bread for the best texture",
      "You can add 1/4 cup of chopped nuts for extra crunch",
      "For a make-ahead option, prepare everything up to step 4 and refrigerate overnight",
      "Leftovers can be stored covered in the refrigerator for up to 3 days and reheated in the microwave"
    ],
    nutrition: {
      calories: 425,
      fat: "22g",
      carbs: "43g",
      protein: "14g",
      sugar: "23g",
      fiber: "1g"
    },
    tags: ["breakfast", "brunch", "french toast", "casserole", "make ahead"]
  };

  // Mock similar recipes
  const similarRecipes = [
    {
      id: "13",
      title: "Classic Buttermilk Pancakes",
      image: "/pancakes.jpg",
      rating: 4.9,
      reviewCount: 128
    },
    {
      id: "14",
      title: "Overnight Blueberry French Toast Casserole",
      image: "/blueberry-french-toast.jpg",
      rating: 4.7,
      reviewCount: 76
    },
    {
      id: "15",
      title: "Fluffy Belgian Waffles",
      image: "/waffles.jpg",
      rating: 4.8,
      reviewCount: 92
    }
  ];

  // Mock reviews
  const reviews = [
    {
      id: "1",
      user: "BrunchLover22",
      date: "April 30, 2025",
      rating: 5,
      text: "This recipe is absolutely amazing! My family couldn't get enough of it. The crispy edges and custardy center are perfection. I added some chopped pecans on top which gave it a nice crunch."
    },
    {
      id: "2",
      user: "CookingMama",
      date: "April 27, 2025",
      rating: 5,
      text: "Made this for Easter brunch and it was a huge hit! I prepared it the night before and it was so easy to just pop in the oven in the morning. Will definitely make again!"
    },
    {
      id: "3",
      user: "FoodieDad",
      date: "April 25, 2025",
      rating: 4,
      text: "Great recipe but I found it a bit too sweet for my taste. Next time I'll reduce the sugar. The texture was spot on though - crispy outside and soft inside."
    }
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for submitting your ${rating}-star review!`);
    setReviewText("");
    setRating(5);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-16">
      {/* Recipe header */}
      <header className="relative w-full h-96">
        <Image
          src={recipe.image || "/placeholder.jpg"}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-white">
              <div className="mb-2">
                <span className="text-sm font-medium bg-green-700 text-white px-2 py-1">
                  RECIPES
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
                {recipe.title}
              </h1>
              <div className="flex items-center text-sm">
                <span>By {recipe.author}</span>
                <span className="mx-2">•</span>
                <span>{recipe.date}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Recipe info bar */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-200 py-4 mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            {renderStars(recipe.rating)}
            <span className="ml-2 text-sm">
              {recipe.rating} ({recipe.reviewCount} reviews)
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium">Prep Time:</span> {recipe.prepTime}
            </div>
            <div>
              <span className="font-medium">Cook Time:</span> {recipe.cookTime}
            </div>
            <div>
              <span className="font-medium">Total Time:</span> {recipe.totalTime}
            </div>
            <div>
              <span className="font-medium">Servings:</span> {recipe.servings}
            </div>
          </div>
        </div>

        {/* Recipe description */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed">{recipe.description}</p>
        </div>

        {/* Author's note */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-10">
          <h2 className="font-medium text-lg mb-2">Author&apos;s Note</h2>
          <p className="italic">{recipe.authorNote}</p>
        </div>

        {/* Recipe content tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                className={`py-4 font-medium text-sm ${
                  activeTab === "ingredients"
                    ? "border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                INGREDIENTS
              </button>
              <button
                className={`py-4 font-medium text-sm ${
                  activeTab === "directions"
                    ? "border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("directions")}
              >
                DIRECTIONS
              </button>
              <button
                className={`py-4 font-medium text-sm ${
                  activeTab === "nutrition"
                    ? "border-b-2 border-black"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("nutrition")}
              >
                NUTRITION
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === "ingredients" && (
              <div>
                <h2 className="sr-only">Ingredients</h2>
                <ul className="space-y-4">
                  {recipe.ingredients
                    .slice(0, showAllIngredients ? recipe.ingredients.length : recipe.ingredients.length)
                    .map((ingredient, index) => (
                      <li key={index} className="flex items-baseline">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-4 mt-2"></div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {activeTab === "directions" && (
              <div>
                <h2 className="sr-only">Directions</h2>
                <ol className="space-y-8">
                  {recipe.directions.map((direction) => (
                    <li key={direction.step} className="flex">
                      <div className="mr-6">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-medium">
                          {direction.step}
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p>{direction.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div>
                <h2 className="font-medium mb-4">Nutrition Information</h2>
                <p className="text-sm text-gray-500 mb-4">Per serving</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-600">Calories</div>
                    <div className="font-medium">{recipe.nutrition.calories}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-600">Fat</div>
                    <div className="font-medium">{recipe.nutrition.fat}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-600">Carbs</div>
                    <div className="font-medium">{recipe.nutrition.carbs}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-600">Protein</div>
                    <div className="font-medium">{recipe.nutrition.protein}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-600">Sugar</div>
                    <div className="font-medium">{recipe.nutrition.sugar}</div>
                  </div>
                  <div className="border-b pb-2">
                    <div className="text-sm text-gray-600">Fiber</div>
                    <div className="font-medium">{recipe.nutrition.fiber}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recipe tips */}
        <div className="mb-12">
          <h2 className="text-xl font-medium mb-4">Recipe Tips</h2>
          <ul className="list-disc pl-5 space-y-2">
            {recipe.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h2 className="text-sm font-medium uppercase mb-3">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="bg-gray-100 hover:bg-gray-200 px-3 py-1 text-sm rounded-full"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Similar recipes */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarRecipes.map((similarRecipe) => (
              <Link key={similarRecipe.id} href={`/recipes/${similarRecipe.id}`} className="group">
                <div className="relative h-48 mb-3 overflow-hidden">
                  <Image
                    src={similarRecipe.image || "/placeholder.jpg"}
                    alt={similarRecipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-2 group-hover:underline">{similarRecipe.title}</h3>
                <div className="flex items-center">
                  {renderStars(similarRecipe.rating)}
                  <span className="ml-2 text-xs text-gray-500">
                    ({similarRecipe.reviewCount})
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Reviews section */}
        <div>
          <h2 className="text-2xl font-serif mb-6">Reviews ({reviews.length})</h2>

          {/* Review form */}
          <div className="bg-gray-50 p-6 mb-8 border border-gray-200">
            <h3 className="text-lg font-medium mb-4">Write a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <svg
                        className={`w-8 h-8 ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="block text-sm font-medium mb-2">
                  Your Review
                </label>
                <textarea
                  id="review"
                  rows={4}
                  className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="What did you think of this recipe? Did you make any modifications?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Review list */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{review.user}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}