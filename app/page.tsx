import { CollectionGrid, FloatingWhatsApp, Footer, Hero, MoreSections, Navbar, TopBar } from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <CollectionGrid />
      <MoreSections />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
