import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Foodtrucks from './pages/Foodtrucks';
import Experience from './pages/Experience';
import Partners from './pages/Partners';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import ConceptDetail from './pages/ConceptDetail';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  const renderPage = () => {
    if (currentPath.startsWith('/foodtrucks/')) {
      return <ConceptDetail conceptId={currentPath.split('/').pop() || ''} onNavigate={setCurrentPath} />;
    }

    const pages: Record<string, React.ReactNode> = {
      '/': <Home onNavigate={setCurrentPath} />,
      '/over-ons': <About />,
      '/foodtrucks': <Foodtrucks onSelectConcept={(id) => setCurrentPath(`/foodtrucks/${id}`)} />,
      '/experience': <Experience />,
      '/partners': <Partners />,
      '/booking': <Booking />,
      '/contact': <Contact />,
    };

    return pages[currentPath] || pages['/'];
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-dark bg-dark">
      <Navbar onNavigate={setCurrentPath} currentPath={currentPath} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={setCurrentPath} />
      <div className="md:hidden fixed bottom-6 right-6 z-[9997] touch-manipulation">
        <button
          type="button"
          onClick={() => setCurrentPath('/booking')}
          onPointerDown={(e) => { e.currentTarget.releasePointerCapture(e.pointerId); }}
          className="min-w-[56px] min-h-[56px] bg-gold text-dark p-4 rounded-full shadow-2xl font-bold uppercase text-xs tracking-widest px-4 cursor-pointer active:scale-95 transition-transform"
        >
          Boek Nu
        </button>
      </div>
    </div>
  );
};

export default App;