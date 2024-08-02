import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Users from '../pages/Users';
import Equipments from '../pages/Equipments';
import Maintenance from '../pages/Maintenance';
import LowEquipments from '../pages/LowEquipments';
import Login from '../pages/Login';
import Register from '../pages/Register';
import EditProfile from '../pages/EditProfile';
import EditUser from '../assets/components/EditUser';

const router = createBrowserRouter([
    { path:"/", element:<Home/> },
    { path:"/editProfile", element:<EditProfile/> },
    { path:"/admin", element:<Admin/> },
    { path:"/users", element:<Users/> },
    { path:"/editUser", element:<EditUser/> },
    { path:"/equipments", element:<Equipments/> },
    { path:"/maintenance", element:<Maintenance/> },
    { path:"/lowEquipments", element:<LowEquipments/> },
    { path:"/login", element:<Login/> },
    { path:"/register", element:<Register/> }
])

const Routes = () => {
  return (
    <RouterProvider router = {router}/>
  )
}

export default Routes