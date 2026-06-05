import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-4 p-3 mb-4" style={{ backgroundColor: "#fcfcfc", borderColor: "#14347b" }}>
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2 m-0 p-0">
          <img src="assets/PixelLogo.svg" alt="Logo" style={{ width: "42px", height: "42px" }} />
          <span className="pixel-font text-blue-main m-0" style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>MHAZKHA</span>
        </NavLink>
        
        <div className="d-flex gap-2 ms-auto">
          <NavLink to="/" className="nav-link pixel-font px-3 py-2 fw-bold text-dark" style={{ fontSize: "0.7rem", borderRadius: 0 }}>HOME</NavLink>
          <NavLink to="/project" className="nav-link pixel-font px-3 py-2 fw-bold text-dark" style={{ fontSize: "0.7rem", borderRadius: 0 }}>PROJECTS</NavLink>
          <NavLink to="/experience" className="nav-link pixel-font px-3 py-2 fw-bold text-dark" style={{ fontSize: "0.7rem", borderRadius: 0 }}>EXPERIENCE</NavLink>
          <NavLink to="/about" className="nav-link pixel-font px-3 py-2 fw-bold text-dark" style={{ fontSize: "0.7rem", borderRadius: 0 }}>ABOUT</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;