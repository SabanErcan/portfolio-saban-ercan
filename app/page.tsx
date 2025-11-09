import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      {/* Effet de bruit de fond */}
      <div className="noise" />
      
      <main className="relative">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-sm opacity-50 border-t border-current border-opacity-10">
          <p>© 2024 Saban ERCAN. Tous droits réservés.</p>
        </footer>
      </main>
    </>
  );
}
