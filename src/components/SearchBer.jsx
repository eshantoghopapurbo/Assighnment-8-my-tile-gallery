"use client";
import { Input } from "@heroui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full max-w-xl">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder= "Search tiles by title or category..."
          variant="bordered"
          size="lg"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;