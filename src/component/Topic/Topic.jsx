import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({tIcon}) => {
    // console.log(tIcon);
    const {logo,name,id } =tIcon;
    // const buttonhandler = (id) =>{
    //     console.log(id);
    //     fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    //     .then(res => res.json())
    //     .then (data => console.log(data))
    // }
    return (
        <div>
            <div className="icons">
                <img src={logo} alt="" />
            <div className='icons-info'>
            <p>{name}</p>
                <Link to= {`/quiz/ ${id}`} className='button'>Start Practice</Link>
            </div>
            </div>
        </div>
    );
};

export default Topic;