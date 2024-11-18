import React from 'react'

const Form = () => {
    return (
        <div className='py-12'>
            <form>
                <label for="mortgage amount" className='text-lg text-slate-500'>Mortgage Amount</label>
                <input type='nunber' placeholder='$' className='placeholder-slate-500 border border-slate-500 rounded-md w-full h-12 my-2' />
                <div className='py-6 flex justify-between space-x-6' >
                    <div>
                        <label for="mortgage Term" className='text-lg text-slate-500'>Mortgage Term</label>
                        <input type='nunber' placeholder='$' className='placeholder-slate-500 border border-slate-500 rounded-md w-full h-12 my-2' />
                    </div>
                    <div>
                        <label for="interest rate" className='text-lg text-slate-500'>Interest Rate</label>
                        <input type='nunber' placeholder='$' className='placeholder-slate-500 border border-slate-500 rounded-md w-full h-12 my-2' />
                    </div>
                </div>
                <div>
                    <label for="mortgage Type" className='text-lg text-slate-500'>Mortgage Type</label>
                    <input type='radio' value='Repayment' className='text-slate-500 border border-slate-500 rounded-md my-2' />
                    <input type='radio' value='interest only' />
                </div>
            </form>
        </div>
    )
}

export default Form