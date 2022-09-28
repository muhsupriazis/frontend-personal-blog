import React from 'react'

const Search = ({...rest}) => {
  return (
    <input  className='rounded-sm py-1 px-2 text-gray-700 text-sm border-[2px] border-solid border-gray-300' type='search' {...rest} />
  )
}

export default Search