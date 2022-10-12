import { useLoaderData } from 'react-router-dom';
import Recharts from '../Recharts/Recharts';

const Statistics = () => {
    const topics = useLoaderData();
 
    return (
        <div>
            <Recharts topics ={topics}></Recharts>
        </div>
    );
};

export default Statistics;