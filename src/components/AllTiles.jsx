"use client";

import React, { useEffect, useState } from "react";
import AllCard from "./AllCard";
import SearchBar from "./SearchBer";


const AllTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000//data.json");
      const data = await res.json();
      setTiles(data);
    };

    fetchData();
  }, []);
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase()) ||
    tile.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mt-6">
        All Tiles Gallery
      </h1>

   
      <SearchBar search={search} setSearch={setSearch} />
      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTiles.map((tile) => (
          <AllCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};
export default AllTiles;