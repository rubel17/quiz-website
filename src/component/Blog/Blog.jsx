import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 border border-success p-5'>
           <div>
            <h3 className='text-primary'>1.What is the purpose of react router</h3>
            <p><u className='text-success'>Answer:</u> <br />
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, <br /> allows changing the browser URL, and keeps the UI in sync with the URL.Create the one page application.
            </p>
           </div>
           <div>
           <h3 className='text-primary'>2.How does context api work</h3>
            <p><u className='text-success'>Answer:</u> <br />
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative <br /> to "prop drilling" or moving props from grandparent to child to parent, and so on. <br /> Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
           </div>
           <div>
           <h3 className='text-primary'>3.React Hook :useRef definition</h3>
            <p><u className='text-success'>Answer:</u> <br />
            * The useRef Hook allows you to persist values between renders. <br />

            * It can be used to store a mutable value that does not cause a re-render when updated. <br />

            * It can be used to access a DOM element directly. <br />

            * If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

            To avoid this, we can use the useRef Hook. <br />

            *In general, we want to let React handle all DOM manipulation.

            *But there are some instances where useRef can be used without     causing issues.

             In React, we can add a ref attribute to an element to access it directly in the DOM.
            </p>
           </div>
        </div>
    );
};

export default Blog;