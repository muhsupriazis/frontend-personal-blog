import React from 'react'

const RowArticle = ({children}) => {
  return (
    <tr className='hover:bg-blue-100' >
        <td><input type='checkbox' /></td>
        {children}
    </tr>
  )
}

export default RowArticle