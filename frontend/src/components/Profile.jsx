import React from 'react'
import {IoMdArrowBack} from 'react-icons/io'
import {Link, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetProfile from '../hooks/useGetProfile'


import FollowButton  from './FollowButton'
function Profile() {
  
    //custom hooks
    const {profile} = useSelector(store=>store.user)
    const {id} = useParams()
    useGetProfile(id)
    console.log("Profile variable: ",profile)
    
    
  return (
    <div className='md:col-span-2 border-gray-200 border border-t-0'>
      <div className='flex items-center gap-4 border-b border-gray-200 p-2 sticky top-0 bg-white/80 backdrop-blur-lg z-10'>
        <Link to='/' className='rounded-full p-2 hover:bg-gray-200 transition-colors'>
            <IoMdArrowBack className='w-5 h-5 sm:w-6 sm:h-6'/>
        </Link>
        <div className='flex flex-col'>
            <h1 className='text-lg sm:text-xl font-bold text-gray-800'>{profile?.name}</h1>
            <div className='text-sm text-gray-500'>2 posts</div>
        </div>
      </div>

      {/* banner */}
      <div className='relative'>
        <img 
          className='w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover cursor-pointer' 
          src="https://pbs.twimg.com/profile_banners/1604893889638588417/1733378269/1500x500" 
          alt="Profile Banner" 
        />
        <div className='absolute bottom-0 transform translate-y-1/2 left-4 sm:left-6'>
            <img 
              className='w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white cursor-pointer object-cover' 
              src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" 
              alt="Profile Picture" 
            />
        </div>
      </div>

      <div className='mx-4 sm:mx-6 mt-16 sm:mt-20'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center flex-wrap gap-2'>
            <span className='text-xl sm:text-2xl font-bold'>{profile?.name}</span>
            <button className='py-1 px-3 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition-colors'>
              Get verified
            </button>
          </div>
          <FollowButton followId={id}/>
        </div>
        <div className='text-sm text-gray-400 font-thin'>@{profile?.username}</div>

        <div className='text-gray-500 text-sm mt-4'>Joined December 2022</div>
        
        <div className='flex gap-6 mt-3'>
            <div>
              <span className='font-bold'>{profile?.following.length}</span>
              <span className='text-gray-500 ml-1'>Following</span>
            </div>
            <div>
              <span className='font-bold'>{profile?.followers.length}</span>
              <span className='text-gray-500 ml-1'>Followers</span>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Profile
