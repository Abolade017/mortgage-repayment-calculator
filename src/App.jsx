import { useState } from 'react'
import './App.css'
import './index.css'
// import Form from './components/Form'
function App() {
  const [inputFields, setInputFields] = useState({
    mortgageAmount: "",
    interestRate: "",
    mortgageTerm: "",
    mortgageType: null
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [monthlyRepayment, setMonthlyRepayment] = useState("");
  // const [totalRepayment, setTotalRepayment] = useState("");
  // input form validation funtion
  const validateValues = (inputValues) => {
    let errors = {};
    if (!inputValues.mortgageAmount) {
      errors.mortgageAmount = "This field is required!";
    }
    if (!inputValues.interestRate) {
      errors.interestRate = "This field is required!";
    }
    if (!inputValues.mortgageTerm) {
      errors.mortgageTerm = "This field is required!"
    }
    if (!inputValues.mortgageType) {
      errors.mortgageType = "This field is required!";
    }
    return errors;
  };
  // input onChange function
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });

  };
  // submit form calculate repayment function
  const calculateRepayment = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    setMonthlyRepayment(() => {
      const amount = parseFloat(inputFields.mortgageAmount);
      const rate = parseFloat(inputFields.interestRate) / 100 / 12;
      const term = parseFloat(inputFields.mortgageTerm) * 12;
      let repayment;
      if (inputFields.mortgageType === 'repayment') {
        repayment = (amount * rate) / (1 - Math.pow(1 + rate, -term)).toLocaleString();
        console.log(repayment.toLocaleString());
      } else if (inputFields.mortgageType === 'interestOnly') {
        repayment = (amount * rate)
        console.log(repayment);
      }
      setMonthlyRepayment(repayment ? repayment.toFixed(2) : null)
      console.log(repayment);
    })
    console.log(inputFields)
  }
  const totalRepayment = monthlyRepayment * parseFloat(inputFields.mortgageTerm) * 12;
  // clear All function
  const clearAll = () => {
    setInputFields({
      mortgageAmount: '',
      mortgageTerm: '',
      interestRate: '',
      mortgageType: null
    })
    setMonthlyRepayment(null);
  }

  return (
    <div className='max-w-5xl mx-auto  my-48 rounded-3xl bg-white shadow-lg'>
      <div className='flex md:flex-row flex-col space-x-0 md:space-x-10  '>
        <div className='w-1/2 pt-10 pl-6'>
          <div className='flex justify-between items-center '>
            <h1 className='text-3xl text-Neutral-slate-900 font-display font-semibold'>Mortgage calculator</h1>
            <button className='underline text-lg text-Neutral-slate-700 font-display' onClick={clearAll}>Clear All</button>
          </div>
          <div className='pt-12'>
            <form onSubmit={calculateRepayment}>
              <div className='relative'>
                <label htmlFor="mortgage amount" className='text-lg text-Neutral-slate-500 font-display font-medium'>Mortgage Amount</label>
                < input type='text' value={inputFields.mortgageAmount} name='mortgageAmount' onChange={handleChange} className='border border-Neutral-slate-500 rounded-md w-full h-12 my-2 pl-16 font-display font-semibold text-Neutral-slate-900 hover:border-Neutral-slate-900' style={{ border: errors.mortgageAmount ? "1px solid hsl(4, 69%, 50%)" : null }}
                />
                <span className={`${errors.mortgageAmount ? 'absolute left-0 bg-primary-red h-[46px] rounded-tl-md rounded-bl-md bottom-[2.05rem] font-display' : 'absolute left-0 bg-Neutral-slate-100 h-[46px] rounded-tl-md rounded-bl-md bottom-[0.55rem] font-display'}`}><p className={`${errors.mortgageAmount ? 'text-white px-4 py-3 font-bold' : 'px-4 py-3 font-bold text-Neutral-slate-500'}`}>£</p></span>

                {errors.mortgageAmount ? (
                  <p className="error text-primary-red">This Field is required!</p>
                ) : null}
              </div>

              <div className='py-6 flex justify-between space-x-6' >
                <div className='relative'>
                  <label htmlFor="mortgage Term" className='text-lg text-Neutral-slate-500 font-display font-medium'>Mortgage Term</label>
                  <input type='text' value={inputFields.mortgageTerm} name='mortgageTerm' onChange={handleChange} className='  border border-Neutral-slate-500 rounded-md w-full h-12 my-2 pl-4 font-display font-semibold text-Neutral-slate-900 ' style={{ border: errors.mortgageTerm ? "1px solid hsl(4, 69%, 50%)" : null }} />
                  <span className={`${errors.mortgageTerm ? 'absolute left-[9.12rem] bg-primary-red h-[46px] rounded-tl-md rounded-bl-md bottom-[2.05rem] font-display' : 'absolute right-[0.15rem] bg-Neutral-slate-100 h-[46px] rounded-tl-md rounded-bl-md bottom-[0.6rem] font-display'}`}><p className={`${errors.mortgageTerm ? 'text-white px-5 py-3 font-bold' : 'px-4 py-3 font-bold text-Neutral-slate-500'}`}>years</p></span>
                  {errors.mortgageTerm ? (
                    <p className="error text-primary-red">This Field is required!</p>
                  ) : null}
                </div>

                <div className='relative'>
                  <label htmlFor="interest rate" className='text-lg text-Neutral-slate-500 font-display font-medium'>Interest Rate</label>
                  <input type='text' value={inputFields.interestRate} name='interestRate' onChange={handleChange} className=' border border-Neutral-slate-500 rounded-md w-full h-12 my-2 pl-4 font-display font-semibold text-Neutral-slate-900' style={{ border: errors.interestRate ? '1px solid hsl(4, 69%, 50%)' : null }} />

                  <span className={`${errors.interestRate ? 'absolute right-[0.06rem] bg-primary-red h-[46px] rounded-tl-md rounded-bl-md top-[37px]' : 'absolute right-[0.15rem] bg-Neutral-slate-100 h-[46px] rounded-tl-md rounded-bl-md top-[37px] '}`} ><p className={`${errors.interestRate ? 'text-white px-4 py-3 font-bold' : 'px-4 py-3 font-display font-bold text-Neutral-slate-500'}`}>%</p></span>
                  {errors.mortgageTerm ? (
                    <p className="error text-primary-red">This Field is required!</p>
                  ) : null}
                </div>
              </div>
              <div>
                <div className={`${inputFields.mortgageType === 'repayment' ? 'h-12 w-full border border-primary-lime bg-primary-lime bg-opacity-20 font-medium rounded-md pt-2 pl-4' : 'h-12 w-full border border-Neutral-slate-500 rounded-md pt-2 pl-4 hover:border-primary-lime '}`} >
                  <div className={`${inputFields.mortgageType === 'repayment' ? 'border border-primary-lime h-4 w-4 rounded-full relative mt-2' : null}`}>
                    <input type='radio' value='repayment' name='mortgageType' onChange={handleChange} checked={inputFields.mortgageType === 'repayment'} className={`${inputFields.mortgageType === 'repayment' ? 'h-2 w-2 bg-primary-lime appearance-none rounded-full absolute top-[3px] left-[3px]' : 'w-4 h-4'}`} />
                    <label htmlFor="repayment" className={`${inputFields.mortgageType === 'repayment' ? 'text-lg text-Neutral-slate-900 font-display font-medium absolute left-7 -top-[6px]' : 'text-lg text-Neutral-slate-900 font-display font-medium pl-4'}`}>Repayment</label>
                  </div>
                </div>
                <div className={`${inputFields.mortgageType === 'interestOnly' ? 'h-12 w-full border border-primary-lime  bg-primary-lime bg-opacity-20 fount-medium rounded-md my-2 pt-2 pl-4' : 'h-12 w-full border border-Neutral-slate-500 rounded-md my-2 pt-2 pl-4'}`}>
                  <div className={`${inputFields.mortgageType === 'interestOnly' ? 'border border-primary-lime h-4 w-4 rounded-full relative mt-2' : null}`}>
                    <input type="radio" value='interestOnly' name='mortgageType' onChange={handleChange} checked={inputFields.mortgageType === 'interestOnly'} className={`${inputFields.mortgageType === 'interestOnly' ? 'h-2 w-2 bg-primary-lime appearance-none rounded-full absolute top-[3px] left-[3px]' : 'h-4 w-4 '}`} />
                    <label htmlFor="interest only" className={`${inputFields.mortgageType === 'interestOnly' ? 'text-lg text-Neutral-slate-900 font-display font-medium absolute left-7 -top-[6px] ' : 'text-lg text-Neutral-slate-900 font-display font-medium pl-4'}`}>Interest Only</label>
                  </div>
                </div>
                {errors.mortgageType ? (
                  <p className="error text-primary-red">This Field is required!</p>
                ) : null}
              </div>
              <button type='submit' className='bg-primary-lime text-Neutral-slate-900 rounded-3xl w-3/4 h-14 font-semibold font-display my-10 hover:opacity-75'>Calculate Repayments</button>
            </form>
          </div>
        </div>
        <div className='w-1/2 bg-Neutral-slate-900   rounded-bl-[100px] rounded-tr-3xl rounded-br-3xl h-full'>
          {monthlyRepayment ?
            <div>
              <div className='px-8 pb-52 pt-10'>
                <h2 className='text-white text-xl font-display'>Your Result</h2>
                <p className='text-Neutral-slate-500 pt-4 font-display'>Your results are shown below based on the information you provided. To adjust the result edit the form and click "calculte repayments" again. </p>
                <div className='relative bg-primary-lime h-48 rounded-md w-full mt-14'>
                  <div className='absolute bg-Neutral-slate-900 shadow-lg rounded-md  top-[4px] w-full px-4'>
                    <p className='pt-10 pb-3 text-Neutral-slate-300 font-display'>Your monthly repayment</p>
                    <h2 className='text-primary-lime text-4xl  font-display'>£{parseFloat(monthlyRepayment).toLocaleString()}</h2>
                    <hr className='my-6 text-Neutral-slate-300'></hr>
                    <p className='text-Neutral-slate-300 font-display pb-2 pt-[4px]'>Total you'll repay over the term</p>
                    <p className='pb-8 text-Neutral-white text-lg font-display pt-[4px]'>£{totalRepayment.toLocaleString()} </p>
                  </div>
                </div>
              </div>
            </div>
            :
            <div>
              <div className='flex justify-center items-center mt-[156px] mb-6 '>
                <img src='/images/illustration-empty.svg' className='h-full items-center'></img>
              </div>
              <div className='px-8 pb-52'>
                <h2 className='text-white text-2xl text-center font-display'>Results shown here</h2>
                <p className='text-Neutral-slate-500 text-center  pt-4 font-display'>Complete the form and click "calculate repayments" to see what your monthly repayments will be </p>
              </div>
            </div>


          }
        </div>
      </div>
    </div>
  )
}

export default App
