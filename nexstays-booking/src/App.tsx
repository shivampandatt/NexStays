/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileStickyBar from './components/layout/MobileStickyBar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-midnight text-white w-full overflow-hidden relative">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 rounded-full opacity-20 blur-[100px] bg-electric pointer-events-none z-0"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 rounded-full opacity-10 blur-[80px] bg-gold pointer-events-none z-0"></div>

        <Navbar />
        <main className="flex-grow w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
}
