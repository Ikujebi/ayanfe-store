import React from 'react'
import '../index.css'


const Header = ({pageTitle}) => {
  return (
    
        <header className='h-[7rem] z-10 flex items-center justify-center bg-white bg'>
            <h1 className='text-3xl font-bold'>{pageTitle}</h1>
        </header>
    
  )
}

export default Header