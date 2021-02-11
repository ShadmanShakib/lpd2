import React from 'react'
import {ReactComponent as Facebook} from '../icons/facebook.svg'
import {ReactComponent as Twitter} from '../icons/Twitter.svg'
import {ReactComponent as Instagram} from '../icons/instagram.svg'
import {teamData} from '../data'

export default function Team() {
    return (
        <div className='flex flex-col justify-center xl:flex-row bg-gray-50 py-20 px-3'>
            <div className='xl:w-96 '>
            <h1 className='text-3xl text-center xl:pt-20 font-semibold mb-3'>Meat our expert <span className='text-green-500'>Team</span> </h1>
           <p className='text-gray-600 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
           </div>
       <div className='flex flex-col lg:flex-row items-center justify-center'>
           {teamData.map(x=>{
               return(
                   <div key={x.id} className="flex flex-col p-10  mt-8 shadow-lg justify-center items-center">
                       <img className='h-40 rounded-full' src={x.src} alt=""/>
                       <h1 className='font-bold text-lg mt-3'>{x.name}</h1>
                       <h3 className='text-gray-600 mt-1'>{x.job}</h3>
                       <div className='flex items-center justify-center'>
                       <Facebook className='h-16 w-12 rounded-full p-3'/>
                       <Twitter  className='h-16 w-12 rounded-full p-3'/>
                       <Instagram  className='h-16 w-12 p-3 rounded-full'/>
                       </div>
                   </div>
               )
           })}
       </div>
       </div>
    )
}
