
import React, {useState} from 'react'
import {workFlowData} from '../data'

function WorkFlow() {
    const a=workFlowData;
    const [num, setNum]=useState(0)

    return (
        <div className='bg-gray-100 pt-20 '>
            <div className='flex flex-col items-center'>
            <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white font-semibold rounded-sm px-2 py-1'>WORK FLOW</h1>
             <h1 className='text-3xl mt-5 mb-3'>How it works?</h1>
             <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div>
          
            <div className='flex relative py-4 bg-white rounded px-5 mt-6 mb-4 mx-3 item-center justify-around'> 
             <div onClick={()=>setNum(0)} 
              className={`${num===0?' bg-green-500 text-white ':'text-green-500     '} hover:bg-green-500 cursor-pointer relative z-10 none transiton-all ease duration-100 font-semibold  px-2 py-1 rounded hover:text-white  `}> Home </div> 
           <div onClick={()=>setNum(1)} 
              className={`${num===1?' bg-green-500 text-white ':'text-green-500     '} hover:bg-green-500 cursor-pointer relative z-10 none transiton-all ease duration-100 font-semibold  px-2 py-1 rounded hover:text-white  `}> Profile </div> 
           <div onClick={()=>setNum(2)} 
              className={`${num===2?' bg-green-500 text-white ':'text-green-500     '} hover:bg-green-500 cursor-pointer relative z-10 none transiton-all ease duration-100 font-semibold  px-2 py-1 rounded hover:text-white  `}> Contact </div> 
           <div onClick={()=>setNum(3)} 
              className={`${num===3?' bg-green-500 text-white ':'text-green-500     '} hover:bg-green-500 cursor-pointer relative z-10 none transiton-all ease duration-100 font-semibold  px-2 py-1 rounded hover:text-white  `}> About </div> 
           
            </div>
           
             <div className='mx-3 mt-3 xl:flex items-center justify-center'>
                <div className="xl:w-1/3">
               <h1 className='text-2xl font-bold mb-3'>{a[num].title}</h1>  
               <p className=' text-gray-500'>{a[num].body}</p>
               </div>
               <img className='xl:ml-10' src={a[num].src} alt=""/>
             </div>
        </div>
    )
}


//work flow card
export default WorkFlow
