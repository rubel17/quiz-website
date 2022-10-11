// import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recharts from '../Recharts/Recharts';

const Statistics = () => {
    const topics = useLoaderData();
    // console.log(topics);
 
    return (
        <div>
            <Recharts topics ={topics}></Recharts>
        </div>
    );
};

export default Statistics;