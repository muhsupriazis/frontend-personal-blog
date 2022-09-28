import React from 'react'

const TableArticles = ({children}) => {
  return (
    <table className='text-sm '>
        <thead>
            <tr className='font-[500] text-gray-800 text-left pb-4 border-b-gray-300 border-b-2 border-b-solid'>
                <th className='w-[25%]'>Title</th>
                <th>Summary</th>
                <th className='w-[13%]'>Updated</th>
                <th className='w-[15%]'>Author</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}

export default TableArticles