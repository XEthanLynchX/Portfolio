import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Loading';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Projects2 from './views/Projects2';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: -20
    }
};

const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.4
};

function App() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-white font-sans relative">
            <>
                <NavBar />
                <main className="w-full min-h-screen overflow-x-hidden">
                    <ScrollToTop />
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
                                    className="pt-20"
                                >
                                    <Projects2 />
                                </motion.div>
                            } />
                        </Routes>
                    </AnimatePresence>
                </main>
            </>
        </div>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
