import React from 'react'
import Avatar from 'react-avatar'
import { FaXTwitter } from 'react-icons/fa6'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOtherUsers, getMyProfile, getUser } from '../redux/userSlice'
import { getAllTweets, setFilter } from '../redux/tweetSlice'

function PostFeed() {
  const tweets = useSelector(store => store?.allTweets?.mytweets) || []
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    // Reset all states
    dispatch(getUser(null))
    dispatch(setFilter('forYou'))
    dispatch(getOtherUsers(null))
    dispatch(getMyProfile(null))
    dispatch(getAllTweets(null))
    navigate('/login')
  }

  return (
    <div className='w-full md:col-span-2 md:border md:border-t-0 md:border-gray-200'>
      {/* Mobile Header */}
      <div className='sticky top-0 flex md:hidden z-50 justify-between items-center p-3 bg-white/90 backdrop-blur-md border-b border-gray-200'>
        <Avatar 
          className="cursor-pointer transition-transform hover:scale-105" 
          src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" 
          size="40" 
          round={true} 
        />
        <FaXTwitter className='w-7 h-7' />
        <button 
          onClick={logoutHandler} 
          className='bg-white rounded-full border border-gray-200 text-gray-600 px-4 py-1.5 font-medium
                     hover:bg-gray-100 transition-colors duration-200 active:scale-95'
        >
          Logout
        </button>
      </div>

      {/* Create Post Component */}
      <CreatePost />

      {/* Tweets Feed */}
      <div className='divide-y divide-gray-100'>
        {tweets.length > 0 ? (
          tweets.map((tweet) => (
            <Tweet key={tweet?._id} tweet={tweet} />
          ))
        ) : (
          <div className='py-8 text-center text-gray-500'>
            <p className='text-lg'>No tweets to display</p>
            <p className='text-sm mt-2'>Be the first one to tweet!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostFeed
