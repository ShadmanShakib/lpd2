import React, {} from 'react'

import Navbar from './Navbar';
import MenuIcon from './MenuIcon'
import Navbarfull from './Navbarfull';


function Header({scroll}:any) { 
    return (
        <div  className={`${scroll?'fixed ':'absolute '} bg-white shadow-md  z-50 w-full lg:py-2`}>
            <div className='flex justify-around items-center h-14'>
            {/* Logo */}
            <div className='text-green-500
              font-bold'>Logo</div>
            {/* MenuIcon */}
            <div className='lg:hidden'>
            <MenuIcon/>
            </div>
            {/* Full menu */}
            <div className='hidden list-none  lg:inline-block'>
               <Navbarfull/>
           </div>
            </div>
            {/* Mobile navbar */}
            <div className='lg:hidden'>
            <Navbar/> 
            </div>
           
        </div>
    )
}

export default Header
