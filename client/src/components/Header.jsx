import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const { setInput, input } = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>

        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-cyan-500 bg-cyan-100 rounded-full text-sm text-cyan-700'>
          <p>Try our new Ai feature</p>
          <img src={assets.star_icon} className='w-2.5' alt="" />
        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-slate-800'>
          Experience <span className='text-cyan-600'> personalised</span> <br /> blogging.
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-slate-500'>
          This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.
        </p>

        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-slate-300 bg-sky-50 rounded overflow-hidden'>
          <input ref={inputRef} type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none bg-transparent text-slate-700' />
          <button type="submit" className='bg-cyan-600 text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>
            Search
          </button>
        </form>

      </div>

      <div className='text-center'>
        {
          input && <button onClick={onClear} className='border border-slate-300 text-slate-500 font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>
        }
      </div>

      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header
