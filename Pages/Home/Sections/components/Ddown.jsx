import React from 'react'
import { hamburger } from '../../../../src/assets/icons'
import { navLinks } from '../../../../src/constants'



const Ddown = () => {

  return (
    <>
     <div>
       
        <div id='dropdown' className={"z-10 mt-2 px-2 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hover:cursor-pointer" }>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        {navLinks.map((item)=>(
            <li key={item.label}>
              <a href={item.href} className='font-monsterrat
              leading-normal text-lg text-gray-400 hover:text-white'>
                 {item.label}
              </a>  
             </li>
          ))}
        </ul>
        </div>
        </div>
        
    
    </>
  )
}

export default Ddown