import React, { Fragment } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Article, Experience, License, Portfolio } from './pages'
import { Header } from '../../components'

import './Dashboard.css'

const Dashboard = () => {
  return (
    <Fragment>
      <Header/>
      <main>
          <Routes>
              <Route path='article' element={<Article/>}/>
              <Route path='experience' element={<Experience/>}/>
              <Route path='license' element={<License/>}/>
              <Route path='portfolio' element={<Portfolio/>}/>
          </Routes>
      </main>
    </Fragment>
  )
}

export default Dashboard