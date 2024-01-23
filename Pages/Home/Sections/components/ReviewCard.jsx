import React from 'react'
import { star } from '../../../../src/assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
        />
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
        <div className='mt-2 flex flex-row items-center justify-center gap-2 text-lg'>
            <img src={star} height={24} width={24} className='object-contain '/>
            <p className=' font-montserrat text-xl text-slate-gray '>({rating})</p>
        </div>
        <h3 className='font-montserrat font-bold text-center  text-3xl mt-2'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard