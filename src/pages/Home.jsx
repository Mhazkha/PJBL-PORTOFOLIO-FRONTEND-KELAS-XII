import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container my-5 py-3">
      <div className="row align-items-center min-vh-75">
        
        {/* Kolom Kiri: Teks Hero */}
        <div className="col-lg-7 order-2 order-lg-1 pe-lg-5 mt-5 mt-lg-0">
          <h2 className="script-font text-blue-main m-0 p-0" style={{ fontSize: "3.5rem", transform: "rotate(-3deg) translate(-10px, -15px)" }}>
            Hello World!
          </h2>
          <h1 className="pixel-font text-blue-main fw-bold lh-base" style={{ fontSize: "2.8rem", textShadow: "5px 5px 0px #de3c96" }}>
            I'M AFIQ ZIAN
          </h1>
          <h3 className="pixel-font text-muted my-4" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
            Front-End Developer & 3D Animator
          </h3>
          <div className="bg-white y2k-card p-4 my-4">
            <p className="fw-bold m-0 text-blue-main" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Siswa SMKN 1 Purbalingga dari kompetensi keahlian Pengembangan Perangkat Lunak dan Gim (PPLG). Berfokus pada pembuatan aplikasi web interaktif serta eksplorasi animasi lingkungan 3D menggunakan Blender.
            </p>
          </div>
          <div className="mt-5 d-flex flex-wrap gap-4">
            <Link to="/project" className="btn y2k-button text-decoration-none">
              VIEW PROJECTS <span style={{ color: "#de3c96" }}>*</span>
            </Link>
            <Link to="/experience" className="btn y2k-button text-decoration-none" style={{ boxShadow: "6px 6px 0px #14347b" }}>
              MY EXP <span style={{ color: "#de3c96" }}>+</span>
            </Link>
          </div>
        </div>

        {/* Kolom Kanan: Logo Utama */}
        <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
          <img 
            src="assets/PixelLogo.svg" 
            alt="Avatar Logo" 
            style={{ 
              width: "100%", 
              maxWidth: "320px", 
              transform: "rotate(4deg)", 
              filter: "drop-shadow(14px 14px 0px #de3c96)" 
            }} 
          />
        </div>
        

      </div>
    </div>
  );
}

export default Home;