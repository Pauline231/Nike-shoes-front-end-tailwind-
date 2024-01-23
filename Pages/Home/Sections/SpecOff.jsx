import React from 'react'
import { offer } from '../../../src/assets/images'
import Button from './components/Button'

const SpecOff = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} height={687} width={773}
        className='object-contain w-full'/>
      </div>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start
        w-full max-xl:padding-x mb-10'>
        <h1 className='text-4xl  font-bold font-palanquin capitalize '>
        <span className='text-coral-red '> Special </span>
        Offer</h1>
      <p className='mt-4  info-text'>
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we 
        offer unparrallaled value that sets is apart.
      </p>
      <p className='mt-6 info-text'>Navigate a realm of possibilities designed to fulfill your
      unique desires, surpassing the loftiest expectations. Your journey with us
      is nothing short of exceptional.</p>
   
      <div className='mt-11 flex  min-xs:flex-row gap-5'><Button label="View details" iconURL={''} />
      <button className='bg-white font-montserrat  rounded-full border-solid border-2 px-7 py-2 border-slate-300 text-slate-gray hover:bg-slate-gray hover:text-white'>Learn more</button></div>
      
      </div>
    </section>
  )
}

export default SpecOff