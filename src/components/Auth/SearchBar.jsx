import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    alert(`Buscando: ${search}`);
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 w-full rounded-md"
        placeholder="Buscar estación..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
