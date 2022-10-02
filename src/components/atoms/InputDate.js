import React from 'react'

const InputDate = ({...rest}) => {
  return (
    <input className='text-gray-700 border-gray-300 col-span-2 border-[1px] border-solid shadow-none rounded-sm p-1  text-sm' type='date' {...rest}/>
  )
}

export default InputDate