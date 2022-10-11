import React from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data.questions);
    return (
        <div className='quiz-container'>
            <h4 className='mt-3 text-danger'>Quiz Name: {quiz.data.name}</h4>
            <h2>Total Quiz: {quiz.data.questions.length}</h2>

            {
               quiz.data.questions.map(qus => <QuizCard
               key={qus.id}
               qus= {qus}
               
               ></QuizCard>) 
            }
        </div>
    );
};

export default Quiz;