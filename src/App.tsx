import { Navigation } from './components';
import { Hero, About, Projects, Experience, Contact } from './sections';

function App() {
  return (
    <div className="min-h-screen bg-primary text-light overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary border-t border-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-light/60">
          <p>© 2024 Jasmine Kiezyhiah T. Alabat. All rights reserved.</p>
          <p className="mt-2">Crafted with React, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
