import React from 'react';
import Passwordpage from './password/page';
import Link from 'next/link';

const Account = () => {
    return (
        <div>
            <h1 className='mb-5'>account Account</h1>
            <Link className='mx-4  text-black bg-white p-3 rounded-sm' href={'/Account/password'}>
            password 
            </Link>

            <Link className='bg-blue-600 px-4 py-2 rounded-s-sm' href={'/Account/contact'}>

            contact page
            </Link>
        </div>
    );
};

export default Account;