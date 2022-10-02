import React, {Fragment} from 'react'
import { Anchor, Button, ButtonBack, InputDate, InputText, Label } from '../../../components'

const Experience = () => {
  return (
    <Fragment>
        <header className='py-6 px-10'>
          <ButtonBack to='/dashboard/experience'/>
        </header>
        <main>
          <section className='p-4 m-auto drop-shadow-sm rounded-md  max-w-[600px] border-gray-300 border-solid border-[1px] '>
            <h1 className='text-gray-700 p-2 text-[1.5em] text-center border-b-gray-300 border-b-[1px] border-b-solid ' >Create a new experience</h1>
            <form className='p-4 grid grid-cols-3 gap-2 text-sm'>
              <Label>Company Name</Label>
              <InputText placeholder='Tokopedia' />
              <Label>Position</Label>
              <InputText placeholder='Fullstuck Developer' />
              <Label>Start Date</Label>
              <InputDate/>
              <Label>Stop Date</Label>
              <InputDate/>
              <Label>Responsibility</Label>
              <InputText placeholder='Menage Website, Etc' />
              <div className='col-start-2 col-span-2 pt-4 flex justify-end gap-2  items-center' >
                <Button>Create Experience</Button>
                <Anchor>Cancel</Anchor>
              </div>
            </form>
          </section>
        </main>
    </Fragment>
  )
}

export default Experience