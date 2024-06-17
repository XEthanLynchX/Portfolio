import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
// import Contact from './views/Contact';
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

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

function App() {
    const location = useLocation();

    return (
        <div className="flex flex-col md:flex-row min-h-screen ">
            <BackgroundWithHoverEffect />
            <div className="w-96 ">
                <NavBar />
            </div>
            <div className="flex-grow min-h-screen overflow-x-hidden overflow-y: auto sm:-mt-96 md:mt-0 ">
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
                        {/* <Route path="/contact" element={<Contact />} /> */}
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
