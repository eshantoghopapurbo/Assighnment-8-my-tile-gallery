
import Link from 'next/link';
import React from 'react';
import useAvatar from '../../public/image/logo.png'
import Image from 'next/image';
import { IoIosHome } from 'react-icons/io';
import { FaBorderAll } from 'react-icons/fa';
const Navbar = () => {
    return (
         <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/tile.jpg"}
            alt="tile"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg ">The Tile Gallery</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li className='text-sm font-bold'>
            <Link href={"/"} className='flex items-center gap-1.5'><IoIosHome /> Home</Link>
          </li>
          <li className='text-sm font-bold'>
            <Link href={"/tiles"} className='flex items-center gap-1.5'><FaBorderAll /> All Tiles</Link>
          </li>
          <li className='text-sm font-bold'>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex  items-center gap-4">
          <div>
           <Image src={useAvatar} alt='pic' width={40} height={40}></Image>
           
          </div>
              <button className='text-blue-500 text-bold'>
                <Link href={"/login"}>LogIn</Link>
              </button>
           
              <button className='text-blue-500 text-bold'>
                <Link href={"/register"}>Register</Link>
              </button>
           
          
        </div>
      </nav>
    </div>
    );
};

export default Navbar;