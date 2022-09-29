import React from 'react'
import { Button, Option, Row, Search, SelectBox, TableArticles } from '../../../components'

const Article = () => {
  return (
    <main className='p-10'>
      <section className='flex justify-between'>
        <h1 className='text-xl items-center'>My Articles</h1>
        <Button>Create Articles</Button>
      </section>
      <section className='flex gap-4 my-6'>
        <Search placeholder='Search'/>
        <SelectBox>
          <Option>Recent</Option>
        </SelectBox>
        <SelectBox>
          <Option>Category</Option>
        </SelectBox>
        <SelectBox>
          <Option>Public</Option>
          <Option>Private</Option>
        </SelectBox>
        <Button>Filter</Button>
      </section>
      <section>
        <TableArticles>
          <Row>
            <td>Hello World</td>
            <td>Hello wordl adaalah kalimat ajib bahi pada programmer yang mau belajar secara autodidal. oleh akretna itu wajb sekali pelajar itu</td>
            <td>09/12/2002</td>
            <td>Muhammad Supri</td>
          </Row>
        </TableArticles>
      </section>
      <section className='my-6'>
        <Button>Delete</Button>
      </section>
    </main>
  )
}

export default Article