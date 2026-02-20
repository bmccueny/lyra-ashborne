import Hero from "@/components/Hero";
import FeaturedBook from "@/components/FeaturedBook";
import Testimonials from "@/components/Testimonials";
import RecentPosts from "@/components/RecentPosts";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBook />
      <Testimonials />
      <RecentPosts />
      <NewsletterCTA />
    </>
  );
}
