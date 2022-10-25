import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Blog, Certificate, Portfolio } from './pages'

const Create = () => {
  return (
    <Fragment>
        <Routes>
            <Route path='blog' element={<Blog/>}/>
            <Route path='certificate' element={<Certificate/>} />
            <Route path='portfolio' element={<Portfolio/>} />
        </Routes>
    </Fragment>
  )
}

export default Create