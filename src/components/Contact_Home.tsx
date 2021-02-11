import React from 'react';
import {ReactComponent as DialSVG} from '../icons/dial.svg'
import {ReactComponent as  AirplaySVG} from '../icons/airplay.svg'

function Contact() {
    return (
        <div className='pt-24 py-5 '>
            <div style={{backgroundImage:'url(images/bg_counter_cover.jpg)', backgroundSize:'cover'}} className='py-10 relative'>
              <div className='top-0 bg-gray-800 opacity-60 absolute  bottom-0 right-0 left-0'></div>
              <div className='flex flex-col z-10 relative items-center mx-5 sm:mx-10 md:mx-28 lg:mx-40 text-center'>
                <h1 className='text-3xl font-bold mb-6 text-white '>Become a part of Our bussiness community today.</h1>
                <p className='text-gray-200'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                 <button className='py-2 px-5 mt-5  text-white bg-green-500 font-semibold rounded-sm'>CONTACT US</button>
                 </div>
            </div>
            {/* Part 2 */}
            <div className="xl:flex flex-row items-center xl:py-32">
                {/* text */}
            <div className=' mt-8  mx-5 sm:mx-10 md:mx-20 '>
                <h1 className='text-3xl font-bold mb-6'> Awesome, Clean and Poweful Business Services </h1>
                <p>You're never imagine that powerfull and creative business could be made that easy, The Simpale Payment Solution It is a long established fact that a reader will be distracted.</p>
            </div>
                
                <div>
            <Card children={<DialSVG fill='white'/>} title="Business Planning" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
            <Card children={<AirplaySVG fill='white'/>} title="Market Analysis" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
            <Card children={<DialSVG fill='white'/>} title="Search Opourtunities" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
            </div>
            <div className="">
            <Card children={<AirplaySVG fill='white'/>} title="Responsive Design" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
            <Card children={<DialSVG fill='white'/>} title="Easy To Customize" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
            <Card children={<AirplaySVG fill='white'/>} title="Unlimited Color" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
           <div className='lg:hidden'>

            <Card children={<DialSVG fill='white'/>} title="Media Marketing" para='It is a long established fact that a reader will be distracted by the readable content of a page.'/>
           </div>
            </div>
            </div>
        </div>
    )
}


const Card=({children,title,para}:any)=>{
return(
    <div className='flex mx-4 mt-10 items-center'>
       <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} 
       className='w-20 h-20 p-6 xl:p-4 xl:w-16 xl:h-16 rounded-full'>{children}</div>
       <div className=' w-2/3 sm:w-3/4 md:w-auto lg:w-2/3 ml-6'>
       <h1 className='text-3xl xl:text-xl font-semibold text-gray-800 mb-2'>{title}</h1>
       <p className='text-gray-600 '>{para}</p>
       </div>
       
    </div>
)
}
export default Contact
