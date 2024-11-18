import React from 'react'
import '../index.css'
const Form = () => {
    return (
        <div className='pt-12'>
            <form>
                <div className='relative'>
                    <label for="mortgage amount" className='text-lg text-Neutral-slate-500 font-display font-medium'>Mortgage Amount</label>
                    <input type='nunber' className='  border border-Neutral-slate-500 rounded-md w-full h-12 my-2 pl-16 font-display font-semibold text-Neutral-slate-900 hover:border-Neutral-slate-900' />
                    <span className='absolute left-0.5 bg-Neutral-slate-100 h-[46px] rounded-tl-md rounded-bl-md bottom-[0.6rem] font-display'><p className='px-4 py-3 font-bold text-Neutral-slate-500'>£</p></span>
                </div>
                <div className='py-6 flex justify-between space-x-6' >
                    <div className='relative'>
                        <label for="mortgage Term" className='text-lg text-Neutral-slate-500 font-display font-medium'>Mortgage Term</label>
                        <input type='nunber' className='  border border-Neutral-slate-500 rounded-md w-full h-12 my-2 pl-4 font-display font-semibold text-Neutral-slate-900 ' />
                        <span className='absolute right-0.5 bg-Neutral-slate-100 h-[46px] rounded-tl-md rounded-bl-md bottom-[0.6rem]'><p className='px-4 py-3 font-display font-bold text-Neutral-slate-500 '>years</p></span>
                    </div>
                    <div className='relative'>
                        <label for="interest rate" className='text-lg text-Neutral-slate-500 font-display font-medium'>Interest Rate</label>
                        <input type='nunber' className=' border border-Neutral-slate-500 rounded-md w-full h-12 my-2 pl-4 font-display font-semibold text-Neutral-slate-900' />
                        <span className='absolute right-0.5 bg-Neutral-slate-100 h-[46px] rounded-tl-md rounded-bl-md top-[37px] '><p className='px-4 py-3 font-display font-bold text-Neutral-slate-500'>%</p></span>
                    </div>
                </div>
                <div>
                    <div className='h-12 w-full border border-Neutral-slate-500 rounded-md pt-2 pl-4 hover:border-primary-lime'>
                        <input type='radio' value='repayment' className='h-4 w-4 ' />
                        <label for="repayment" className='text-lg text-Neutral-slate-900 font-display font-medium pl-4'>Repayment</label>
                    </div>
                    <div className='h-12 w-full border border-Neutral-slate-500 rounded-md my-2 pt-2 pl-4'>
                        <input type='radio' value='interest' className='h-4 w-4 text-Neutral-slate-500' />
                        <label for="interest only" className='text-lg text-Neutral-slate-900 font-display font-medium pl-4'>Interset Only</label>
                    </div>
                </div>
                <button className='bg-primary-lime text-Neutral-slate-900 rounded-3xl w-3/4 h-14 font-semibold font-display my-10 hover:opacity-75'>Calculate Repayments</button>
            </form>
        </div>
    )
}

export default Form