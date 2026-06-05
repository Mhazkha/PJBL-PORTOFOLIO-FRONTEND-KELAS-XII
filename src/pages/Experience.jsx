import { useState, useEffect } from "react";

function Experience() {
  const [judul, setJudul] = useState("");
  const [jenis, setJenis] = useState("Eskul");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");
  const [editId, setEditId] = useState(null);

  const dataAwal = [
    { id: 1, judul: "Desain Banner English Club", jenis: "Eskul", deskripsi: "Membuat konsep visual bernuansa antarmuka emosi Inside Out berdimensi besar untuk acara panggung.", gambar: "" },
    { id: 2, judul: "Tim Kreatif Produksi Film", jenis: "Lomba", deskripsi: "Bertanggung jawab menyusun penataan properti artistik dalam tenggat waktu produksi satu minggu.", gambar: "" }
  ];

  const [daftarExperience, setDaftarExperience] = useState(() => {
    try {
      const savedData = localStorage.getItem("dataExperience");
      return savedData ? JSON.parse(savedData) : dataAwal;
    } catch (error) {
      return dataAwal;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("dataExperience", JSON.stringify(daftarExperience));
    } catch (error) {
      alert("ERROR: Penyimpanan penuh (Max ~3MB). Hapus data lama atau gunakan foto berukuran lebih kecil.");
    }
  }, [daftarExperience]);

  const handleUploadGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        alert("ERROR: Ukuran file terlalu besar! Maksimal 2MB.");
        e.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setGambar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  function simpanExperience(e) {
    e.preventDefault();
    if (!judul || !deskripsi) return alert("MOHON ISI SEMUA KOLOM!");

    if (editId) {
      setDaftarExperience(daftarExperience.map(item => 
        item.id === editId ? { ...item, judul, jenis, deskripsi, gambar: gambar || item.gambar } : item
      ));
      setEditId(null);
    } else {
      setDaftarExperience([...daftarExperience, { id: Date.now(), judul, jenis, deskripsi, gambar }]);
    }
    setJudul(""); setDeskripsi(""); setJenis("Eskul"); setGambar("");
    const fileInput = document.getElementById("inputGambar");
    if (fileInput) fileInput.value = "";
  }

  function hapusExperience(id) {
    if(window.confirm("APAKAH ANDA YAKIN INGIN MENGHAPUS DATA?")) {
      setDaftarExperience(daftarExperience.filter(item => item.id !== id));
    }
  }

  function editExperience(item) {
    setJudul(item.judul); setJenis(item.jenis); setDeskripsi(item.deskripsi); setGambar(item.gambar); setEditId(item.id);
  }

  return (
    <div className="py-3">
      <h1 className="pixel-font text-blue-main mb-4" style={{ fontSize: "2.4rem", textShadow: "3px 3px 0px #de3c96" }}>
        EXPERIENCE LOG
      </h1>
      
      <div className="card y2k-card mb-5 p-4 bg-white">
        <form onSubmit={simpanExperience}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label pixel-font" style={{ fontSize: "0.65rem" }}>JUDUL PENGALAMAN</label>
              <input type="text" className="form-control y2k-input" placeholder="Nama aktivitas / kepanitiaan" value={judul} onChange={(e) => setJudul(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label pixel-font" style={{ fontSize: "0.65rem" }}>JENIS PENGALAMAN</label>
              <select className="form-select y2k-input" value={jenis} onChange={(e) => setJenis(e.target.value)}>
                <option value="Eskul">Eskul</option>
                <option value="Sekolah">Sekolah</option>
                <option value="Freelance">Freelance</option>
                <option value="PKL">PKL</option>
                <option value="Lomba">Lomba</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label pixel-font" style={{ fontSize: "0.65rem" }}>LAMPIRAN FOTO / GRAFIS (Maks 2MB)</label>
              <input type="file" id="inputGambar" className="form-control y2k-input bg-white" accept="image/*" onChange={handleUploadGambar} />
              {gambar && (
                <div className="mt-3">
                  <img src={gambar} alt="Pratinjau" className="border border-2 border-dark" style={{ height: "110px", width: "110px", objectFit: "cover" }} />
                </div>
              )}
            </div>
            <div className="col-12">
              <label className="form-label pixel-font" style={{ fontSize: "0.65rem" }}>DESKRIPSI TUGAS</label>
              <textarea className="form-control y2k-input" rows="3" placeholder="Rincian peran dan tanggung jawab kerja..." value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
            </div>
            <div className="col-12 mt-4 text-end">
              <button type="submit" className="btn y2k-button w-100">
                {editId ? "SAVE CHANGES [!] " : "COMMIT EXPERIENCE [+]"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="row g-4">
        {daftarExperience.map((item) => (
          <div key={item.id} className="col-md-6">
            <div className="d-flex flex-column flex-sm-row bg-white y2k-card p-3 h-100">
              <div className="me-sm-3 mb-3 mb-sm-0" style={{ width: "130px", height: "130px", flexShrink: 0, border: "3px solid #14347b" }}>
                {item.gambar ? (
                  <img src={item.gambar} alt={item.judul} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div className="w-100 h-100 bg-blue-main text-white d-flex align-items-center justify-content-center pixel-font" style={{ fontSize: "0.55rem", textAlign: "center", padding: "5px" }}>NO LOG IMAGE</div>
                )}
              </div>
              <div className="flex-grow-1 position-relative d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <h5 className="pixel-font text-blue-main m-0 mt-1" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>{item.judul}</h5>
                    <span className="y2k-badge flex-shrink-0">{item.jenis}</span>
                  </div>
                  <p className="fw-bold text-muted my-3" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>{item.deskripsi}</p>
                </div>
                <div className="text-end pt-2">
                  <button onClick={() => editExperience(item)} className="btn btn-sm btn-dark pixel-font me-2" style={{ fontSize: "0.6rem", borderRadius: 0, padding: "5px 10px" }}>EDIT</button>
                  <button onClick={() => hapusExperience(item.id)} className="btn y2k-button-danger">DEL</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;