import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
import { ArrowRight} from "heroicons-react";

const Topic = ({tIcon}) => {
    const {logo,name,id,total } =tIcon;
    return (
        <div>
            <div className="icons">
                <img src={logo} alt="" />
                <div className='home-total'>
            <h6>{name}:Total Quiz:{total}</h6>
            </div>
            <div className='icons-info d-flex'>
                 <h6>{name}</h6>
                <Link to= {`/quiz/ ${id}`} className='button d-flex'>Start Practice<ArrowRight/></Link>
            </div>
            
        </div>
     </div>
    );
};

export default Topic;