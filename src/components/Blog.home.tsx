import React from 'react'

function Blog() {
    return (
            <div className='px-3 py-20'>
            <div className='flex flex-col items-center '>
                 <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white font-semibold rounded-sm px-2 py-1'>OUR BLOG</h1>
             <h1 className='text-3xl mt-5 mb-3'>Recent Blog Posts</h1> 
             <p className='text-center text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div>
             <div className="flex flex-col xl:flex-row justify-center">
             <img className='xl:w-96 h-96 ' src="images/blog-1.jpg" alt=""/>
             <img className='xl:w-96 h-96 xl:mx-10' src="images/blog-2.jpg" alt=""/>
             <img className='xl:w-96 h-96' src="images/blog-3.jpg" alt=""/>
             </div>

        </div>
    )
}

export default Blog
