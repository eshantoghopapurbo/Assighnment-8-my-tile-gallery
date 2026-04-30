import Link from "next/link";
import Image from "next/image";
import { FaGlobeAmericas, FaShareAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

 
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                TILES GALLERY
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              architectural surfaces for the contemporary designer.
            </p>
            <div className="flex gap-4">
                <FaGlobeAmericas />
                <FaShareAlt />
                <CgMail />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              DISCOVER
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/generate"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  COLLECTION
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  SHOWROOM
                </Link>
              </li>
            </ul>
          </div>
          {/* IMPACT */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              IMPACT
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                SUSTAINAVILITY
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">  
            <Link
              href="/logup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              CONTACT US
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              2024 ARCHITECTURAL TILES GALLERY ALL RIGHT ALL RIGHTS RESSERVED.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;