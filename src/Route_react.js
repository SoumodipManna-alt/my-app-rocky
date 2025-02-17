import React from 'react'
import './Route_csspage.css';

import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import F404_page from './components/F404'
import User_page from './components/User_page'
import User_details from './components/User_details'
import Course from './components/Course';
import Course1 from './components/Course1';
import Course2 from './components/Course2';

const Route_react = () => {
  return (
    <div id="root">
        <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/User' element={<User_details/>}/>
            <Route path='/User/:name' element={<User_page/>}/>
            <Route path='/Course/' element={<Course/>}>
              <Route path='course1' element={<Course1/>}/>
              <Route path='course2' element={<Course2/>}/>
            </Route>
           
            <Route path='/*'  element={<F404_page/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Route_react