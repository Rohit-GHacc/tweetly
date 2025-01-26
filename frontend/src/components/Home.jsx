import React,{useEffect} from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useOtherUsers from '../hooks/useOtherUsers'
import useGetTweets from '../hooks/useGetTweets'

function Home() {
    const navigate = useNavigate()
    const {user} = useSelector(store=>store.user)
    
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
        //eslint-disable-next-line
    },[user,navigate])
    
    useGetTweets(user?._id)
    useOtherUsers(user?._id)
    
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-0 lg:gap-4">
                    <div className="hidden lg:block lg:col-span-1">
                        <LeftSideBar />
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <Outlet/>
                    </div>
                    <div className="hidden lg:block lg:col-span-1">
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
