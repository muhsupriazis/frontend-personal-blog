import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = ({children, ...rest}) => {
  return (
    <Link className='text-sm text-blue-700 hover:underline' {...rest}  >{children}</Link>
  )
}

export default Anchor