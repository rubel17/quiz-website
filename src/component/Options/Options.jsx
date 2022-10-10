import React from 'react';
import { Link } from 'react-router-dom';
import './Options.css';

const Options = ({options, optionhandler}) => {
    // console.log(options);
    return (
        <div className='options-container'>
            {
                options.map(option => <h5 
                     className='option'>
                    <Link onClick={() => optionhandler(option)}>
                    <input type="radio" value="Male" name="gender" /> </Link>
                    {option}
                    </h5>)
            }
        </div>
    );
};

export default Options;