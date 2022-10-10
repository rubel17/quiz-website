import React from 'react';
import Options from '../Options/Options';
import './QuizCard.css';

const QuizCard = ({qus}) => {
    console.log(qus);
    const {options, question, correctAnswer} = qus;
    // console.log(options.options);
    const optionhandler =(option) =>{
        console.log('option click',option);
        if(correctAnswer === option){
            alert('right ans');
        }
        else{
            alert('wrong ans');
        }
        
    }
    return (
        <div>
            <div>
                
                <h4>Quiz {`${1}`}:{question}</h4>
                <Options options={options}
                optionhandler={optionhandler}
                ></Options>
            </div>
        </div>
    );
};

export default QuizCard;