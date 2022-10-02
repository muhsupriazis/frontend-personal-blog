import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBack = ({to, children, ...rest}) => {
  return (
    <Link to={to} {...rest} className=' inline-block p-2 bg-gray-200 hover:bg-blue-100 underline overflow-hidden rounded text-lg text-gray-800  hover:text-blue-700'>
      <svg className='text-[20px]'  width='24' height='24' viewBox='0 0 24 24' role='presentation'>
          <path fill="#000" fillOpacity=".01" d="M0 0h24v24H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.207 5.793a1 1 0 010 1.414L8.414 11H18a1 1 0 110 2H8.414l3.793 3.793a1 1 0 11-1.415 1.414l-5.499-5.5A.997.997 0 015 12.028v-.057a.996.996 0 01.293-.678l5.499-5.5a1 1 0 011.415 0z" fill="currentColor"></path>
      </svg>
    </Link>
  )
}

export default ButtonBack