"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipesHomepage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Category circles for navigation with real images
  const categoryCircles = [
    { name: 'Breakfast', image: '/break.webp' },
    { name: 'Dinner', image: '/diner.jpg' },
    { name: 'Desserts', image: '/oreo.jpg' },
    { name: 'Pasta', image: '/cof.jpg' },
    { name: 'Salad', image: '/salad.jpg' },
    { name: 'Soup', image: '/soup.jpg' },
    { name: 'Vegan', image: '/vegan.jpg' },
    { name: 'Cocktails', image: '/cocktails.jpg' },
  ];

  // Category filter tags
  const filterTags = [
    'Popular', 'Seasonal', 'Quick & Easy', 'Vegetarian', 'Gluten-Free', 'Breakfast', 'Lunch', 'Dinner'
  ];

  // Featured recipes with real images
  const featuredRecipes = [
    {
      id: 1, 
      title: 'Lobio (Georgian Bean Stew) with Mchadi Cornbread',
      category: 'Vegan',
      author: 'Noah Tanen',
      date: 'May 1, 2025',
      image: '/brioche.jpg',
      rating: 4.5,
      reviews: 12
    },
    {
      id: 2, 
      title: 'Mushroom Pulled Pork',
      category: 'Vegan',
      author: 'Halie Burns',
      date: 'April 28, 2025',
      image: '/brekky.jpg',
      rating: 4.7,
      reviews: 8
    },
    {
      id: 3, 
      title: 'Hazelnut Hasselback Potato Gratin',
      category: 'Side Dish',
      author: 'Hetty Lui McKinnon',
      date: 'April 25, 2025',
      image: '/din.jpg',
      rating: 4.8,
      reviews: 15
    },
    {
      id: 4, 
      title: 'Creamed Greens with Miso Breadcrumbs',
      category: 'Side Dish',
      author: 'Shaina Liebman',
      date: 'April 20, 2025',
      image: '/diner.jpg',
      rating: 4.2,
      reviews: 7
    }
  ];

  // Quick suppers with real images
  const quickSuppers = [
    {
      id: 5, 
      title: 'Sheet Pan Honey Mustard Chicken',
      author: 'Food52',
      date: 'April 15, 2025',
      image: '/grill.jpg',
      rating: 4.6,
      reviews: 23
    },
    {
      id: 6, 
      title: 'Leftover Chicken Croquette With Marinara Sauce',
      author: 'Millie Peartree',
      date: 'April 12, 2025',
      image: '/lunch.webp',
      rating: 4.3,
      reviews: 9
    },
    {
      id: 7, 
      title: 'Classic Coq au Vin',
      author: 'Joy of Cooking',
      date: 'April 8, 2025',
      image: '/pizza.jpg',
      rating: 4.9,
      reviews: 31
    },
    {
      id: 8, 
      title: 'Calabrian Chili Chicken Wings',
      author: 'Noah Tanen',
      date: 'April 5, 2025',
      image: '/dump.jpg',
      rating: 4.7,
      reviews: 14
    }
  ];

  // Bread recipes with real images
  const breadRecipes = [
    {
      id: 9, 
      title: 'Italian Tomato Pie',
      author: 'Noah Tanen',
      date: 'March 30, 2025',
      image: '/toast.jpg',
      rating: 4.8,
      reviews: 18
    },
    {
      id: 10, 
      title: 'Smoked Mozzarella Pão de Queijo',
      author: 'César Pérez',
      date: 'March 25, 2025',
      image: '/waf.jpg',
      rating: 4.5,
      reviews: 11
    },
    {
      id: 11, 
      title: 'Saffron Bun Cake',
      author: 'Nea Arentzen',
      date: 'March 22, 2025',
      image: '/cake1.jpg',
      rating: 4.6,
      reviews: 16
    },
    {
      id: 12, 
      title: 'Milk Buns with Salted Maple Butter',
      author: 'Nea Arentzen',
      date: 'March 20, 2025',
      image: '/oreo.jpg',
      rating: 4.9,
      reviews: 27
    }
  ];

  // Chefs - Residents with real images
  const chefs = [
    {
      id: 1,
      name: 'Erin Jeanne McDowell',
      specialty: 'Bake it Up a Notch',
      image: '/chef1.jpg'
    },
    {
      id: 2,
      name: 'Harper Fendler',
      specialty: 'Cocktail Class',
      image: '/chef2.jpg'
    },
    {
      id: 3,
      name: 'Lucas Sin',
      specialty: 'Why It Works',
      image: '/chef3.jpg'
    }
  ];

  // Render a single recipe card
  const RecipeCard = ({ recipe }) => (
    <Link href={`/recipes/${recipe.id}`} className="group">
      <div className="mb-4">
        <div className="relative h-48 mb-2 overflow-hidden rounded">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="text-xs font-medium text-green-700 mb-1">{recipe.category}</div>
        <h3 className="font-medium mb-1 group-hover:underline line-clamp-2">{recipe.title}</h3>
        <div className="text-xs text-gray-500">By {recipe.author} · {recipe.date}</div>
        
        {recipe.rating && (
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(recipe.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({recipe.reviews})</span>
          </div>
        )}
      </div>
    </Link>
  );

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header with background image */}
      <header className="text-center py-12 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/images/header-bg.jpg")', backgroundColor: 'rgba(255, 255, 255, 0.8)', backgroundBlendMode: 'overlay' }}>
        <h1 className="text-5xl font-serif mb-8">Recipes</h1>
        
        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative flex w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              className="w-full p-4 pl-10 text-sm border border-gray-300 focus:outline-none" 
              placeholder="Find expertly-tested recipes!" 
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

        {/* Category circles */}
        <div className="flex justify-center flex-wrap gap-8 max-w-4xl mx-auto mb-8">
          {categoryCircles.map((category) => (
            <Link key={category.name} href={`/recipes/category/${category.name.toLowerCase()}`} className="group">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-2 group-hover:shadow-md transition-shadow">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {filterTags.map((tag) => (
            <Link key={tag} href={`/recipes/tag/${tag.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
              className="px-4 py-2 bg-white border border-gray-200 text-sm hover:bg-gray-100 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {/* Featured section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-serif">Deliciously Vegan</h2>
            <Link href="/recipes/category/vegan" className="text-sm hover:underline">
              VIEW ALL RECIPES →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">Hearty, nourishing dishes that just happen to be plant-based.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Quick Suppers Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-serif">Quick Suppers</h2>
            <Link href="/recipes/category/quick-suppers" className="text-sm hover:underline">
              VIEW ALL RECIPES →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">Delicious weeknight meals ready in 30 minutes or less.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSuppers.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Bread Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-serif">Pass the Bread</h2>
            <Link href="/recipes/category/bread" className="text-sm hover:underline">
              VIEW ALL RECIPES →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">Rolls, baguettes, boules, sandwich loaves, and more.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breadRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Meet Our Residents Section */}
        <section className="mb-16 text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-stone-50 px-4 text-2xl font-serif">Meet Our Residents</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate dream team—our residents will teach you everything you ever wanted to know about dinner-wrangling, dessert-whispering, and then some.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {chefs.map((chef) => (
              <div key={chef.id} className="text-center">
                <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium">{chef.name}</h3>
                <p className="text-sm text-gray-500">{chef.specialty}</p>
                <Link href={`/residents/${chef.id}`} className="text-xs mt-2 inline-block hover:underline">
                  VIEW MORE →
                </Link>
              </div>
            ))}
          </div>
          
          <Link href="/residents" className="inline-block mt-4 px-4 py-2 border border-gray-300 text-sm hover:bg-gray-100">
            GET TO KNOW &apos;EM ALL
          </Link>
        </section>

        {/* Add a Recipe Section with background image */}
        <section className="p-8 mb-16 text-center bg-cover bg-center" 
                style={{ backgroundImage: 'url("/images/add-recipe-bg.jpg")', backgroundColor: 'rgba(219, 234, 254, 0.9)', backgroundBlendMode: 'overlay' }}>
          <h2 className="text-3xl font-serif mb-4">Add a New Recipe</h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto">
            Contribute your best original dishes to the cooking community&apos;s all-star collection
          </p>
          <Link href="/recipes/create" className="inline-block px-6 py-3 bg-black text-white font-medium text-sm hover:bg-gray-800">
            CREATE A RECIPE
          </Link>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 my-8">
          <span className="px-3 py-1 bg-gray-200 text-gray-800">1</span>
          <Link href="/recipes/page/2" className="px-3 py-1 hover:bg-gray-100">2</Link>
          <Link href="/recipes/page/3" className="px-3 py-1 hover:bg-gray-100">3</Link>
          <Link href="/recipes/page/4" className="px-3 py-1 hover:bg-gray-100">4</Link>
          <Link href="/recipes/page/5" className="px-3 py-1 hover:bg-gray-100">5</Link>
          <span className="px-3">...</span>
          <Link href="/recipes/page/20" className="px-3 py-1 hover:bg-gray-100">20</Link>
          <Link href="/recipes/page/2" className="flex items-center px-3 py-1 hover:bg-gray-100">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer with background image */}
      <footer className="py-10 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/images/footer-bg.jpg")', backgroundColor: 'rgba(243, 244, 246, 0.9)', backgroundBlendMode: 'overlay' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-serif mb-6">Never Miss a Recipe</h2>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 border border-r-0 border-gray-300 focus:outline-none" 
              />
              <button className="bg-black text-white px-6 py-2 text-sm font-medium">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}