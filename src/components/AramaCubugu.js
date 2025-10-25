// src/components/AramaCubugu.js

import React from "react";

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <div className="arama-cubugu">
      <label htmlFor="arama">Kitap Ara (Başlığa Göre): </label>
      <input
        type="text"
        id="arama"
        value={aramaMetni}
        onChange={(e) => setAramaMetni(e.target.value)}
        placeholder="Örn: Yaban"
      />
    </div>
  );
}

export default AramaCubugu;