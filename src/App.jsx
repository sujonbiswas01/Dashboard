import React, { useState } from 'react'
import './App'
import Sidebar from './pages/Sidebar/Index'
import { Route, Routes } from 'react-router';
import MainBord from './pages/Dashboard/MainBord';
import Dashboard from './pages/Dashboard/Index';
import Order from './pages/Order/Index';
import Product from './pages/Product/Index';
import Seles from './pages/SalesReport/Index';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Index';
const App = () => {
  const [isOpen,setisOpen]=useState(false);
  const toggleSidebar=()=>setisOpen(!isOpen)
  return (
    <div className='bg-primary1'>
      <div className='container bg-primary1 flex mx-auto min-h-screen'>
        <div className={`absolute top-0 transition-all duration-200 ${isOpen?"left-[0%]":"left-[-100%]"} md:static`}>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </div>
        <Routes>
          <Route path='/' element={<MainBord toggleSidebar={toggleSidebar}/>}>
             <Route path='/' index element={<Dashboard/>}/>
             <Route path='/profile' element={<Profile/>}/>
             <Route path='/order'  element={<Order/>}/>
             <Route path='/product'  element={<Product/>}/>
             <Route path='/seles'  element={<Seles/>}/>
             <Route path='*'  element={<Error/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App