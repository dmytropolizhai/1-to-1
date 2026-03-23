import { HeroContent } from "./_components/hero/content";
import { HeroPreview } from "./_components/hero/preview";
import { LearnMoreSection } from "./_components/learn-more";



export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <HeroContent />
            <HeroPreview />
          </div>
        </div>
      </section>
      <LearnMoreSection />
    </main>
  );
}