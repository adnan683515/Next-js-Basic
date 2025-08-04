import React from 'react';

const AboutSlugPage =  async ({ params }) => {

    const p = await params
    console.log(p)
    return (
        <div>
            <h1>About slug pages dynamic route</h1>
        </div>
    );
};

export default AboutSlugPage;