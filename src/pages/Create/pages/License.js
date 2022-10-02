import React, {Fragment} from 'react'
import { Anchor, Button, ButtonBack, InputDate, InputText, InputUrl, Label } from '../../../components'

const License = () => {
  return (
    <Fragment>
        <header className='py-6 px-10'>
          <ButtonBack to='/dashboard/license'/>
        </header>
        <main>
          <section className='p-4 m-auto drop-shadow-sm rounded-md  max-w-[600px] border-gray-300 border-solid border-[1px] '>
            <h1 className='text-gray-700 p-2 text-[1.5em] text-center border-b-gray-300 border-b-[1px] border-b-solid ' >Create a new license</h1>
            <form className='p-4 grid grid-cols-3 gap-2 text-sm'>
              <Label>Company Name</Label>
              <InputText placeholder='Dicoding' />
              <Label>Certification Name</Label>
              <InputText placeholder='Fullstuck Developer' />
              <Label>Receipt date</Label>
              <InputDate/>
              <Label>Theory</Label>
              <InputText placeholder='Make Backend Apps' />
              <Label>Url</Label>
              <InputUrl/>
              <div className='col-start-2 pt-4 col-span-2 flex justify-end gap-2  items-center' >
                <Button>Create License</Button>
                <Anchor>Cancel</Anchor>
              </div>
            </form>
          </section>
        </main>
    </Fragment>
  )
}

export default License