import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';
import img from '../img/quiz.jpeg';



const Home = () => {
    const topics = useLoaderData();
    const topicsIcon =  topics.data;

    return (
        <div>
            <div className='info-container d-lg-flex'>
                <img src={img} alt="" />
                <h4>Play this game to review Programming. <br /> There different types of programming languages in use today and we have been able <br /> to cover each of the major ones in depth. <br /> In this quiz you will get to review all you know about react, Javascript, css , and git.</h4>
            </div>
           <div className='icons-container'>
            {
               topicsIcon.map(tIcon => <Topic
               key={tIcon.id}
               tIcon ={tIcon}
               
               ></Topic>)
            }
           </div>
        </div>
    );
};

export default Home;