import React from 'react'

const CardPortfolio = ({children}) => {
  return (
    <div className='w-[20%] shadow-lg hover:shadow-xl rounded-lg overflow-hidden '>
        {children}
    </div>
  )
}

export default CardPortfolio