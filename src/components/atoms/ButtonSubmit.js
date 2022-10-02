import React from 'react'

const ButtonSubmit = ({children}) => {
  return (
    <button className='bg-blue-600 group inline-block text-white py-[.5em] px-[.8em] font-[300] rounded-sm hover:bg-blue-800 text-sm' >{children}</button>
  )
}

export default ButtonSubmit