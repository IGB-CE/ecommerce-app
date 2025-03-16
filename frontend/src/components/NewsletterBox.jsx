import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>
            Subscribe now & get 20% off
        </p>
        <p className='text-gray-400 mt-3'>
        Stay ahead of the trends! Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and special offers. Plus, enjoy insider styling tips and early access to our latest collections. Sign up today and make sure you never miss out on the best in fashion!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox