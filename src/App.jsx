import { useState } from 'react'
import './App.css'
import Form from './components/Form'
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div className='flex justify-center items-center'>
    <div className='max-w-5xl mx-auto  my-48 rounded-3xl bg-white shadow-lg'>
      <div className='flex md:flex-row flex-col space-x-0 md:space-x-10  '>
        <div className='w-1/2 pt-12 pl-6'>
          <div className='flex justify-between items-center '>
            <h1 className='text-3xl text-Neutral-slate-900 font-display font-semibold'>Mortgage calculator</h1>
            <a href='/' className='underline text-lg text-Neutral-slate-700 font-display'>Clear All</a>
          </div>
          <Form>
          </Form>
        </div>
        <div className='w-1/2 bg-Neutral-slate-900   rounded-bl-[100px] rounded-tr-3xl rounded-br-3xl h-full'>
          <div className='flex justify-center items-center mt-36 mb-6 '>
            <img src='/images/illustration-empty.svg' class='h-full items-center'></img>
          </div>
          <div className='px-8 pb-44'>
            <h2 className='text-white text-2xl text-center font-display'>Results shown here</h2>
            <p className='text-Neutral-slate-500 text-center  pt-4 font-display'>Complete the form and click "calculate repayments" to see what your monthly repayments will be </p>
          </div>
        </div>
      </div>
    </div>
    // {/* </div> */}
  )
}

export default App
