import React from 'react'

const InputUrl = ({...rest}) => {
  return (
    <input className='p-1 border-gray-100 rounded-sm col-span-2 text-sm text-gray-600 border-solid border-2' type='url' {...rest} placeholder='http:/example.com' />
  )
}

export default InputUrl