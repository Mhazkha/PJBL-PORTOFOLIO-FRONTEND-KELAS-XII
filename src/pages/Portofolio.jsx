import { useState, useEffect } from "react";

function Portfolio() {
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Project");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(""); // State baru untuk menyimpan gambar
  const [editId, setEditId] = useState(null);

  // Data default untuk preview (tambahkan properti gambar kosong)
  const dataAwal = [
    { id: 1, judul: "Desain Banner English Expression", kategori: "Eskul", deskripsi: "Membuat desain visual bertema inside out untuk acara English Club.", gambar: "" },
    { id: 2, judul: "3D Panorama Grocery Store", kategori: "Project", deskripsi: "Melakukan 3D modeling environment toko kelontong menggunakan Blender.", gambar: "" },
    { id: 3, judul: "Lomba Bikin Film", kategori: "Pengalaman", deskripsi: "Bertanggung jawab di departemen Artistik selama persiapan 1 minggu.", gambar: "" }
  ];

  const [daftarPorto, setDaftarPorto] = useState(() => {
    const savedData = localStorage.getItem("dataPortofolio");
    return savedData ? JSON.parse(savedData) : dataAwal;
  });

  useEffect(() => {
    localStorage.setItem("dataPortofolio", JSON.stringify(daftarPorto));
  }, [daftarPorto]);

  // Fungsi untuk mengubah file gambar menjadi Base64
  const handleUploadGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGambar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function simpanPorto(e) {
    e.preventDefault();
    if (!judul || !deskripsi) return alert("Isi judul dan deskripsi dengan lengkap!");

    if (editId) {
      setDaftarPorto(daftarPorto.map(item => 
        item.id === editId ? { ...item, judul, kategori, deskripsi, gambar: gambar || item.gambar } : item
      ));
      setEditId(null);
    } else {
      setDaftarPorto([...daftarPorto, { id: Date.now(), judul, kategori, deskripsi, gambar }]);
    }
    
    // Reset form setelah simpan
    setJudul(""); setDeskripsi(""); setKategori("Project"); setGambar("");
    
    // Reset input file (opsional, untuk membersihkan nama file di UI)
    const fileInput = document.getElementById("inputGambar");
    if (fileInput) fileInput.value = "";
  }

  function hapusPorto(id) {
    if(window.confirm("Yakin ingin menghapus data ini?")) {
      setDaftarPorto(daftarPorto.filter(item => item.id !== id));
    }
  }

  function editPorto(item) {
    setJudul(item.judul); 
    setKategori(item.kategori); 
    setDeskripsi(item.deskripsi); 
    setGambar(item.gambar); 
    setEditId(item.id);
  }

  return (
    <div>
      <h2 className="mb-4">Manajemen Portofolio</h2>
      
      {/* Form Input */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <form onSubmit={simpanPorto}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Judul Kegiatan</label>
                <input type="text" className="form-control" placeholder="Contoh: Bikin Web Keren" value={judul} onChange={(e) => setJudul(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Kategori</label>
                <select className="form-select" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                  <option value="Project">Project</option>
                  <option value="Eskul">Kegiatan Eskul</option>
                  <option value="Pengalaman">Pengalaman Sekolah</option>
                </select>
              </div>
              
              {/* Input Upload Gambar */}
              <div className="col-12">
                <label className="form-label fw-bold">Upload Thumbnail / Foto</label>
                <input type="file" id="inputGambar" className="form-control" accept="image/*" onChange={handleUploadGambar} />
                {/* Preview Gambar Kecil saat mau diedit/ditambah */}
                {gambar && (
                  <div className="mt-2">
                    <img src={gambar} alt="Preview" className="img-thumbnail" style={{ height: "100px", objectFit: "cover" }} />
                  </div>
                )}
              </div>

              <div className="col-12">
                <label className="form-label fw-bold">Deskripsi</label>
                <textarea className="form-control" placeholder="Deskripsi detail..." rows="3" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
              </div>
              <div className="col-12 mt-4">
                <button type="submit" className={`btn ${editId ? 'btn-warning' : 'btn-success'} w-100 fw-bold`}>
                  {editId ? "Update Portofolio" : "Tambah Portofolio"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* List Kartu Portofolio */}
      <div className="row g-4">
        {daftarPorto.map((item) => (
          <div key={item.id} className="col-md-4">
            <div className="card h-100 shadow-sm border-0 border-start border-success border-4 overflow-hidden">
              {/* Menampilkan Gambar pada Card */}
              {item.gambar ? (
                <img src={item.gambar} className="card-img-top" alt={item.judul} style={{ height: "200px", objectFit: "cover" }} />
              ) : (
                <div className="bg-light d-flex align-items-center justify-content-center text-muted" style={{ height: "200px" }}>
                  <span>Tanpa Gambar</span>
                </div>
              )}
              
              <div className="card-body">
                <span className="badge bg-success mb-2">{item.kategori}</span>
                <h5 className="card-title fw-bold">{item.judul}</h5>
                <p className="card-text text-muted">{item.deskripsi}</p>
              </div>
              <div className="card-footer bg-white border-0 text-end pb-3">
                <button onClick={() => editPorto(item)} className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                <button onClick={() => hapusPorto(item.id)} className="btn btn-sm btn-outline-danger">Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;