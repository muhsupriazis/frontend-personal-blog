import React from 'react'
import { Button, Option, Row, Search, SelectBox, TableExperience } from '../../../components'

const Experience = () => {
  return (
    <main className='p-10'>
      <section className='flex justify-between'>
        <h1 className='text-xl items-center'>My Experience</h1>
        <Button>Create Experience</Button>
      </section>
      <section className='flex gap-4 my-6'>
        <Search placeholder='Search'/>
        <SelectBox>
          <Option>Public</Option>
          <Option>Private</Option>
        </SelectBox>
        <Button>Filter</Button>
      </section>
      <section>
        <TableExperience>
          <Row>
            <td>Programmer</td>
            <td>
              <ul>
                <li>Mmebuat programer</li>
                <li>Mmebuat Minuman dingin</li>
                <li>Memperbaiki layanan desa</li>
              </ul>
            </td>
            <td>09/12/2002</td>
            <td>Muhammad Supri</td>
          </Row>
        </TableExperience>
      </section>
      <section className='my-6'>
        <Button>Delete</Button>
      </section>
    </main>
  )
}

export default Experience