import React from 'react'
import Button from './components/Button'
import { arrowRight } from '../../../src/assets/icons'
import { statistics,shoes } from '../../../src/constants'
import { bigShoe1, bigShoe2,bigShoe3 } from '../../../src/assets/images'
import Shoecard from './components/Shoecard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <>
    <section id='home' className='w-screen flex xl:flex-row flex-col justify-center max-container gap-10 p-2 min-h-screen'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start
        w-full max-xl:padding-x pt-20 '>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82px] relative z-20 font-palanquin mt-20 xl:mt-10'>
          <span className= 'xl:bg-white xl:whitespace-nowrap  z-10 mb-20  pr-10 relative'>The New Arrival</span>
        <br/>
        <span className='text-coral-red inline-block mt-4'>Nike</span>
         Shoes</h1>
      <p className='font-montserrat text-slate-gray text-l mt-4 mb-10 sm:max-w-screen-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
      <Button label="Shop now!" iconURL={arrowRight} />
      <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((stat)=>(
          <div>
            <p className='text-4xl font font-palanquin font-bold'>{stat.value}</p>
            <p className='font-montserrat leading-7 text-slate-gray '>{stat.label}</p>
            </div>
        ))
          }
      </div>
      </div>
      <div className='relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-primary bg-cover bg-center'>
      <img src={bigShoeImg} alt='bigshoeimg' className='relative z-10' height={500} width={610}/>
          <div className='flex flex-row  sm:gap-6 gap-4 absolute -bottom-[5%] sleft-[10%] max-sm:px-6'>
           {shoes.map((shoe)=>(
            <div key={shoe.thumbnail}>
              <Shoecard
                imgURL={shoe}
                changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
              />
              </div>
           ))}
          </div>

      </div> 
      </section> 
    
    </>
  )
}

export default Hero