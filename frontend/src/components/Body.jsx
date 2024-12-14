import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostFeed from './PostFeed'
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
function Body() {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
            children:[
            {
                path: '/',
                element: <PostFeed/>
            },
            {
                path:'/profile',
                element: <Profile/>
            }
        ]
        },
        {
            path:'/login',
            element: <Login/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
