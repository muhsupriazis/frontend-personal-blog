import React, { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Blog,  Certificate, Portfolio, Main } from './pages'
import { Header } from '../../components'

const Dashboard = () => {
  return (
    <Fragment>
      <Header/>
        <Routes>
          <Route path='blog' element={<Blog/>}/>
          <Route path='certificate' element={<Certificate/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='' element={<Main/>} />
        </Routes>
    </Fragment>
  )
}

export default Dashboard