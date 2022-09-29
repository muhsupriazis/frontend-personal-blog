import React from 'react'

const TableExperience = ({children}) => {
  return (
    <table className='text-sm w-full '>
        <thead className='w-full'>
            <tr className='font-[500] text-gray-800 text-left pb-4 border-b-gray-300 border-b-2 border-b-solid'>
                <th className='w-[3%]'></th>
                <th className='w-[25%]'>Position</th>
                <th>Description</th>
                <th className='w-[13%]'>Updated</th>
                <th className='w-[15%]'>Company Name</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}

export default TableExperience