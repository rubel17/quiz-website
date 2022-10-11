import React from 'react';
import { LineChart, Line, XAxis,Tooltip, YAxis, AreaChart, CartesianGrid, Area, ResponsiveContainer} from 'recharts';



const Recharts = ({topics}) => {
  
    const {data} =topics;
    console.log(data); 
    return (
        <div>
    <div className='my-5'>
        <h4 className='m-5 text-primary'><u>Total Data Info:</u></h4>
    <ResponsiveContainer width="100%" height={500}>
    <LineChart width={400} height={500} data={data}>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
    </div>
    <div className='my-5'>
    <h4 className='m-5 text-info'><u>Id Data Info:</u></h4>
       <ResponsiveContainer width="100%" height={500}>
       <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="id" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
       </ResponsiveContainer>
    </div>
</div>
);
};

export default Recharts;