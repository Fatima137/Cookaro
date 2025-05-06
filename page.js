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
    title: "Pull-Apart Cinnamon French Toast Is Crispy, Custardy Perfection",
    author: "Christine Gallary",
    date: "May 5, 2025",
    rating: 4.8,
    reviewCount: 43,
    prepTime: "15 mins",
    cookTime: "45 mins",
    totalTime: "1 hour",
    servings: "6 servings",
    image: "/french.jpg",
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
    <div className="bg-white min-h-screen pb-16">
      {/* Recipe header - redesigned to match reference */}
      <header className="max-w-4xl mx-auto pt-12 px-4">
        <div className="text-center mb-6">
          <div className="mb-2">
            <span className="uppercase text-gray-500 tracking-widest text-sm font-medium">
              BREAKFAST
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
            {recipe.title}
          </h1>
          <div className="text-sm text-gray-600 mb-2">
            by {recipe.author} | {recipe.date}
          </div>
          <div className="flex items-center justify-center">
            {renderStars(recipe.rating)}
            <span className="ml-2 text-sm">
              {recipe.rating} ({recipe.reviewCount} ratings) • <a href="#reviews" className="text-blue-600 hover:underline">View {recipe.reviewCount} Reviews</a>
            </span>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <button className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Recipe image */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={recipe.image || "/placeholder.jpg"}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          PHOTO BY {recipe.author.toUpperCase()}
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex space-x-4">
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            SAVE
          </button>
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            REVIEW
          </button>
          <button className="flex items-center text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            PRINT
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Recipe info bar */}
        <div className="flex flex-wrap justify-between items-center border-t border-b border-gray-200 py-4 mb-8">
          <div className="flex flex-wrap gap-6 text-sm mx-auto">
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
        <div id="reviews">
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