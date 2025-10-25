

import React from "react";

function KategoriFiltre({ seciliKategori, setKategori, kategoriler }) {
  return (
    <div className="kategori-filtre">
      <label htmlFor="kategori">Kategoriye Göre Filtrele: </label>
      <select
        id="kategori"
        value={seciliKategori}
        onChange={(e) => setKategori(e.target.value)}
      >
        {kategoriler.map((kategori) => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KategoriFiltre;