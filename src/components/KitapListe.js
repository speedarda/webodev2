// src/components/KitapListe.js

import React from "react";
import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriIdler, favoriDurumunuDegistir }) {
  return (
    <div className="kitap-liste">
      {kitaplar.length === 0 ? (
        <p>Aramanızla eşleşen kitap bulunamadı.</p>
      ) : (
        kitaplar.map((kitap) => {
          const favorideMi = favoriIdler.includes(kitap.id);

          return (
            <KitapKarti
              key={kitap.id}
              id={kitap.id}
              baslik={kitap.baslik}
              yazar={kitap.yazar}
              kategori={kitap.kategori}
              favorideMi={favorideMi}
              favoriDurumunuDegistir={favoriDurumunuDegistir}
            />
          );
        })
      )}
    </div>
  );
}

export default KitapListe;