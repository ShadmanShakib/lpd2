import React from 'react'
import {ReactComponent as FacebookLogo} from '../icons/facebook.svg'
import {ReactComponent as InastagramLogo} from '../icons/instagram.svg'
import {ReactComponent as LinkedinLogo} from '../icons/linkedin.svg'

import {ReactComponent as TwitterLogo} from '../icons/Twitter.svg'
import {ReactComponent as YouTubeLogo} from '../icons/youtube.svg'

function Footer() {
    return (
        <div className='bg-gray-400'>
            <h1 className='text-green-700 font-bold text-center py-3'>Shadman Shakib</h1>
            <div className='flex item-center justify-center pb-5'>
                <FacebookLogo className='h-6     w-6     fill-current items-center text-blue-600'/>
                <InastagramLogo className='h-6   w-6   fill-current mx-4 text-pink-500'/>
                <LinkedinLogo className='h-6     w-6     fill-current text-blue-700'/>
                <TwitterLogo className='h-6  w-6  fill-current mx-4 text-blue-500'/>
                <YouTubeLogo className='h-6  w-6 '  />
            </div>
        </div>
    )
}

export default Footer
