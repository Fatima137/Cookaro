"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Featured recipes section
  const featuredRecipes = [
    {
      id: "1",
      title: "Shrimp",
      author: "Janette Zepeda",
      date: "2 DAYS AGO",
      image: "/shrimp-cocktail.jpg",
      category: "RECIPES"
    },
    {
      id: "2",
      title: "Japanese Cheesecake",
      author: "Yohomakesalami",
      date: "2 DAYS AGO",
      image: "/japanese-cheesecake.jpg",
      category: "RECIPES"
    },
    {
      id: "3",
      title: "Vietnamese Sauce Chicken",
      author: "Kristina Razon",
      date: "2 DAYS AGO",
      image: "/vietnamese-sauce.jpg",
      category: "RECIPES"
    },
    {
      id: "4",
      title: "12 Casserole Dinners",
      author: "Stephanie Ganz",
      date: "3 DAYS AGO",
      image: "/kid-casserole.jpg",
      category: "RECIPES"
    }
  ];

  // Quick suppers section
  const quickSuppers = [
    {
      id: "5",
      title: "Shrimp",
      author: "Janette Zepeda",
      date: "2 DAYS AGO",
      image: "/shrimp-cocktail.jpg"
    },
    {
      id: "6",
      title: "Chicken",
      author: "Meghan Splawn",
      date: "3 DAYS AGO",
      image: "/chicken-enchiladas.jpg"
    },
    {
      id: "7",
      title: "20-Minute Dinner",
      author: "Kelli Foster",
      date: "MAY 1, 2023",
      image: "/quick-dinner.jpg"
    },
    {
      id: "8",
      title: "Fish Tacos",
      author: "Vanessa Barrington",
      date: "MAY 1, 2023",
      image: "/fish-tacos.jpg"
    }
  ];

  // Pasta section
  const pastaRecipes = [
    {
      id: "9",
      title: "25 Italian Recipes",
      author: "Sheela Prakash",
      date: "APR 24, 2023",
      image: "/italian-recipes.jpg"
    },
    {
      id: "10",
      title: "Italian Pasta",
      author: "Ali Domrongchai",
      date: "APR 20, 2023",
      image: "/pasta-staple.jpg"
    },
    {
      id: "11",
      title: "4-Ingredient Italian Pasta",
      author: "Melissa Gaman",
      date: "APR 16, 2023",
      image: "/cream-pasta.jpg"
    },
    {
      id: "12",
      title: "Italian Pasta",
      author: "Laura Rege",
      date: "APR 4, 2023",
      image: "/family-pasta.jpg"
    }
  ];

  // Recipe categories for navigation
  const categories = [
    ["APPETIZERS & SNACKS", "DESSERTS", "MAIN DISHES", "SIDE DISHES", "BREAKFAST", "BEVERAGES", "BREADS", "SAUCES & MARINADES"],
    ["SPREADS & FLAVORINGS", "SALADS", "SOUPS & STEWS", "HOMEMADE STAPLES", "WHAT TO MAKE WITH", "LUNCH", "METHODS", "ROUNDUPS & MENUS"]
  ];

  // Popular tags
  const popularTags = ["CASSEROLE", "CHICKEN", "EASTER"];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-serif mb-8">Recipes</h1>
        
        {/* Category navigation */}
        <div className="max-w-6xl mx-auto mb-4">
          <p className="text-sm mb-2">EXPLORE:</p>
          {categories.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-2 mb-2">
              {row.map((category) => (
                <Link 
                  key={category} 
                  href={`#${category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                  className="px-4 py-2 border border-gray-300 text-sm hover:bg-gray-100"
                >
                  {category}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="max-w-xl mx-auto flex mt-8 mb-4">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              className="w-full p-4 pl-10 text-sm border border-gray-300 focus:outline-none" 
              placeholder="Find 9,000 expertly-tested recipes!" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="px-6 bg-black text-white font-medium text-sm"
            >
              SEARCH
            </button>
          </div>
        </div>

        {/* Popular tags */}
        <div className="flex justify-center gap-4 mt-4">
          {popularTags.map((tag) => (
            <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className="px-3 py-1 text-sm">
              {tag}
            </Link>
          ))}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4">
        {/* Featured recipes */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
                <div className="mb-2">
                  <div className="relative h-48 mb-2 overflow-hidden">
                    <Image
                      src={recipe.image || "/placeholder.jpg"}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs font-medium text-green-800 mb-1">{recipe.category}</div>
                  <h3 className="font-medium mb-1 group-hover:underline">{recipe.title}</h3>
                  <div className="text-xs text-gray-500">By {recipe.author} · {recipe.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Suppers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Quick Suppers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSuppers.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
                <div className="mb-2">
                  <div className="relative h-48 mb-2 overflow-hidden">
                    <Image
                      src={recipe.image || "/placeholder.jpg"}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium mb-1 group-hover:underline">{recipe.title}</h3>
                  <div className="text-xs text-gray-500">By {recipe.author} · {recipe.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pasta Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Pasta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastaRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
                <div className="mb-2">
                  <div className="relative h-48 mb-2 overflow-hidden">
                    <Image
                      src={recipe.image || "/placeholder.jpg"}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium mb-1 group-hover:underline">{recipe.title}</h3>
                  <div className="text-xs text-gray-500">By {recipe.author} · {recipe.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 my-8">
          <span className="px-3 py-1 bg-gray-200 text-gray-800">1</span>
          <Link href="/recipes/page/2" className="px-3 py-1 hover:bg-gray-100">2</Link>
          <Link href="/recipes/page/3" className="px-3 py-1 hover:bg-gray-100">3</Link>
          <Link href="/recipes/page/4" className="px-3 py-1 hover:bg-gray-100">4</Link>
          <Link href="/recipes/page/5" className="px-3 py-1 hover:bg-gray-100">5</Link>
          <span className="px-3">...</span>
          <Link href="/recipes/page/220" className="px-3 py-1 hover:bg-gray-100">220</Link>
          <Link href="/recipes/page/2" className="flex items-center px-3 py-1 hover:bg-gray-100">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}