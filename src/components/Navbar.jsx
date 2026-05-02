"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import useAvatar from '../../public/image/logo.png'
import Image from 'next/image';
import { IoIosHome, IoIosMenu, IoIosClose } from 'react-icons/io';
import { FaBorderAll } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { Spinner } from '@heroui/react';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b bg-white sticky top-0 z-50 px-4">
      <div className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo Section */}
        <div className="flex gap-2 items-center flex-shrink-0">
          <Image
            src={"/tile.jpg"}
            alt="tile"
            loading="eager"
            width={35}
            height={35}
            className="object-cover rounded-md"
          />
          <h1 className="font-black text-base md:text-xl tracking-tight">The Tile Gallery</h1>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none text-zinc-800">
            {isOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>

        {/* Navigation Links - Desktop & Mobile */}
        <div className={`
          absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent border-b md:border-none
          flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-8 text-sm font-bold text-zinc-700">
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/"} className='flex items-center gap-1.5 hover:text-blue-600 transition-colors'>
                <IoIosHome className="text-lg" /> Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/tiles"} className='flex items-center gap-1.5 hover:text-blue-600 transition-colors'>
                <FaBorderAll /> All Tiles
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link href={"/profile"} className="hover:text-blue-600 transition-colors">My Profile</Link>
            </li>
          </ul>

          {/* Auth Section - Inside Mobile Menu */}
          <div className="md:hidden pt-4 border-t w-full flex flex-col items-center">
            {isPending ? (
              <Spinner size="sm" />
            ) : user ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image src={user?.image || useAvatar} alt='avatar' width={32} height={32} className='rounded-full' />
                  <span className='font-bold'>{user?.name}</span>
                </div>
                <button
                  className='text-red-500 font-bold'
                  onClick={async () => await authClient.signOut()}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className='flex gap-4 font-bold'>
                <Link href={"/login"} className='text-blue-600' onClick={() => setIsOpen(false)}>LogIn</Link>
                <Link href={"/singup"} className='bg-blue-600 text-white px-4 py-1.5 rounded-lg' onClick={() => setIsOpen(false)}>SignUp</Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-5">
          {isPending ? (
            <Spinner size="md" />
          ) : user ? (
            <div className="flex items-center gap-4">
              <div className='flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full border'>
                <h2 className='text-sm font-bold text-zinc-800'>{user?.name}</h2>
                <Image src={user?.image || useAvatar} alt='user' width={30} height={30} className='rounded-full border border-blue-100'></Image>
              </div>
              <button
                className='text-sm font-black text-red-500 hover:underline'
                onClick={async () => await authClient.signOut()}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link href={"/login"} className='text-sm font-bold text-zinc-700 hover:text-blue-600'>LogIn</Link>
              <Link href={"/singup"} className='text-sm font-bold bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all'>SignUp</Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;