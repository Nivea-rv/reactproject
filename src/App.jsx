import React from 'react'
import "./App.css"
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Container from './Container'
import Home from './HOME/Home'
import CourseDetails from './CourseDetails'
import Registration from './BOOK/Registration'
import FetchDetails from './BOOK/FetchDetails'
import EditDetails from './BOOK/EditDetails'
import DeleteDetails from './BOOK/DeleteDetails'
import TrainerInfo from './TrainerInfo'

let router=createBrowserRouter([
  {
    path:"/",
    element:<Container></Container>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/coursedetails",
        element:<CourseDetails></CourseDetails>
      },
      {
        path:"/Regestration",
        element:<Registration></Registration>
      },
      {
        path:"/fetchdetails",
        element:<FetchDetails></FetchDetails>
      },
      {
        path:"/edit/:id",
        element:<EditDetails></EditDetails>
      },
      {
        path:"/delete/:id",
        element:<DeleteDetails></DeleteDetails>
      },
      {
        path:"/trainerinfo",
        element:<TrainerInfo></TrainerInfo>
      }
     
    ]
    
  }
])

const App = () => {
  return (
    <div>
           <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App