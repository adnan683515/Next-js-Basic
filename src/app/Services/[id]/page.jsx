import React from 'react';

const ServiceDetailsPage = ({params}) => {
    const id = params?.id

    return (
        <div>
            <h1>details apge {id} </h1>
        </div>
    );
};

export default ServiceDetailsPage;