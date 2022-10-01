import React, { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Article, Experience, License, Portfolio, Main } from './pages'
import { Header } from '../../components'

const Dashboard = () => {
  return (
    <Fragment>
      <Header/>
        <Routes>
          <Route path='article' element={<Article/>}/>
          <Route path='experience' element={<Experience/>}/>
          <Route path='license' element={<License/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='' element={<Main/>} />
        </Routes>
    </Fragment>
  )
}

export default Dashboard