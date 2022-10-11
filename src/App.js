import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import ErrorPage from './component/ErrorPage.jsx/ErrorPage';
import Home from './component/Home/Home';
import Main from './component/layout/Main';
import Quiz from './component/Quiz/Quiz';
import Statistics from './component/Statistics/Statistics';
import Topics from './component/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'topics',
          element:<Topics></Topics>
        },
        {
          path:'statistics',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'quiz/:quizId',
          loader:({params}) =>{
            // console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quiz></Quiz>
        },
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ])
  return (
    <div className="">
      <RouterProvider router = {router}>

      </RouterProvider>
    </div>
  );
}

export default App;
