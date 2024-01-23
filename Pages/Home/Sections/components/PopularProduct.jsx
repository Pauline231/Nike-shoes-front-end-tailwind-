import React from 'react'
import { star } from '../../../../src/assets/icons'

const PopularProduct = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
       <img src={imgURL} alt={name} className='w-[280px] h-[280px] cursor-pointer' />
        <div className='mt-3 flex justify-start gap-2.5'>
            <img src={star} alt='rating' width={24} height={24} className=''/>
            <p className='leading-normal text-xl text-slate-gray font-montserrat'>4.5</p>
        </div>
        <h3 className='text-xl mt-2 leading-normal font-semibold font-palanquin cursor-pointer hover:underline'>{name}
</h3> <p className='text-coral-red  mt-2 font-semibold font-montserrat'>{price}</p>
    </div>
    
  )
}

export default PopularProduct   