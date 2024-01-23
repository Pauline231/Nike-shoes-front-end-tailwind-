import React from 'react'
import Button from './components/Button'

const Subscribe = () => {
  return (
    <section className=' max-container flex justify-between items-center max-lg:flex-col gap-5' id='contact-us'>
      
        <h3 className='text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md'>Sign Up for
          <span className='text-coral-red'> Updates </span>
          & Newsletter
        </h3>

        <div className='lg:max-w-[60%] w-full flex items-center flex-row gap-10 p-1 border
         border-slate-gray  rounded-full'>
          <input type='text'
           placeholder='subscribe@nike.com'
           className='input border-none rounded-full'/>
           <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label="Sign Up"/>
           </div>  
        </div>
        
      
    </section>
  )
}

export default Subscribe