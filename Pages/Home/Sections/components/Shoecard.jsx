import React from 'react'

const Shoecard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    const handleClick = ()=>{
        if(bigShoeImg != imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImg ===  imgURL.bigShoe?
        'border-coral-red'
        :'border-transparent'
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
        <div className='flex justify-center items-center h-32
        sm:w-40 sm-h:40 rounded-xl bg-card bg-cover bg-center max-sm:p-4'>
            <img src={imgURL.thumbnail}
            alt='shoe collection'
            width={127}
            height={100}
            className='object-contain'
            />
        </div>
    </div>
  )
}

export default Shoecard