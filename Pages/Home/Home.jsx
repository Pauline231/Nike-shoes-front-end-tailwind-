import React from 'react'
import {CReview, Footer, Hero,Nav, Popular,Services, SpecOff, SQ, Subscribe} from './Sections/section.js'
const Home = () => {
  return (
  <main className='relative'>
    <Nav/>
    <section className='xl:padding-1 wide:padding-r 
    padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
     <Popular/>
    </section>
    <section className='padding-b'>
      <SQ/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecOff/>
    </section>
    <section className='bg-pale-blue padding'>
      <CReview/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section>
    <section className='bg-black padding-x
    padding-t pb-8'>
      <Footer/>
    </section>
  </main>
  )
}

export default Home