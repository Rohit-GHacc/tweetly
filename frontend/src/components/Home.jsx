import React,{useEffect} from 'react'
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
    console.log()
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
        //eslint-disable-next-line
    },[user,navigate])
    useGetTweets(user?._id)
    useOtherUsers(user?._id)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 mx-0 md:mx-auto md:w-[80%] md:justify-center md:gap-[2%]'>
                <LeftSideBar />
                <Outlet/>
                <RightSideBar />
            </div>
        </div>
    )
}

export default Home
