import { useState } from 'react'
import './App.css'
import Form from './components/Form'
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div className='flex justify-center items-center'>
    <div className='max-w-6xl mx-auto  my-48 rounded-3xl bg-white shadow-lg'>
      <div className='flex space-x-20 '>
        <div className='w-1/2 py-12 pl-6'>
          <div className='flex justify-between items-center '>
            <h1 className='text-3xl text-slate-900 '>Mortgage calculator</h1>
            <a href='/' className='underline text-slate-600 text-lg'>Clear All</a>
          </div>
          <Form>
          </Form>
        </div>
        <div className='w-1/2 bg-slate-900   rounded-bl-[100px] rounded-tr-3xl rounded-br-3xl h-full'>
          <div className='flex justify-center items-center mt-48 mb-8 '>
            <img src='/images/illustration-empty.svg' class='h-full items-center'></img>
          </div>
          <div className='px-10 pb-48'>
            <h2 className='text-white text-2xl text-center'>Results shown here</h2>
            <p className='text-slate-500 text-center text-lg pt-4 '>Complete the form and click "calculate repayments" to see what your monthly repayments will be </p>
          </div>
        </div>
      </div>
    </div>
    // {/* </div> */}
  )
}

export default App
