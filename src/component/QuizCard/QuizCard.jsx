import React from 'react';
import Options from '../Options/Options';
import './QuizCard.css';
import { Link } from 'react-router-dom';
import {Eye } from "heroicons-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const   QuizCard = ({qus, idx}) => {
    const {options, question, correctAnswer} = qus;

    const optionhandler =(option) =>{
        if(correctAnswer === option){
            toast.success('Right Answer', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            });
        }
        else{
            toast.warning('wrong Answer', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            });
        }
        
    };

    const rightAnswer = (correctAnswer) =>{
        toast.success(correctAnswer, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
    }
    return (
        <div>
            <div>
                
                <div className='question-container'>
                    
            <h4>Quiz {idx} :{question.replace(/(<p[^>]+?>|<p>|<\/p>)/g, "")}</h4>
                     <Link className='eye' onClick={() => rightAnswer(correctAnswer)}><Eye/></Link>
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