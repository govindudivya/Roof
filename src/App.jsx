import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component for page transition animations
const AnimatedRoute = ({ children }) => {
  return (
    <div className="animate-fade-in-up">
      {children}
    </div>
  );
};

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedRoute>
                <Home />
              </AnimatedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <AnimatedRoute>
                <Services />
              </AnimatedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <AnimatedRoute>
                <Gallery />
              </AnimatedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedRoute>
                <Contact />
              </AnimatedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
