import Link from 'next/link';
import React from 'react';

const team = [
    {
        "id": 1,
        "name": "Dr. Nusrat Jahan",
        "role": "Gynecologist",
        "age": 38,
        "gender": "Female",
        "icon": "👩‍⚕️",
        "available": true
    },
    {
        "id": 2,
        "name": "Md. Raihan Kabir",
        "role": "Pediatrician",
        "age": 45,
        "gender": "Male",
        "icon": "👨‍⚕️",
        "available": true
    },
    {
        "id": 3,
        "name": "Sadia Ahmed",
        "role": "Patient",
        "age": 26,
        "gender": "Female",
        "icon": "🧑",
        "available": false
    },
    {
        "id": 4,
        "name": "Tanvir Hasan",
        "role": "Receptionist",
        "age": 30,
        "gender": "Male",
        "icon": "🧑‍💼",
        "available": true
    },
    {
        "id": 5,
        "name": "Farzana Rahman",
        "role": "Nurse",
        "age": 34,
        "gender": "Female",
        "icon": "👩‍⚕️",
        "available": true
    }
]


const OurTeamSection = () => {
    return (
        <div>
            {
                team?.map((item) => {
                    return <Link href={`/Services/OurTeam/${item?.id}`}  key={item?.id}>
                        <div className='bg-green-400 my-4 text-black px-4 py-2 rounded-sm'>
                            <h1> name : {item?.name} </h1>
                            <h1>Role : {item?.role} </h1>
                        </div>
                    </Link>
                })
            }
        </div>
    );
};

export default OurTeamSection;