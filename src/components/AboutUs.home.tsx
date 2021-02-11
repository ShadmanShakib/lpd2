import React,{} from 'react';
import Aboutcard from './Aboutcard_home'
import {ReactComponent as LeafSVG} from '../icons/leaf.svg'
import {ReactComponent as AirplaySVG} from '../icons/airplay.svg'
import {ReactComponent as DialSVG} from '../icons/dial.svg'

function AboutUs() {
  
    return (
        <div className='flex flex-col items-center align-center pt-20 pb-24 md:mx-10'>
           <h3 className='abouth3 py-1 px-3 w-32 rounded-sm text-center text-white font-bold'>About-us</h3> 
           <h1 className='text-3xl mt-3 mb-4 text-gray-800 font-semibold'>What Can we Do</h1>
           <p className='text-sm text-center text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
           {/* Card */}
           <div className='mx-3 mt-16 flex flex-col lg:flex-row'>
               <div className='ml-4'>
               <Aboutcard  children={<LeafSVG fill='white'/>} title='Strategy Solution' body='A wonderful serenity has taken possession of like these sweet mornings of spring which enjoy with my whole heart.'/>
               </div>
               <div className='my-4 lg:my-0 ml-4'>
               <Aboutcard  children={<AirplaySVG fill='white'/>} title='Strategy Solution' body='A wonderful serenity has taken possession of like these sweet mornings of spring which enjoy with my whole heart.'/>
               </div>
               <div className="ml-4">
               <Aboutcard className='' children={<DialSVG fill='white'/>} title='Strategy Solution' body='A wonderful serenity has taken possession of like these sweet mornings of spring which enjoy with my whole heart.'/>
               </div>
           </div>

           <div className="flex flex-col lg:flex-row items-center justify-between">
           <div className='flex flex-col items-centen mx-5 sm:mx-10 mt-10 '>
            <h3 className='text-gray-600 my-2 font-semibold'>We Are A Creative Agency</h3>
         <h1 className='text-3xl mb-4 text-gray-800'>This is a best consultinng Company business and innovation marketing Idea.</h1>
        <p className='text-sm text-gray-600'>voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
      <button className='bg-green-500 text-white w-32 sm:w-40 md:w-44 px-5 py-2 mt-5  font-semibold rounded-sm'>Read More </button>
      </div>
      {/* Percentage */}
      <div className='mt-10 w-full px-10'>
          {/* Development */}
          <div className='mb-2 '>
             <div className='flex items-center justify-between mb-1'> <h3 className=''>Development</h3> <h1>80%</h1></div>
              <div className='relative rounded-md w-full h-2 bg-gray-200'>
              <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} className='absolute rounded-md top-0 left-0 bottom-0 right-10'></div>
              </div>
          </div>
          {/* Photoshop */}
          <div className='mb-2'>
             <div className='flex items-center justify-between mb-1'> <h3 className=''>Photoshop</h3> <h1>88%</h1></div>
              <div className='relative rounded-md h-2 bg-gray-200'>
              <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} className='absolute rounded-md top-0 left-0 bottom-0 right-6'></div>
              </div>
          </div>
          {/* Designing */}
          <div className='mb-2'>
             <div className='flex items-center justify-between mb-1'> <h3 className=''>Designing</h3> <h1>98%</h1></div>
              <div className='relative rounded-md  h-2 bg-gray-200'>
              <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} className='absolute rounded-md top-0 left-0 bottom-0 right-1'></div>
              </div>
          </div>
          {/* Webdevelopment */}
          <div className='mb-2'>
             <div className='flex items-center justify-between mb-1'> <h3 className=''>WebDevelopment</h3> <h1>76%</h1></div>
              <div className='relative rounded-md  h-2 bg-gray-200'>
              <div style={{backgroundImage:'linear-gradient(to top right, #26d0ca, #25e375)'}} className='absolute rounded-md top-0 left-0 bottom-0 right-12'></div>
              </div>
          </div>
          </div>
      </div>
        </div>
    )
}

export default AboutUs
