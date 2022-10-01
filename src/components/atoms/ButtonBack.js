import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBack = ({to}) => {
  return (
    <Link to={to} className='underline text-blue-800'>Go Back</Link>
  )
}

export default ButtonBack