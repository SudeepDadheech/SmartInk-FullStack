import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-sky-50'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-cyan-300/30 text-slate-600'>

        <div>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
          <p className='max-w-[410px] mt-6 text-sm leading-relaxed'>
            Your space to think, share, and write freely. Start your journey of expression with QuickBlog — where every voice matters.
          </p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-6'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-cyan-700 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:text-cyan-600 hover:underline transition-colors duration-200'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      <p className='py-4 text-center text-sm md:text-base text-slate-500'>© 2025 SmartInk by SudeepDadheech — All rights reserved.</p>
    </div>
  )
}

export default Footer
