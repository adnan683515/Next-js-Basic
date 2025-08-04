import React from 'react';

const DeshboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 my-4'>
            
            <div className='col-span-4 bg-orange-700  '>
                sidebar menu
            </div>
            <div className='col-span-8'>
                {children}
            </div>
        </div>
    );
};

export default DeshboardLayout;