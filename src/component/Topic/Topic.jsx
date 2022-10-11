import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
import { ArrowRight} from "heroicons-react";

const Topic = ({tIcon}) => {
    // console.log(tIcon);
    const {logo,name,id,total } =tIcon;
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
                <div className='home-total'>
            <h6>{name}:Total Quiz:{total}</h6>
            </div>
            <div className='icons-info'>
                 <h6>{name}</h6>
                <Link to= {`/quiz/ ${id}`} className='button'>Start Practice<ArrowRight/></Link>
            </div>
            
        </div>
     </div>
    );
};

export default Topic;