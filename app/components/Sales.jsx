import React from 'react'
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts' 

function Sales({data}) {
  
  return (
    <div className='flex  flex-col gap-[30px] '>
      <h2 className='font-semibold text-[18px]'>Total Sales Per Month</h2>
        <ResponsiveContainer width="100%" height={500} className='text-[16px]'>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis
            domain={[0, 1000000]}
            ticks={[0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000]}
            
            />
            <Tooltip />
            <Bar dataKey="sales" fill='green' />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="profit" stroke="#f93005" />
          </ComposedChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Sales