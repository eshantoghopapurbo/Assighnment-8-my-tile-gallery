"use client"
import Link from 'next/link';
import React from 'react';
import useAvatar from '../../public/image/logo.png'
import Image from 'next/image';
import { IoIosHome } from 'react-icons/io';
import { FaBorderAll } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { Spinner } from '@heroui/react';
const Navbar = () => {

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;
  console.log(user, isPending, "session");

  return (
    <div className="border-b px-2">
      <div className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
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

        {isPending ? <Spinner size="lg" /> : user ? (<div className="flex  items-center gap-4">
          <div className='flex items-center gap-2'>
            <h2 className='text-xl font-bold'>{user?.name}</h2>
            <Image src={user?.image ? user.image : useAvatar} alt='user avatar' width={40} height={40} className='rounded-md'></Image>
          </div>
          <button className='text-blue-500 text-bold' onClick={async () => await authClient.signOut()} >Log Out</button>

        </div>) : (<div className='flex gap-3'>
          <button className='text-blue-500 text-bold'>
            <Link href={"/login"}>LogIn</Link>
          </button>
          <button className='text-blue-500 text-bold'>
            <Link href={"/singup"}>SighUp</Link>
          </button>
        </div>)}
      </div>
    </div>
  );
};
export default Navbar;