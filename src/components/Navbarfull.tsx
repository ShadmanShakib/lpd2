import React from 'react';
import {Navbaritems} from '../data'

function Navbarfull() {
    return (
        <div>
            
           {Navbaritems.map((item:string,index:number)=>{
               return(
                  <a className='px-3 text-lg text-gray-800 hover:text-green-400 font-semibold active:outline-none ' key={index} href="http://localhost:3000">{item}</a>
               )
           })} 
        </div>
    )
}

export default Navbarfull
