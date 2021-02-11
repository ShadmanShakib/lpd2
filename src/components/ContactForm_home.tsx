import React from 'react'

function ContactForm() {
    return (
      
           <div className='px-3 py-20 bg-gray-100'>
            <div className='flex flex-col items-center '>
                 <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white font-semibold rounded-sm px-2 py-1'>CONTACT US</h1>
             <h1 className='text-3xl mt-5 mb-3'>Get In touch</h1> 
             <p className='text-center text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             </div> 

             <div className="xl:flex items-center xl:mt-10 justify-center">
             <div className='bg-white shadow-lg xl:w-1/3 mr-3 px-6 py-8 xl:py-10  flex flex-col rounded xl:mt-0 mt-10'>
                 <input className='py-2 px-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 rounded' type="text" placeholder='Your name...' name="name" id="name"/>
                 <input className='py-2 px-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 rounded' type="email" name="email" id="email" placeholder="Your email..."/>
                 <input className='py-2 px-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 rounded' placeholder='Subject...' type="text" name="subject" id="subject"/>
                 <textarea className='py-2 px-3 mb-b focus:outline-none focus:ring-2 ring-green-500 rounded' placeholder='Your message...' name="message" id="message" cols={1} rows={5}></textarea>
                 <button className='bg-green-500 text-white rounded text-center py-3 px-5'>SEND MESSAGE</button>
             </div>
             <div className='bg-white shadow-lg px-6 py-8 xl:py-6   ml-3 flex flex-col items-center xl:mt-0 xl:w-1/3  rounded mt-10'>
             <h1 style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}}
             className='text-white  font-semibold rounded-sm  px-2 py-1'>Contact Info</h1>
             <div className='flex flex-col'>
             <h1 className='text-3xl mt-5 mb-3 font-bold text-green-500'>We always ready to provide you with best services.</h1> 
             <h1 className='text-green-500 font-bold text-xl'>How can we help?</h1>
             <p className=' text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
             <h1 className='my-3 text-gray-600'>Email:support@info.com</h1>
             <h1 className='text-gray-600'>Phone: +038484848</h1>
             <h1 className='text-gray-600'>Office:Your Office</h1>
             <address className='text-gray-600'>2030,LA,USA</address>
             </div>
             </div>
             </div>
        </div>
    )
}

export default ContactForm
