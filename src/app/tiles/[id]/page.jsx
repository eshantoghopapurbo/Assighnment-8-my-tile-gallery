    

import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const fetchData = async () => {
  const res = await fetch("https://assighnment-8-my-tile-gallery.vercel.app/data.json");
  const data = await res.json();
  return data;
};

const DetailsPage = async ({ params }) => {
  const tiles = await fetchData();
  const { id } = await params;

  const filteredTiles = tiles.find((t) => t.id === id);
 
  return (
    <div className="max-w-7xl mx-auto p-6 mt-9">
      <Card className="grid md:grid-cols-2 gap-8 p-6 rounded-3xl shadow-xl border">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
          <Image
            src={filteredTiles.image}
            alt={filteredTiles.title}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between space-y-8">

          {/* TITLE */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {filteredTiles.title}
            </h1>
            <p className="text-gray-500 mt-3">
              {filteredTiles.description}
            </p>
          </div>

          {/* INFO */}
          <div className="space-y-2 text-sm">
            <p className="text-2xl">
              <span className="font-semibold">Category:</span>{" "}
              {filteredTiles.category}
            </p>
            <p className="text-2xl">
              <span className="font-semibold">Material:</span>{" "}
              {filteredTiles.material}
            </p>
            <p className="text-2xl">
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-lg font-bold text-green-600">
                ${filteredTiles.price}
              </span>
            </p>
            <p className="text-2xl">
              <span className="font-semibold">Material:</span>{" "}
              {filteredTiles.currency}
            </p>
          </div>
          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-gray-200 rounded-full">
              Minimalist
            </span>
            <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
              Blue
            </span>
            <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
              Modern
            </span>
          </div>

          {/* BUTTON */}
         <Link href="/">
          <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Back to Home
          </button>
         </Link>
        </div>
      </Card>
    </div>  
  );
};

export default DetailsPage;