import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Loading';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Projects from './views/Projects';
import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';
import './index.css';
import BackgroundWithHoverEffect from './components/Bg';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
};

const NavBarVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000); // Example timeout, adjust as needed
    }, []);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {loading ? <Preloader /> : (
                <>
                    <BackgroundWithHoverEffect />
                    <div className="w-full md:w-72 z-50 md:static fixed">
                        <NavBar />
                    </div>
                    <div className="flex-grow min-h-screen overflow-x-hidden overflow-y-auto md:w-4/5 sm: mt-32 md:mt-0">
                        <AnimatePresence mode="wait">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={
                                    <motion.div
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}
                                    >
                                        <Home />
                                    </motion.div>
                                } />
                                <Route path="/projects" element={
                                    <motion.div
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}
                                    >
                                        <Projects />
                                    </motion.div>
                                } />
                                <Route path="/services" element={
                                    <motion.div
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}
                                    >
                                        <Services />
                                    </motion.div>
                                } />
                                <Route path="/about" element={
                                    <motion.div
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}
                                    >
                                        <About />
                                    </motion.div>
                                } />
                                <Route path="/contact" element={
                                    <motion.div
                                        initial="initial"
                                        animate="in"
                                        exit="out"
                                        variants={pageVariants}
                                        transition={pageTransition}
                                    >
                                        <Contact />
                                    </motion.div>
                                } />
                            </Routes>
                        </AnimatePresence>
                    </div>
                </>
            )}
        </div>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
