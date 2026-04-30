import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
          alt="luxury interior"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl mx-auto px-6 text-white">

          {/* Accent line */}
          <div className="w-16 h-[2px] bg-white/70 mb-6"></div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-3xl">
            Crafted Surfaces <br />
            For Timeless Spaces
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
            Premium ceramic, marble, and stone collections designed 
            to elevate modern architecture with elegance and precision.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5">
            <Link href="/browse">
              <Button 
                variant="solid" 
                className="bg-white text-black hover:bg-gray-200 px-7 py-6 text-sm font-medium tracking-wide"
              >
                Browse Now
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;