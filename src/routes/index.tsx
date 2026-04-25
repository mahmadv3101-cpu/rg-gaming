import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { FeaturedGames } from "@/components/home/FeaturedGames";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { TrendingSlider } from "@/components/home/TrendingSlider";
import { NewsSection } from "@/components/home/NewsSection";
import { CommunitySection } from "@/components/home/CommunitySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GamingHub — Enter The Ultimate Gaming Universe" },
      { name: "description", content: "Discover top games, trailers, reviews and direct official downloads in one premium hub. PC, PlayStation, Xbox and more." },
      { property: "og:title", content: "GamingHub — Enter The Ultimate Gaming Universe" },
      { property: "og:description", content: "Discover top games, trailers, reviews and direct official downloads in one premium hub." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <CategoriesSection />
      <TrendingSlider />
      <NewsSection />
      <CommunitySection />
    </>
  );
}
