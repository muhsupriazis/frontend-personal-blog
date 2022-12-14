import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Create, Dashboard, Login, MainApp } from '../../pages'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/dashboard/*' element={<Dashboard/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/create/*' element={<Create/>}/>
            <Route path='/*' element={<MainApp/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers