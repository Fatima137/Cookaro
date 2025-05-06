'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This would be a dynamic page to display recipes by category
export default function CategoryPage({ params }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [filterOptions, setFilterOptions] = useState({
    difficulty: [],
    cookTime: '',
    mealType: [],
    ingredients: [],
  });
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;

  // In a real app, this would come from your database or API
  useEffect(() => {
    // This simulates fetching data based on the category
    const fetchCategoryData = () => {
      setLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        // Example category data based on the URL parameter
        const categoryData = {
          cake: {
            name: 'Cake Recipes',
            description: 'Our word: cake. There\'s every kinda recipe here—chocolate on chocolate, carrot with cream cheese frosting...oh, and bundts galore. Someone grab the flour and baking powder (and don\'t forget the birthday candles).',
            image: '/cake.jpg',
            bgColor: 'bg-amber-50',
            featureColor: 'bg-amber-100',
          },
          vegan: {
            name: 'Deliciously Vegan',
            description: 'Exciting plant-based recipes that everyone will love. From hearty mains to creative sides and sweet treats without animal products.',
            image: '/eg.jpg',
            bgColor: 'bg-green-50',
            featureColor: 'bg-green-100',
          },
          'quick-suppers': {
            name: 'Quick Suppers',
            description: 'Delicious weeknight meals ready in 30 minutes or less. Perfect for busy evenings when you want something tasty without the wait.',
            image: '/lunch.jpg',
            bgColor: 'bg-blue-50',
            featureColor: 'bg-blue-100',
          },
          bread: {
            name: 'Pass the Bread',
            description: 'Rolls, baguettes, boules, sandwich loaves, and more. From beginner-friendly recipes to advanced artisanal techniques.',
            image: '/brekky.jpg',
            bgColor: 'bg-amber-50',
            featureColor: 'bg-amber-100',
          }
        };
        
        const category = params.category || 'cake';
        setCategoryInfo(categoryData[category] || categoryData.cake); 
        
        // Generate mock recipes
        const mockRecipes = generateMockRecipes(category, 24);
        setRecipes(mockRecipes);
        setLoading(false);
      }, 500);
    };
    
    fetchCategoryData();
  }, [params.category]);

const generateMockRecipes = (category, count) => {
    const recipeTypes = {
      cake: ['Chocolate Cake', 'Carrot Cake', 'Bundt Cake', 'Coffee Cake', 'Pound Cake', 'Layer Cake', 'Cheesecake', 'Red Velvet', 'Lemon Cake'],
      vegan: ['Mushroom Stew', 'Tempeh Tacos', 'Lentil Soup', 'Chickpea Curry', 'Quinoa Bowl', 'Veggie Burger', 'Tofu Scramble', 'Cashew Pasta'],
      'quick-suppers': ['One-Pot Pasta', '15-Minute Stir Fry', 'Sheet Pan Dinner', 'Quick Curry', 'Speedy Risotto', 'Fast Frittata', 'Rapid Ramen Upgrade'],
      bread: ['Sourdough', 'Baguette', 'Sandwich Loaf', 'Dinner Rolls', 'Focaccia', 'Ciabatta', 'Rye Bread', 'Challah', 'Brioche']
    };
  
    const chefs = ['Sarah Johnson', 'Michael Chen', 'Priya Patel', 'James Wilson', 'Olivia Martinez', 'Marcus Bell', 'Emma Thompson'];
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const times = ['15 min', '30 min', '45 min', '1 hour', '1+ hours'];
    const ratings = [3, 3.5, 4, 4.5, 5];
    
    const selectedTypes = recipeTypes[category] || recipeTypes.cake;
    
    return Array.from({ length: count }, (_, i) => {
      const recipeType = selectedTypes[i % selectedTypes.length];
      const ratingValue = ratings[Math.floor(Math.random() * ratings.length)];
      const reviewCount = Math.floor(Math.random() * 200) + 5;
      
      // Assign each recipe an image from the public folder
      let recipeImage = '';
      switch (recipeType.split(' ')[0].toLowerCase()) {
        case 'chocolate':
          recipeImage = '/chocolate-cake.jpg';
          break;
        case 'carrot':
          recipeImage = '/carrot-cake.jpg';
          break;
        case 'bundt':
          recipeImage = '/bundt-cake.jpg';
          break;
        case 'coffee':
          recipeImage = '/cake.jpg';
          break;
        case 'pound':
          recipeImage = '/pound-cake.jpg';
          break;
        case 'layer':
          recipeImage = '/layer-cake.jpg';
          break;
        case 'cheesecake':
          recipeImage = '/cake1.jpg';
          break;
        case 'red':
          recipeImage = '/cake3.jpg';
          break;
        case 'lemon':
          recipeImage = '/cake2.jpg';
          break;
        case 'mushroom':
          recipeImage = '/mushroom-stew.jpg';
          break;
        case 'tempeh':
          recipeImage = '/tempeh-tacos.jpg';
          break;
        case 'lentil':
          recipeImage = '/lentil-soup.jpg';
          break;
        case 'chickpea':
          recipeImage = '/chickpea-curry.jpg';
          break;
        case 'quinoa':
          recipeImage = '/quinoa-bowl.jpg';
          break;
        case 'veggie':
          recipeImage = '/veggie-burger.jpg';
          break;
        case 'tofu':
          recipeImage = '/tofu-scramble.jpg';
          break;
        case 'cashew':
          recipeImage = '/cashew-pasta.jpg';
          break;
        case 'one-pot':
        case 'one':
          recipeImage = '/one-pot-pasta.jpg';
          break;
        case '15-minute':
        case '15':
          recipeImage = '/stir-fry.jpg';
          break;
        case 'sheet':
          recipeImage = '/sheet-pan.jpg';
          break;
        case 'quick':
          recipeImage = '/quick-curry.jpg';
          break;
        case 'speedy':
          recipeImage = '/risotto.jpg';
          break;
        case 'fast':
          recipeImage = '/frittata.jpg';
          break;
        case 'rapid':
          recipeImage = '/ramen.jpg';
          break;
        case 'sourdough':
          recipeImage = '/sourdough.jpg';
          break;
        case 'baguette':
          recipeImage = '/baguette.jpg';
          break;
        case 'sandwich':
          recipeImage = '/sandwich-loaf.jpg';
          break;
        case 'dinner':
          recipeImage = '/dinner-rolls.jpg';
          break;
        case 'focaccia':
          recipeImage = '/focaccia.jpg';
          break;
        case 'ciabatta':
          recipeImage = '/ciabatta.jpg';
          break;
        case 'rye':
          recipeImage = '/rye-bread.jpg';
          break;
        case 'challah':
          recipeImage = '/challah.jpg';
          break;
        case 'brioche':
          recipeImage = '/brioche.jpg';
          break;
        default:
          // Fallback images based on category
          if (category === 'cake') {
            recipeImage = '/cake.jpg';
          } else if (category === 'vegan') {
            recipeImage = '/vegan-dish.jpg';
          } else if (category === 'quick-suppers') {
            recipeImage = '/quick-meal.jpg';
          } else if (category === 'bread') {
            recipeImage = '/bread.jpg';
          } else {
            recipeImage = '/food-default.jpg';
          }
      }
  
      return {
        id: `recipe-${category}-${i + 1}`,
        title: `${recipeType} ${i + 1}`,
        image: recipeImage,  // Use actual image from /public
        chef: chefs[Math.floor(Math.random() * chefs.length)],
        difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
        time: times[Math.floor(Math.random() * times.length)],
        rating: ratingValue,
        reviewCount: reviewCount,
        featured: i < 3,
        isSaved: Math.random() > 0.5
      };
    });
  };

  // Filter toggle handlers
  const toggleDifficultyFilter = (difficulty) => {
    setFilterOptions(prev => {
      if (prev.difficulty.includes(difficulty)) {
        return { ...prev, difficulty: prev.difficulty.filter(d => d !== difficulty) };
      } else {
        return { ...prev, difficulty: [...prev.difficulty, difficulty] };
      }
    });
  };

  const toggleMealTypeFilter = (mealType) => {
    setFilterOptions(prev => {
      if (prev.mealType.includes(mealType)) {
        return { ...prev, mealType: prev.mealType.filter(m => m !== mealType) };
      } else {
        return { ...prev, mealType: [...prev.mealType, mealType] };
      }
    });
  };

  const setCookTimeFilter = (time) => {
    setFilterOptions(prev => ({ ...prev, cookTime: time }));
  };

  // Calculate pagination
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // For mobile filter drawer
  const [showFilters, setShowFilters] = useState(false);

  // Apply active filters UI
  useEffect(() => {
    const newActiveFilters = [];
    if (filterOptions.difficulty.length > 0) {
      filterOptions.difficulty.forEach(diff => {
        newActiveFilters.push({ type: 'difficulty', value: diff });
      });
    }
    if (filterOptions.cookTime) {
      newActiveFilters.push({ type: 'time', value: filterOptions.cookTime });
    }
    if (filterOptions.mealType.length > 0) {
      filterOptions.mealType.forEach(meal => {
        newActiveFilters.push({ type: 'meal', value: meal });
      });
    }
    setActiveFilters(newActiveFilters);
  }, [filterOptions]);

  // Remove a specific filter
  const removeFilter = (type, value) => {
    if (type === 'difficulty') {
      setFilterOptions(prev => ({
        ...prev,
        difficulty: prev.difficulty.filter(d => d !== value)
      }));
    } else if (type === 'time') {
      setFilterOptions(prev => ({
        ...prev,
        cookTime: ''
      }));
    } else if (type === 'meal') {
      setFilterOptions(prev => ({
        ...prev,
        mealType: prev.mealType.filter(m => m !== value)
      }));
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilterOptions({
      difficulty: [],
      cookTime: '',
      mealType: [],
      ingredients: [],
    });
  };

  return (
    <div className={`min-h-screen ${categoryInfo?.bgColor || 'bg-stone-50'}`}>
    
{/* Category Banner */}
<div className="w-full bg-white shadow-sm">
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
      <div className="mb-6 md:mb-0 md:mr-8 max-w-xl">
        {/* Category navigation and title */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Link href="/recipes" className="hover:text-gray-700">
            Recipes
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="font-medium text-gray-700">{categoryInfo?.name || 'Category'}</span>
        </div>
        <h1 className="text-3xl font-serif font-medium mb-4">{categoryInfo?.name || 'Category'}</h1>
        <p className="text-gray-600 leading-relaxed">
          {categoryInfo?.description || 'Discover our collection of delicious recipes.'}
        </p>
      </div>
      <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-lg overflow-hidden">
        {categoryInfo?.image ? (
          <Image 
            src={categoryInfo.image} 
            alt={categoryInfo.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Category Image</span>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Active Filters:</span>
              {activeFilters.map((filter, index) => (
                <span 
                  key={`${filter.type}-${filter.value}-${index}`}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full flex items-center"
                >
                  {filter.value}
                  <button 
                    onClick={() => removeFilter(filter.type, filter.value)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
              <button 
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="w-full px-4 py-2 bg-gray-100 text-gray-800 font-medium text-sm flex items-center justify-between rounded"
            >
              <span>Filter & Sort</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Filters - responsive */}
          <div className={`${showFilters || 'hidden lg:block'} lg:w-1/4`}>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Filter By</h2>
                <button 
                  onClick={clearAllFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Difficulty</h3>
                <div className="space-y-2">
                  {['Easy', 'Medium', 'Hard'].map((difficulty) => (
                    <label key={difficulty} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filterOptions.difficulty.includes(difficulty)}
                        onChange={() => toggleDifficultyFilter(difficulty)}
                        className="mr-2"
                      />
                      <span className="text-sm">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cook Time Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Cook Time</h3>
                <div className="space-y-2">
                  {['Under 15 min', 'Under 30 min', 'Under 1 hour', '1+ hours'].map((time) => (
                    <label key={time} className="flex items-center">
                      <input
                        type="radio"
                        name="cookTime"
                        checked={filterOptions.cookTime === time}
                        onChange={() => setCookTimeFilter(time)}
                        className="mr-2"
                      />
                      <span className="text-sm">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Meal Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Meal Type</h3>
                <div className="space-y-2">
                  {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'].map((meal) => (
                    <label key={meal} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filterOptions.mealType.includes(meal)}
                        onChange={() => toggleMealTypeFilter(meal)}
                        className="mr-2"
                      />
                      <span className="text-sm">{meal}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* More filters could be added here */}
            </div>

            {/* Mobile close filter button */}
            <div className="mt-4 lg:hidden">
              <button 
                onClick={() => setShowFilters(false)}
                className="w-full px-4 py-2 bg-black text-white font-medium text-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Recipe listings */}
          <div className="lg:w-3/4">
            {/* Sort & Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">{recipes.length} results</p>
              <div className="flex items-center">
                <span className="text-sm mr-2">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-b border-gray-300 bg-transparent focus:outline-none"
                >
                  <option value="relevance">Relevance</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {/* Featured Recipe (if available) */}{recipes.length > 0 && recipes[0].featured && (
  <div className={`${categoryInfo?.featureColor || 'bg-amber-100'} p-6 rounded-lg mb-8`}>
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2 relative aspect-[4/3] mb-4 md:mb-0 md:mr-6 rounded-lg overflow-hidden">
      {recipes[0].image ? (
        <Image 
          src={recipes[0].image} 
          alt={recipes[0].title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Featured Recipe Image</span>
        </div>
      )}
    </div>
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="bg-white px-2 py-1 text-xs font-medium rounded-full">Featured</span>
                    </div>
                    <h2 className="text-2xl font-serif mb-2">{recipes[0].title}</h2>
                    <p className="text-sm text-gray-600 mb-2">By {recipes[0].chef}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(recipes[0].rating) ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({recipes[0].reviewCount})</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-white text-xs rounded">{recipes[0].difficulty}</span>
                      <span className="px-2 py-1 bg-white text-xs rounded">{recipes[0].time}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our most popular {params.category || 'cake'} recipe that&apos; s perfect for any occasion. Try it today!
                    </p>
                    <div className="flex space-x-3">
                      <Link href={`/recipes/${recipes[0].id}`} className="px-4 py-2 bg-black text-white text-sm font-medium">
                        View Recipe
                      </Link>
                      <button className="p-2 border border-gray-300 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${recipes[0].isSaved ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} viewBox="0 0 20 20" fill={recipes[0].isSaved ? 'currentColor' : 'none'} stroke="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recipe Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-[4/3] rounded-lg mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/recipes/${recipe.id}`} className="block">
                    <div className="aspect-[4/3] relative bg-gray-200">
                      {recipe.image ? (
                        <Image 
                          src={recipe.image} 
                          alt={recipe.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-500">{recipe.title} Image</span>
                        </div>
                      )}
                    </div>
                  </Link>
                    <div className="p-4">
                      <Link href={`/recipes/${recipe.id}`} className="block">
                        <h3 className="font-serif font-medium text-lg mb-1 hover:text-gray-700">{recipe.title}</h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-2">By {recipe.chef}</p>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(recipe.rating) ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({recipe.reviewCount})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">{recipe.difficulty}</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">{recipe.time}</span>
                        </div>
                        <button className="p-1.5 text-gray-500 hover:text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${recipe.isSaved ? 'text-red-500 fill-red-500' : ''}`} viewBox="0 0 20 20" fill={recipe.isSaved ? 'currentColor' : 'none'} stroke="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {recipes.length > recipesPerPage && (
              <div className="flex justify-center items-center gap-2 my-8">
                <button 
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center px-3 py-1 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Prev
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => {
                  // Show first page, current page, last page, and pages around current
                  if (
                    i === 0 || 
                    i === totalPages - 1 || 
                    (i >= currentPage - 2 && i <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`px-3 py-1 ${currentPage === i + 1 ? 'bg-gray-200 text-gray-800' : 'hover:bg-gray-100'}`}
                      >
                        {i + 1}
                      </button>
                    );
                  } else if (
                    i === currentPage - 3 || 
                    i === currentPage + 2
                  ) {
                    return <span key={i} className="px-1">...</span>;
                  }
                  return null;
                })}
                
                <button 
                  onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-3 py-1 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}