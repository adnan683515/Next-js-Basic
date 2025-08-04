"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter()
    const isLoggedIn = false
    const navigatePage = ()=>{
        if(isLoggedIn){
            router.push('/About/Adress')
        }
        else{
            router.push('/')
        }
    }
    return (
        <div className='space-y-4'>
            <h1>This is about page</h1>
            <button onClick={navigatePage} className='bg-green-500 px-4 py-2 rounded-sm '> Address </button>
        </div>
    );
};

export default AboutPage;