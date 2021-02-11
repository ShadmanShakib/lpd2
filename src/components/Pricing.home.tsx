import React from 'react';
import { Packages } from '../data'

function Pricing() {
    return (
        <div className='px-3 py-20'>
            <div className='flex flex-col items-center '>
                 <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white font-semibold rounded-sm px-2 py-1'>Pricing</h1>
             <h1 className='text-3xl mt-5 mb-3'>Suitable pricing plan</h1> 
             <p className='text-center text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div>
             <div className="mt-6"></div>
             <div className=" flex flex-col lg:flex-row items-center justify-center">
            {Packages.map((item:any)=>{
                return(
                    <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} key={item.id}
                    className='flex mb-8 lg:ml-10 rounded px-3  flex-col py-12 text-white justify-center items-center'
                    >
                        <h1 className='font-bold text-3xl mb-3'>{item.name}</h1>
                        <h3 className='text-gary-200 mb-3 '>{item.description}</h3>
                        <div className='rounded-full mt-4     h-24 w-24 flex flex-col items-center justify-center  bg-white text-green-500'>
                           <h1 className='text-3xl font-bold'>${item.price}</h1>
                          
                        </div>
                        <h5 className='mt-3'>Per Year</h5>
                        <div className=' h-0.5 w-4/6 my-4 bg-gray-400'></div>
                        <h1 className='pb-3 text-lg'>Aditional Features</h1>
                        <h1 className='pb-3 text-lg'>Free Email Support</h1>
                        <h1 className='pb-3 text-lg'>10 Domain</h1>
                        <h1 className='texl-lg'>24/7 Support</h1>
                        <div className='text-green-500 hover:bg-gray-100 mt-10 font-semibold rounded-sm shadow-md bg-white px-8 py-4'>GET THIS PLAN</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Pricing
