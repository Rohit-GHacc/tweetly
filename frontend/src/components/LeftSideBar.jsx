import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { FaBolt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';
import { getAllTweets, setFilter } from '../redux/tweetSlice';

function LeftSideBar() {
  const {user} = useSelector(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = ()=>{
    dispatch(getUser(null))
    dispatch(setFilter('forYou'))
    dispatch(getOtherUsers(null))
    dispatch(getMyProfile(null))
    dispatch(getAllTweets(null))
    navigate('/login')
  }

  const menuItems = [
    {icon: <CiHome size='28px'/>, text: 'Home', link: '/'},
    {icon: <CiSearch size='28px'/>, text: 'Explore'},
    {icon: <IoIosNotificationsOutline size='28px'/>, text: 'Notifications'},
    {icon: <CiMail size='28px'/>, text: 'Messages'},
    {icon: <CiHome size='28px'/>, text: 'Grok'},
    {icon: <BsPeople size='28px'/>, text: 'Communities'},
    {icon: <FaXTwitter size='28px'/>, text: 'Premium'},
    {icon: <FaBolt size='28px'/>, text: 'Verified Orgs'},
    {icon: <IoPersonOutline size='28px'/>, text: 'Profile', link: `/profile/${user?._id}`},
    {icon: <IoIosLogOut size='28px'/>, text: 'Logout', onClick: logoutHandler}
  ]

  return (
    <div className='sticky top-0 h-screen hidden md:flex flex-col w-fit lg:w-[90%] max-w-[300px] p-4'>
      <div className='hover:bg-gray-200 p-2 rounded-full inline-block mb-4 cursor-pointer'>
        <FaXTwitter size='30px'/>
      </div>

      <nav className='flex flex-col space-y-1 flex-grow'>
        {menuItems.map((item, index) => {
          const MenuItem = item.link ? Link : 'div'
          return (
            <MenuItem
              key={index}
              to={item.link}
              onClick={item.onClick}
              className='flex items-center py-3 px-4 hover:bg-gray-200 rounded-full cursor-pointer transition-colors duration-200 group'
            >
              <div className='w-7 h-7 flex items-center justify-center group-hover:bg-gray-200'>
                {item.icon}
              </div>
              <span className='px-4 text-lg hidden lg:inline group-hover:bg-gray-200'>{item.text}</span>
            </MenuItem>
          )
        })}
      </nav>

      <button className='w-[90%] bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-full font-medium transition-colors duration-200 mt-4'>
        <span className='lg:inline hidden'>Post</span>
        <span className='lg:hidden inline'>+</span>
      </button>
    </div>
  )
}

export default LeftSideBar
