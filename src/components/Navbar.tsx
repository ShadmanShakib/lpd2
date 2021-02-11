import React, {useContext} from 'react'
import {LayoutContext} from '../contexts/Layout'
import {motion} from 'framer-motion'

function Navbar() {
    const Item=['Home',"About me",'Services','Protfolio','Team',"Blog","Contract"]
    const {isOpen}:any=useContext(LayoutContext)
    const varients={
        open:{height:'210px', },
        closed:{height:0, opacity:0}
    }
    const listVarient={
        Yes:{transform:'scale(1)'},
        No:{transform:'scale(0)'}
    }
    return (
       <div> 
        
        <motion.nav
        animate={isOpen?'open':'closed'}
        variants={varients}
         className={`h-auto  bg-white text-green-600 `}>
            <ul>
                {Item.map((x,index:any)=>{
                    return(
                        <motion.li 
                        animate={isOpen?'Yes':'No'}
                        variants={listVarient}
                        key={index}
                        className='pl-3 text-lg'
                        >{x}</motion.li>
                    )
                })}
            </ul>
          
        </motion.nav> 
        </div>
    )
}

export default Navbar
