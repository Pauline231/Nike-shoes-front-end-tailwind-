import React from 'react'
import Button from './components/Button'
import {shoe8}  from '../../../src/assets/images'


const SQ = () => {
  return (
    <section id='about-us' className='flex justify-between
    items-center max-lg:flex-col gap-2 w-full max-container'>
    <div className='flex flex-1 flex-col xl:ml-20 '>
    <div className='relative xl:w-4/5 flex flex-col justify-center items-start
        w-full max-xl:padding-x pt-20 xl:ml-10 '>
        <h1 className='text-4xl  font-bold font-palanquin capitalize '>
        We provide you
        <span className='text-coral-red '> Super </span>
        <span className='text-coral-red '> Quality </span>Shoes</h1>
      <p className='mt-4  info-text'>
        Ensuring premium comfort and style, our meticulously crafted
        footwear is designed to elevate your experience, providing you with 
        unmatched quality, innovation, and a touch of elegance.
      </p>
      <p className='mt-6 info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
      <div className='mt-11'><Button label="View details" iconURL={''} /></div></div>
    </div>
      <div className='flex flex-1 justify-center items-center mt-20 xl:mr-10'>
        <img
        src={shoe8}
        alt='shoe8'
        height={570}
        width={570}
        className='object-contain'
        />
      </div>
    </section>
  )
}

export default SQ