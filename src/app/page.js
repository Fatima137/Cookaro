"use client";

import HeroSection from '@/components/home/HeroSection';
import TrendingRecipes from '@/components/home/TrendingRecipes';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import NewestRecipes from '@/components/home/NewestRecipes';
import ProKitchenSection from '@/components/home/ProKitchenSection';
import CommunityHighlights from '@/components/home/CommunityHighlights';
import AdBanner from '@/components/home/AdBanner';
import LatestStories from '@/components/home/LatestStories';
import JoinCommunity from '@/components/home/JoinCommunity';

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <HeroSection />
      <NewestRecipes />
      <ProKitchenSection />
      <LatestStories />
      <CommunityHighlights />
      <AdBanner />
      <FeaturedCategories />
    </div>
  );
}