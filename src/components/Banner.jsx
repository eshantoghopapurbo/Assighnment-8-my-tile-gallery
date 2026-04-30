import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://www.tilegallery.co.nz/application/files/2716/8550/6098/Homepage_top-image.webp')] h-[90vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex ">
        <div className="max-w-7xl mx-auto px-6 text-white mt-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
          Curated architectural surfaces for the modern visionary. <br />
          Experience our collection of premium ceramic,marble and <br />
          slate.
          </p>
          <div className="flex gap-4">
            <Link href="/browse">
              <Button variant="outline" className="text-white">
                BROWSE NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;