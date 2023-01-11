import React from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div className='quiz-container'>
            <h4 className='my-3 q-name text-danger'>Quiz Name: <u>{quiz.data.name}</u></h4>
            <h2>Total Quiz: {quiz.data.questions.length}</h2>


            {
                
               quiz.data.questions.map((qus, idx) => <QuizCard
               key={qus.id}
               qus= {qus}
               idx= {idx+1}
            
               ></QuizCard>) }
        </div>
    );
};

export default Quiz;