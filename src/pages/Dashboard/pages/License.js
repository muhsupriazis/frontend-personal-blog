import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Search, SelectBox, Option, TableLicense, Row } from '../../../components'

const License = () => {
  return (
    <main className='p-10'>
      <section className='flex justify-between'>
        <h1 className='text-xl items-center'>My Certification</h1>
        <Button>Create Certification</Button>
      </section>
      <section className='flex gap-4 my-6'>
        <Search placeholder='Search'/>
        <SelectBox>
          <Option>Public</Option>
          <Option>Private</Option>
        </SelectBox>
        <SelectBox>
          <Option>Dicoding</Option>
          <Option>Ruang Guru</Option>
        </SelectBox>
        <Button>Filter</Button>
      </section>
      <section>
        <TableLicense>
          <Row>
            <td>Memahami Javascript Dasar</td>
            <td>
              <Link className='hover:text-blue-800' to='https://rifatnajmi.com/about/' >https://rifatnajmi.com/about/</Link>
            </td>
            <td>09/10/2022</td>
            <td>Dicoding</td>
          </Row>
        </TableLicense>
      </section>
      <section className='my-6'>
        <Button>Delete</Button>
      </section>
    </main>
  )
}

export default License