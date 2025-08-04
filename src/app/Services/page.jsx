import Link from 'next/link';
import React from 'react';



const service = [
    {
        "id": 1,
        "name": "General Consultation",
        "description": "Routine checkups and basic health advice from certified doctors.",
        "icon": "🩺",
        "price": 500,
        "available": true
    },
    {
        "id": 2,
        "name": "Dental Care",
        "description": "Teeth cleaning, cavity filling, and other dental treatments.",
        "icon": "🦷",
        "price": 800,
        "available": true
    },
    {
        "id": 3,
        "name": "Gynecology",
        "description": "Women's health services including prenatal and postnatal care.",
        "icon": "👩‍⚕️",
        "price": 1000,
        "available": false
    },
    {
        "id": 4,
        "name": "Pathology Test",
        "description": "Blood tests, urine tests, and other diagnostics.",
        "icon": "🧪",
        "price": 300,
        "available": true
    },
    {
        "id": 5,
        "name": "Child Specialist",
        "description": "Expert pediatric care for infants and children.",
        "icon": "👶",
        "price": 700,
        "available": true
    }
]

const ServicesPage = () => {



    return (
        <div>


            <div>
                <Link className='px-5 py-2 bg-white text-black' href='/Services/OurTeam'>Team</Link>
            </div>
            {
                service?.map((item) => {
                    return <Link href={`/Services/${item?.id}`}  key={item?.id}>
                        <div className='bg-orange-600 my-3 rounded-sm px-4 py-2'>

                            <h1> service name : {item?.name}</h1>
                            <h2> Des : {item?.description} </h2>
                        </div>
                    </Link>
                })
            }
        </div>
    );
};

export default ServicesPage;