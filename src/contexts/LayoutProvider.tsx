import React,{useState} from 'react'
import { LayoutContext } from './Layout'

function LayoutProvider({children}:any) {
    const [isOpen, setIsOpen]=useState(false)
    const isOpenFunc=()=>{
        setIsOpen(!isOpen)
    }
 
    return (
        <div>
            <LayoutContext.Provider value={{isOpen, isOpenFunc}}>
                {children}
            </LayoutContext.Provider>
        </div>
    )
}

export default LayoutProvider
