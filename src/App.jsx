import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundShapes from "./components/BackgroundShapes";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* Komponen Ornamen Bentuk SVG di Background */}
      <BackgroundShapes />
      
      {/* Menu Utama */}
      <Navbar />
      
      {/* Area Konten Kontainer */}
      <div className="container mt-2 pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;