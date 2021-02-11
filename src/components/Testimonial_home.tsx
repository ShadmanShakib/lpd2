import React,{useState,useEffect} from 'react';
import {testiData} from '../data'

function Testimonial() {
    const [num,setNum]=useState(0)

    useEffect(()=>{
        const slide=()=>{
            if(num===0){
                setNum(1)
            }else if(num===1){
                setNum(2)
            }else if(num===2){
                setNum(0)
            }
        }
        setTimeout(slide,2000)
        
    })

    return (
        <div className='px-3 xl:py-20'>
            <div className='flex flex-col items-center '>
                 <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white font-semibold rounded-sm px-2 py-1'>Testimonial</h1>
             <h1 className='text-3xl mt-5 mb-3'>Meet Our Happy Client</h1> 
             <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div>
             <div className="xl:flex items-center justify-center">
             <img src='images/testi-man.png' alt="testiman"/>
             <div className='ml-10'>
              <h1 className='font-bold mb-1'>{ testiData[num].name}</h1> 
              <h3 className='xl:mb-3'>{testiData[num].jobTitle}</h3> 
              <p className='bg-gary-600'>{testiData[num].body}</p>
              <div className='flex justify-center xl:mt-5 items-center'>
                  <div onClick={()=>setNum(0)} className={`w-4 h-2 ${num===0?'bg-green-500':'bg-gray-400'}  rounded`}></div>
                  <div  onClick={()=>setNum(1)} className={`w-4 h-2 mx-3  ${num===1?'bg-green-500':'bg-gray-400'}  rounded`}></div>
                  <div  onClick={()=>setNum(2)} className={`w-4 h-2   ${num===2?'bg-green-500':'bg-gray-400'}  rounded`}></div>
              </div>
              </div>
             </div>
        </div>
    )
}

export default Testimonial
