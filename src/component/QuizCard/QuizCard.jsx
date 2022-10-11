import React from 'react';
import Options from '../Options/Options';
import './QuizCard.css';
import { Link } from 'react-router-dom';
import {Eye } from "heroicons-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = ({qus}) => {
    // console.log(qus);
    const {options, question, correctAnswer} = qus;
    // console.log(options.options);
    const optionhandler =(option) =>{
        console.log('option click',option);
        if(correctAnswer === option){
            // alert('right ans');
            toast.success('Right Answer', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            });
        }
        else{
            // alert('wrong ans');
            toast.warning('wrong Answer', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            });
        }
        
    };

    const rightAnswer = (correctAnswer) =>{
        // alert(correctAnswer);
        toast.success(correctAnswer, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
    }
    return (
        <div>
            <div>
                
                <div className='question-container'>
                <h4>Quiz {`${1}`}:{question}</h4>
                <Link onClick={() => rightAnswer(correctAnswer)}><Eye/></Link>
                </div>
                <Options 
                options={options}
                optionhandler={optionhandler}
                ></Options>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizCard;