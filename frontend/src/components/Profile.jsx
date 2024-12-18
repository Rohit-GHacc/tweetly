import React from 'react'
import {IoMdArrowBack} from 'react-icons/io'
import {Link, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetProfile from '../hooks/useGetProfile'


import FollowButton  from './FollowButton'
function Profile() {
  
    //custom hooks
    const {profile,user} = useSelector(store=>store.user)
    const {id} = useParams()
    useGetProfile(id)
    console.log("Profile variable: ",profile)
    
    
  return (
    <div className='w-[47%] border-gray-200 border border-t-0  '>
      <div className='flex items-center border-b border-gray-200 cursor-pointer sticky top-0 background-white backdrop-blur'>
        <Link to='/' className='rounded-full p-2 hover:bg-gray-200 ml-2'>
            <IoMdArrowBack size='20px'/>
        </Link>
        <div className='ml-6 mb-1 pt-1'>
            <h1 className='text-lg font-bold text-gray-800'>{profile?.name}</h1>
            <div className='text-sm text-gray-500'>2 posts</div>
        </div>
      </div>

      {/* banner */}
      <div>
        <img className='cursor-pointer' src="https://pbs.twimg.com/profile_banners/1604893889638588417/1733378269/1500x500" alt="" />
        <div className='rounded-full cursor-pointer absolute  ml-4 -mt-16 '>
            <img className='rounded-full border-4 border-white' src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" alt="" style={{width:'33%'}} />
        </div>
        <FollowButton followId={id}/>
      </div>
      <div className='mx-4 mt-6'>
        <span className='text-xl font-bold'>{profile?.name}</span>
        <span className='py-1 px-2 text-sm border border-gray-300 rounded-full ml-2 hover:bg-gray-300'><button>Get verified</button></span>
        <div className='text-sm text-gray-400 font-thin'>@{profile?.username}</div>

        <div className='text-gray-500 text-sm mt-4'>Joined December 2022</div>
        <div>
            <span className=' font-bold text-xs'>{profile?.following.length} <span className='text-xs text-gray-500 font-thin'>Following</span> </span>
            <span className='font-bold ml-5 text-xs'>{profile?.followers.length} <span className='text-xs text-gray-500 font-thin'>Followers</span></span>
        </div>
      </div>

    </div>
  )
}

export default Profile
