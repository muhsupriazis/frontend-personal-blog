import React from 'react'

const Option = ({children, ...rest}) => {
  return (
    <option className='bg-blue-300' {...rest}>{children}</option>
  )
}

export default Option