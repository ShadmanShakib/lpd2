import React,{useContext} from 'react';
import {LayoutContext} from '../contexts/Layout'

function MenuIcon() {
    const {isOpen, isOpenFunc }:any=useContext(LayoutContext)
    return (
        <div className='focus:outline-none' onClick={isOpenFunc}>
           {isOpen?<div className=''>
          <div className='w-8 mb-1  h-1 bg-gray-700 line1 transform translate-y-1 rotate-45 '></div>
          <div className='w-8 h-1 bg-gray-700 line2 transform -translate-y-1 -rotate-45 '></div>
          </div>:
          <div>
          <div className={`w-8 h-1  bg-gray-700  `}></div>
          <div className='w-8 h-1 my-1 bg-gray-700 '></div>
          <div className='w-8 h-1 bg-gray-700  '></div>
          </div>
          } 
          
        </div>
    )
}

export default MenuIcon
