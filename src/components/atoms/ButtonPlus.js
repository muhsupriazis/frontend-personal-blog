import React from 'react'
import { Link } from 'react-router-dom'

const ButtonPlus = () => {
  return (
    <Link className='bg-blue-100 w-[20px] h-[20px]  flex justify-center items-center shadow-lg hover:shadow-2xl hover:bg-blue-300 rounded-full' ><span>+</span></Link>
  )
}

export default ButtonPlus