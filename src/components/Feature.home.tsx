import React from 'react'
import {ReactComponent as YouTubeLogo} from '../icons/youtube.svg'

function Feature() {
    return (
        <div className='min-h-screen'  style={{backgroundImage:'url(images/bg_counter_cover.jpg)', position:'relative'}} >
            <div className="absolute opacity-70 bg-gray-800 top-0 left-0 right-0 bottom-0"/>
            <div
             className=' relative z-10 pt-48 flex flex-col items-center text-center mx-2 pb-32'>
            <YouTubeLogo className='h-12 w-12 sm:h-14 sm:w-14 fill-current  mb-1' />
            <div className='flex flex-col items-center w-3/4'>
              <h3 className='text-xl w-40 leading-9  text-white font-semiblod  mb-4'><i>WATCH VEDIO</i></h3>
               <h1 className="text-white font-semibold text-3xl  mb-2 sm:text-5xl"> Make your business more with us</h1>
            <p className='text-gray-300 text-sm sm:text-lg '>It is long established fact that a reader will be distracted by readable content layout readable English.</p>
            </div>
            <button
            className='bg-green-500 mt-8 sm:font-bold focus:outline-none hover:bg-green-70  0 text-white rounded py-2 px-8 sm:px-12 sm:py-4'
            >Learn more</button>
            </div>
        </div>
    )
}

export default Feature
