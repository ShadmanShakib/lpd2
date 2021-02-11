import React from 'react'

function Protfolio() {
    const images=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"]
  
    return (
        <div>
            <div className='flex flex-col items-center py-20'>
             <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white font-semibold rounded-sm px-2 py-1'>PORTFOLIO</h1>
             <h1 className='text-3xl mt-5 mb-3'>Our Recent Projects</h1> 
             <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
 
             </div>
             <div className="flex justify-center">
             <div className="grid mx-3 gap-3 overflow-x-auto content-center justify-items-center xl:grid-cols-3">
               {
                   images.map((i,index:any)=>{
                       return(
                           <div className="relative profolioImg ">
                           <div className="hidden abso absolute z-10 top-0 right-0 left-0 bottom-0 bg-gray-800 opacity-60">

                          
                           </div>
                           <img className='xl:h-72  xl:w-80' key={index} src={i} alt={i}/>
                           <h4 className=' absolute category hidden xl:inset-y-24 inset-y-20 right-36 xl:right-32 z-20 text-gray-200'>Category</h4>
                           <h1 className='bg-white title cursor-pointer  hidden absolute z-20  xl:inset-y-32 inset-y-28 inset-x-24 py-2 xl:p-1 h-auto w-auto xl:inset-x-24  rounded text-center  font-semibold text-green-500'>Project Title</h1>  
                              
                          
                           </div>
                       )
                   })
               }
             </div>
             </div>
        </div>
    )
}

export default Protfolio
