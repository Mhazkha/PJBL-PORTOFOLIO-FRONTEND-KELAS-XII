import React from "react";

function About() {
  return (
    <div className="container py-4">
      <div className="row align-items-center min-vh-75 mt-4">
        
        <div className="col-lg-5 mb-5 mb-lg-0 d-flex justify-content-center">
          <img 
            src="assets/zian.png" 
            alt="Zian" 
            style={{ 
              width: "100%", 
              maxWidth: "320px", 
              transform: "rotate(-4deg)", 
              filter: "drop-shadow(14px 14px 0px #de3c96)" 
            }} 
          />
        </div>
        
        <div className="col-lg-7 ps-lg-5">
          <h1 className="pixel-font text-blue-main mb-4" style={{ fontSize: "2.6rem" }}>
            ABOUT_ME<span style={{ color: "#de3c96" }}>.EXE</span>
          </h1>
          <div className="bg-white y2k-card p-4 mb-4">
            <p className="fw-bold text-blue-main lh-lg" style={{ fontSize: "1rem" }}>
              Saya memiliki minat mendalam pada pengembangan sistem teknologi berbasis web, desain grafis, serta pembuatan seni grafis komputer tiga dimensi. Senang mengeksplorasi kode-kode antarmuka komponen front-end dan mengintegrasikannya secara selaras.
            </p>
            <hr style={{ border: "2px solid #14347b", opacity: 1 }} />
            <h3 className="pixel-font text-blue-main my-3" style={{ fontSize: "0.75rem" }}>TECH_STACK_LIST:</h3>
            <ul className="fw-bold text-dark list-unstyled m-0 p-0 d-flex flex-wrap gap-3" style={{ fontSize: "0.9rem" }}>
              <li className="p-2 border border-2 border-dark bg-light">[ PHP ]</li>
              <li className="p-2 border border-2 border-dark bg-light">[ MySQL ]</li>
              <li className="p-2 border border-2 border-dark bg-light">[ React.js ]</li>
              <li className="p-2 border border-2 border-dark bg-light">[ Blender 3D ]</li>
            </ul>
          </div>
          <div className="mt-4">
            <a href="https://github.com/Mhazkha" target="_blank" rel="noreferrer" className="btn y2k-button me-3 text-decoration-none">GITHUB <span style={{ color: "#de3c96" }}>*</span></a>
            <a href="https://www.instagram.com/mhazkha/" target="_blank" rel="noreferrer" className="btn y2k-button text-decoration-none" style={{ boxShadow: "6px 6px 0px #14347b" }}>INSTAGRAM</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
