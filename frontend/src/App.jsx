import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
// import Projects from './views/Projects';
// import About from './views/About';
// import Contact from './views/Contact';
import './index.css';

function App() {
    return (
        <Router>
            <div className="flex min-h-screen">
                <NavBar />
                <div className="flex-grow min-h-screen overflow-x-hidden overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/projects" element={<Projects />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} /> */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
