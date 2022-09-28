import React from 'react'

const RowArticle = ({children}) => {
  return (
    <tr className='hover:bg-blue-100' >
        {children}
    </tr>
  )
}

export default RowArticle