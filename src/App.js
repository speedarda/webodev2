// src/App.js

import React, { useState, useEffect } from "react";
import AramaCubugu from "./components/AramaCubugu";
import KategoriFiltre from "./components/KategoriFiltre";
import KitapListe from "./components/KitapListe";
import FavoriPaneli from "./components/FavoriPaneli";
import tumKitaplar from "./data";
import "./App.css";

const DEPOLAMA_ARAMA_METNI_KEY = "sonAramaMetni";
const DEPOLAMA_FAVORILER_KEY = "favoriKitaplar";

function App() {
  const [aramaMetni, setAramaMetni] = useState(() => {
    return localStorage.getItem(DEPOLAMA_ARAMA_METNI_KEY) || "";
  });

  const [seciliKategori, setSeciliKategori] = useState("Tümü");

  const [favoriIdler, setFavoriIdler] = useState(() => {
    const kayitliFavoriIdler = localStorage.getItem(DEPOLAMA_FAVORILER_KEY);
    return kayitliFavoriIdler ? JSON.parse(kayitliFavoriIdler) : [];
  });

  useEffect(() => {
    localStorage.setItem(DEPOLAMA_ARAMA_METNI_KEY, aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem(DEPOLAMA_FAVORILER_KEY, JSON.stringify(favoriIdler));
  }, [favoriIdler]);

  const tumKategoriler = [
    "Tümü",
    ...new Set(tumKitaplar.map((kitap) => kitap.kategori)),
  ];

  const filtrelenmisKitaplar = tumKitaplar
    .filter((kitap) => {
      return seciliKategori === "Tümü" || kitap.kategori === seciliKategori;
    })
    .filter((kitap) => {
      return kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    });

  const favoriKitapNesneleri = tumKitaplar.filter((kitap) =>
    favoriIdler.includes(kitap.id)
  );

  const favoriDurumunuDegistir = (kitapId) => {
    const favorideMi = favoriIdler.includes(kitapId);
    if (favorideMi) {
      setFavoriIdler(favoriIdler.filter((id) => id !== kitapId));
    } else {
      setFavoriIdler([...favoriIdler, kitapId]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Web Kütüphanesi</h1>
      </header>
      <div className="layout">
        <aside className="sol-panel">
          <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />

          <KategoriFiltre
            seciliKategori={seciliKategori}
            setKategori={setSeciliKategori}
            kategoriler={tumKategoriler}
          />

          <FavoriPaneli favoriKitaplar={favoriKitapNesneleri} />
        </aside>

        <main className="sag-panel">
          <KitapListe
            kitaplar={filtrelenmisKitaplar}
            favoriIdler={favoriIdler}
            favoriDurumunuDegistir={favoriDurumunuDegistir}
          />
        </main>
      </div>
    </div>
  );
}

export default App;