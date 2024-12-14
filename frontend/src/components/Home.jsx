import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet } from 'react-router-dom'
// import {useSelector} from 'react-redux'
import useOtherUsers from '../hooks/useOtherUsers'
import { useSelector } from 'react-redux'

function Home() {
    const {user} = useSelector(store=>store.user)
    useOtherUsers(user?._id)
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
