import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { FaBolt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
// import { CiCircleMore } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';
import { getAllTweets, setFilter } from '../redux/tweetSlice';
function LeftSideBar() {
  const {user} = useSelector(store => store.user)
  console.log("Mai leftsidebar mein hu: ", user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    dispatch(getUser(null))
    dispatch(setFilter('following'))

    dispatch(getOtherUsers(null))
    dispatch(getMyProfile(null))
    dispatch(getAllTweets(null))
    navigate('/login')
  }
  return (
    <div className='sticky top-0 h-[100vh] w-[18%]'>
        <div className='hover:bg-gray-200 p-2  rounded-full inline-block '>
            <FaXTwitter  size = '30px'/>
        </div>
        <div className='flex flex-col'>
            <Link to='/' className='flex py-2 px-2 items-center  hover:bg-gray-200 rounded-full cursor-pointer'> <CiHome size='28px'/> <span className='px-4 text-lg  '>Home</span> </Link>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <CiSearch size='28px'/> <div className='px-4 text-lg'>Explore</div> </div>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <IoIosNotificationsOutline size='28px'/> <div className='px-4 text-lg'>Notifications</div> </div>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <CiMail size='28px'/> <div className='px-4 text-lg'>Messages</div> </div>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <CiHome size='28px'/> <div className='px-4 text-lg'>Grok</div> </div>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <BsPeople size='28px'/> <div className='px-4 text-lg'>Communities</div> </div>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <FaXTwitter size='28px'/> <div className='px-4 text-lg'>Premium</div> </div>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <FaBolt size='28px'/> <div className='px-4 text-lg'>Verified Orgs</div> </div>
            <Link to={`/profile/${user?._id}`} className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer'> <IoPersonOutline size='28px'/> <div className='px-4 text-lg'>Profile</div> </Link>
            <div className='inline-flex  py-2 px-2 mx-0 my-0 hover:bg-gray-200 rounded-full cursor-pointer' onClick={logoutHandler}> <IoIosLogOut size='28px'/> <div className='px-4 text-lg'>Logout</div> </div>
            <div className='text-white py-3 px-2 mx-0 my-2 bg-blue-500 text-center  hover:bg-blue-600 rounded-full text-sm cursor-pointer'> Post </div>
        </div>
    </div>
  )
}

export default LeftSideBar
