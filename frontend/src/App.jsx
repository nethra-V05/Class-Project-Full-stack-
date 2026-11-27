import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Project from './pages/projects'
import Tasks from './pages/tasks'
import Teams from './pages/teams'
import Clients from './pages/clients'
import Dashboard from './pages/dashboard'
import Calender from './pages/calender'
import Settings from './pages/settings'
import Register from './pages/register'
import Admin from './pages/admin/adminlayout'
import Adminuserdetails from './pages/admin/userdetails'
import Adminsettings from './pages/admin/settings'
import Admindashboard from './pages/admin/dashboard'


function App() {

  return(
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/projects" element={<Project/>}/>
        <Route path ="/tasks" element={<Tasks/>}/>
        <Route path ="/teams" element={<Teams/>}/>
        <Route path ="/clients" element={<Clients/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/calender" element={<Calender/>}/>
        <Route path ="/settings" element={<Settings/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/admin" element={<Admin/>}>
           <Route path ="admindashboard" element={<Admindashboard/>}/>
           <Route path ="adminuserdetails" element={<Adminuserdetails/>}/>
           <Route path ="adminsettings" element={<Adminsettings/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
  )
}


export default App