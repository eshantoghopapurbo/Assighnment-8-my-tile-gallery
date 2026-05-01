'use client'
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const NotFoundPage = () => {
    const tostfyhandle = () => {
        toast('go to home page')
    }
    return (
        <div className='flex justify-center items-center flex-col h-[80vh] gap-4'>
            <h2 className='font-bold text-6xl text-purple-600'>
                This is a not found
            </h2>
            <Link href='/'>
            <button onClick={tostfyhandle} className='btn bg-blue-500 px-4 text-white'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;