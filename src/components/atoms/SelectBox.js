import React from 'react'

const SelectBox = ({children, ...rest}) => {
  return (
    <select className='text-sm px-2 bg-white py-2 hover:bg-gray-200' {...rest}>
        {children}
    </select>
  )
}

export default SelectBox