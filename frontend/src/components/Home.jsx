import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'
import useGetProfile from '../hooks/useGetProfile'
import { useSelector } from 'react-redux'

function Home() {
    //custom hooks
    const {user} = useSelector(store=>store.user)
    useGetProfile(user._id)
    return (
        <div>
            <div className='flex mx-auto w-[80%] justify-center gap-[2%]'>
                <LeftSideBar />
                < Outlet/>
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
