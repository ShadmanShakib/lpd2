import React from 'react'


function Aboutcard({children,title,body}:any) {
    return (
        <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} 
        className='flex text-center px-4 py-6 sm:px-10   flex-col items-center'>
           <div className='h-12 w-12'>{children}</div> 
           <h1 className='text-2xl font-bold mb-3 mt-4  text-white'>{title}</h1>
           <p className='text-gray-200'>{body}</p> 
        </div>
    )
}

export default Aboutcard
