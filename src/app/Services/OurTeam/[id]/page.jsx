import React from 'react';

const TeamPersonDetails = ({params}) => {
    const id = params?.id
    return (
        <div>
            <h1> parson id : {id} </h1>
        </div>
    );
};

export default TeamPersonDetails;