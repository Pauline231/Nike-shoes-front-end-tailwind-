import React from 'react'
import { navLinks } from '../../../../src/constants'
import { hamburger } from '../../../../src/assets/icons'
import Ddown from './Ddown'
import { useState, useEffect,useRef} from 'react'

const Nav = () => {
  const [show, setShow] = useState(false)
  let ddref= useRef();
useEffect(()=>{
  let handler=(event)=>{
    if(!ddref.current.contains(event.target))
    {setShow(false)}
  }
  document.addEventListener("mousedown",handler);
  return()=>{
    document.removeEventListener("mousedown",handler)
  }
 })

 
  
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="\"><img src='../../../../src/assets/images/header-logo.svg' 
        alt='LOGO' width={130} height={29}/></a>
        <ul className='flex-1 flex justify-end items-center gap-16
        max-lg:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a href={item.href} className='font-monsterrat
              leading-normal text-lg text-slate-gray'>
                 {item.label}
              </a>
             </li>
          ))} 
        </ul>
        {show?<div ref={ddref} className='relative'>
         <div className='relative right-5'>
            <button className='rounded-l overflow-hidden block outline-white border-white hover:bg-gray-200 focus:border-gray-300' onClick={()=>setShow((show)=>!show)}>
          <img src={hamburger} alt="hamburger" data-dropdown-toggle="dropdown"
          width={25} height={25} className='hidden max-lg:block rounded-4 cursor-pointer hover:bg-gray-200'></img></button></div>
            {/*For the dropdown hamburger*/ }     
          <div  className='absolute right-0 mt-0'>
            {
              show?<Ddown/>:null
            }
          </div>
          </div>:null}
        
        </nav>
          </header>
  )
}

export default Nav