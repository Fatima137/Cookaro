'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const tabs = [
  { id: 'food', label: 'Food', path: '/stories' },
  { id: 'entertaining', label: 'Entertaining', path: '/stories/entertaining' },
  { id: 'popular', label: 'Popular', path: '/stories/popular' },
  { id: 'latest', label: 'Latest', path: '/stories/latest' },
];

const heroStory = {
  image: '/image/sushi.jpg',
  title: 'The Best Ways to Use Lemon Balm at Home (Plus 10 Recipes to Try)',
  description: 'This lemon-scented herb deserves a spot in your kitchen. Heres how to use it in everything from teas and salads to jam and shortcake.',
  link: '#',
};

const listedStories = [
  { id: 1, title: 'A Highly-Specific Guide to No-Split Cream Cheese Frosting', description: 'And how to recover if it does.', link: '#' },
  { id: 2, title: 'Any Secret to Perfectly Cooked Dried Beans Every Time', description: 'Its not what you think.', link: '#' },
  { id: 3, title: 'The Mother-Daughter Duo Bringing French Cooking (and Joy) Home', description: 'A new cookbook and a new outlook.', link: '#' },
];

const popularStory = {
  image: '/image/soup.jpg',
  title: 'This New Cookbook Series Will Make You Want to Go Plant-Based',
  description: 'Catch up with the writers behind the "Make It Plant-Based" series to talk about the evolution of plant-based cooking, how to make vegetables better, and what to stock your fridge with.',
  link: '#',
};

const latestStories = [
  { id: 1, image: '/image/vegan.jpg', title: 'What Its Really Like to Start a Food Company as a Couple', link: '#' },
  { id: 2, image: '/image/waf.jpg', title: 'I Asked a Bunch of Moms What They Actually Want for Mothers Day', link: '#' },
  { id: 3, image: '/image/proc.jpg', title: 'The Mother-Daughter Duo Bringing French Cooking (and Joy) Home', link: '#' },
  { id: 4, image: '/image/plate.jpg', title: 'A Highly-Specific Guide to No-Split Cream Cheese Frosting', link: '#' },
];

const topArticles = [
  'A Trick for Storing Berries to Keep ’Em Fresher, Longer',
  'The Best Pasta Salad Recipes to Bring to a Potluck or Party',
  'If You Want to Fill Doughnuts with Jam, Pastry Cream, Apples... Read This!',
  '14 Creative Tequila Cocktails That’ll Impress Your Friends',
  'Amanda’s Olive Oil Press-In Tart Crust',
  '11 Easy Dinner Recipes for When It’s Been a Loooong Week',
  'How to Make Long-Lasting Whipped Cream',
  '4 Light, Bright Chilled Soups for Sizzling-Hot Summer Days',
  'Nigel Slater’s Genius Raspberry Ripple Toast Is Your Last-Second Summer Hero',
  'Best Gifts for College Graduates, According to Recent Graduates',
];

export default function StoriesPage() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Tab Navigation */}
      <div className="fixed top-[180px] left-0 w-full bg-white border-b border-[#B3A88F] shadow-sm z-40">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex justify-center">
            <nav className="flex items-center space-x-12 py-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={tab.path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    pathname === tab.path
                      ? 'text-[#38301B] border-b-2 border-[#38301B]'
                      : 'text-[#0B0A08] hover:text-[#38301B]'
                  }`}
                  style={{ fontFamily: 'MyCustomFont' }}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Section Title and Hero Section with Sidebar */}
      <div className="pt-[170px] pb-12 container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#38301B] mb-8" style={{ fontFamily: 'MyCustomFont' }}>Food</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Hero Main */}
          <div className="flex-1 flex flex-col justify-center">
            <Image src={heroStory.image} width={700}
                height={400} alt={heroStory.title} className="w-full h-130 object-cover mb-6 md:mb-0" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#38301B] mb-2" style={{ fontFamily: 'MyCustomFont' }}>{heroStory.title}</h2>
              <p className="text-[#0B0A08] text-lg mb-4" style={{ fontFamily: 'MyCustomFontItalic' }}>{heroStory.description}</p>
              <Link href={heroStory.link} className="text-[#B3A88F] font-semibold hover:underline">Read More →</Link>
            </div>
          </div>
          {/* Top Articles Sidebar */}
          <aside className="hidden md:block w-full max-w-xs flex-shrink-0">
            <div className="bg-[#FAFAF8] border border-[#ECECEC] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#38301B] mb-4 flex items-center gap-2" style={{ fontFamily: 'MyCustomFont' }}>
                Top Articles
                <span className="flex-1 border-t border-[#B3A88F] ml-2"></span>
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-[#38301B]">
                {topArticles.map((article, idx) => (
                  <li key={idx} className="pl-1 text-sm leading-snug">{article}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>

      {/* Listed Stories Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-2xl font-bold text-[#38301B] mb-6" style={{ fontFamily: 'MyCustomFont' }}>New &amp; Now</h2>
        <div className="space-y-6">
          {listedStories.map(story => (
            <div key={story.id} className="border-b border-[#ECECEC] pb-4">
              <Link href={story.link} className="block text-xl font-semibold text-[#38301B] hover:text-[#B3A88F] mb-1" style={{ fontFamily: 'MyCustomFont' }}>{story.title}</Link>
              <p className="text-[#0B0A08] text-base" style={{ fontFamily: 'MyCustomFontItalic' }}>{story.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Story Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={popularStory.image} alt={popularStory.title} className="w-full md:w-1/2 h-64 object-cover" />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#38301B] mb-4" style={{ fontFamily: 'MyCustomFont' }}>{popularStory.title}</h2>
            <p className="text-[#0B0A08] text-lg mb-4" style={{ fontFamily: 'MyCustomFontItalic' }}>{popularStory.description}</p>
            <Link href={popularStory.link} className="text-[#B3A88F] font-semibold hover:underline">Read More →</Link>
          </div>
        </div>
      </div>

      {/* Latest Stories Carousel Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <h2 className="text-2xl font-bold text-[#38301B] mb-6" style={{ fontFamily: 'MyCustomFont' }}>Latest Stories</h2>
        <div className="flex space-x-6 overflow-x-auto pb-2 hide-scrollbar">
          {latestStories.map(story => (
            <div key={story.id} className="min-w-[320px] max-w-[320px] bg-white shadow-md border border-[#ECECEC] group relative">
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <Link href={story.link} className="block text-lg font-semibold text-[#38301B] hover:text-[#B3A88F] mb-2" style={{ fontFamily: 'MyCustomFont' }}>{story.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 