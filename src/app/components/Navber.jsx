import Link from 'next/link';
import React from 'react';

const Navber = () => {
    return (
        <nav className='flex justify-center items-center'>
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