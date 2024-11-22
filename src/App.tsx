import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./layouts/Sidebar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

// Define animation variants
const animationVariants = {
  // flip: {
  //   initial: { rotateY: 180 },
  //   animate: { rotateY: 0 },
  //   exit: { rotateY: 180 },
  // },
  swipe: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  roll: {
    initial: { rotateX: -90 },
    animate: { rotateX: 0 },
    exit: { rotateX: 90 },
  },
  // Add more animations as needed
};

type AnimationKeys = keyof typeof animationVariants;

// Function to get a random animation type
const getRandomAnimation = (): AnimationKeys => {
  const animations = Object.keys(animationVariants) as AnimationKeys[];
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

function App() {
  const location = useLocation();
  const [animationType, setAnimationType] = useState<AnimationKeys>(
    getRandomAnimation()
  );

  useEffect(() => {
    setAnimationType(getRandomAnimation());
  }, [location]);

  return (
    <main className="flex justify-between w-full">
      {/* Sidebar fixed and takes 300px width */}
      <div className="w-[360px]  h-screen z-50  bg-[#000000DE] text-white">
        <Sidebar />
      </div>
      {/* Page content takes the remaining space, positioned next to the sidebar */}
      <div className="top-0 h-screen w-screen  pageIndex   no-scrollbar  ">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={animationVariants[animationType]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
