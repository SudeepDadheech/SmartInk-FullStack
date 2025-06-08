import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold text-slate-800'>Stay in the Loop</h1>
      <p className='md:text-lg text-slate-500 pb-8'>
        Join our newsletter for weekly insights, tech drops, and fresh blog picks.
      </p>
      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input
          className='border border-slate-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-slate-600 bg-white'
          type="email"
          placeholder='Your email address'
          required
        />
        <button
          type='submit'
          className='md:px-12 px-8 h-full text-white bg-cyan-600 hover:bg-cyan-700 transition-all cursor-pointer rounded-md rounded-l-none'
        >
          Join Now
        </button>
      </form>
    </div>
  )
}

export default Newsletter
