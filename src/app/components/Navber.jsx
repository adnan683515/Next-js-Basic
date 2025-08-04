"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {

    const pathname = usePathname()
    
    if(pathname.includes('Deshboard')) return <></>
    return (
        <nav className='flex justify-center items-center bg-orange-700 text-black py-3'>
            <ul className='flex justify-between items-center w-1/2'>
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/Services'}>
                    <li>Services</li>
                </Link>
                <Link href={'/About'}>
                    <li>About</li>
                </Link>

                <Link href={'/Account'}>
                    <li>Account</li>
                </Link>

            </ul>
        </nav>
    );
};

export default Navber;