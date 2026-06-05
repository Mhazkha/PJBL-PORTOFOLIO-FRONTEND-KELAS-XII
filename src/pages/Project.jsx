import React from "react";

function Project() {
  const dataProject = [
    {
      id: 1,
      judul: "3D Panorama Store",
      kategori: "3D MODELING",
      deskripsi: "Melakukan perancangan aset interior dan tata pencahayaan material toko kelontong menggunakan mesin Blender.",
      gambar: "assets/toko.png "
      
    },
    {
      id: 2,
      judul: "Web Portal SMKN 1",
      kategori: "WEB DEVELOPMENT",
      deskripsi: "Membangun purwarupa halaman beranda utama institusi sekolah lengkap dengan tabel dinamis informasi data siswa.",
      gambar: "assets/web.png"
    },
    {
      id: 3,
      judul: "BMO Character Rig",
      kategori: "3D ANIMATION",
      deskripsi: "Membuat model karakter fiktif BMO lengkap dengan susunan tulang mekanis Inverse Kinematics dan teknik turnaround.",
      gambar: "assets/bmo.jpg"
    }
  ];

  return (
    <div className="py-4">
      <h1 className="pixel-font text-blue-main text-center mb-5" style={{ fontSize: "2.8rem", textShadow: "4px 4px 0px #de3c96" }}>
        MY WORKS <span className="script-font text-dark lowercase" style={{ fontSize: "2rem", textShadow: "none" }}>&</span> PROJECTS
      </h1>
      
      <div className="row g-5 mt-2">
        {dataProject.map((item, index) => (
          <div key={item.id} className="col-md-4">
            <div className="card y2k-card h-100 p-3">
              {/* Efek kemiringan polaroid selang-seling */}
              <div className="polaroid mb-3" style={{ transform: index % 2 === 0 ? "rotate(-2deg)" : "rotate(3deg)" }}>
                {item.gambar ? (
                  <img 
                    src={item.gambar} 
                    alt={item.judul} 
                    style={{ 
                      width: "100%", 
                      height: "220px", 
                      objectFit: "cover", 
                      border: "3px solid #14347b" 
                    }} 
                  />
                ) : (
                  <div className="img-placeholder d-flex align-items-center justify-content-center text-white pixel-font" style={{ fontSize: "0.7rem" }}>
                    [ NO PREVIEW ]
                  </div>
                )}
              </div>
              <div className="card-body p-1">
                <span className="y2k-badge mb-3 d-inline-block">{item.kategori}</span>
                <h5 className="card-title pixel-font text-blue-main my-2" style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>{item.judul}</h5>
                <p className="card-text fw-bold text-muted mt-2" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>{item.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;