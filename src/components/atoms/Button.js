import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({children, ...rest}) => {
  return (
    <Link className='bg-blue-600 group relative text-white py-[.5em] px-[.8em] font-[300] rounded-sm hover:bg-blue-800 text-sm' {...rest} >{children}</Link>
  )
}

export default Button