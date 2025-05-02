'use client'
import Sales from '@/app/components/Sales'
// import { Main } from 'next/document'
import React from 'react'

const staticData = [
  
  { month: 'Jan', sales: 250000, profit: 2400 },
  { month: 'Feb', sales: 30000, profit: 13980 },
  { month: 'Mar', sales: 200000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 180090, profit: 40000 },
  { month: 'Jun', sales: 239000, profit: 77800 },
  { month: 'Jul', sales: 340090, profit: 80300 },
  { month: 'Aug', sales: 349000, profit: 70300 },
  { month: 'Sep', sales: 388990, profit: 43000 },
  { month: 'Oct', sales: 577790, profit: 250000 },
  { month: 'Nov', sales: 556900, profit: 330000 },
  { month: 'Dec', sales: 779070, profit: 350000 },

]

function Home() {
 
  return (
    <main className=' p-[50px]'>
      <h1 className='text-3xl font-bold underline mb-4'>Sales Chart</h1>
      <Sales data={staticData} />
    </main>
  )
}

export default Home