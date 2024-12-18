import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet, useNavigate } from 'react-router-dom'
// import {useSelector} from 'react-redux'
import { useSelector } from 'react-redux'
import useOtherUsers from '../hooks/useOtherUsers'
import useGetTweets from '../hooks/useGetTweets'

function Home() {
    const navigate = useNavigate()
    const {user} = useSelector(store=>store.user)
    useGetTweets(user?._id)
    useOtherUsers(user?._id)
    React.useEffect(()=>{
    if(!user){
                navigate('/login')
            }
            //eslint-disable-next-line
    },[user])
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
