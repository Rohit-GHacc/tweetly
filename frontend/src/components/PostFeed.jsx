import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import useGetTweets from '../hooks/useGetTweets'
import { useSelector } from 'react-redux'
function PostFeed() {
  const {user} = useSelector(store => store.user)
  useGetTweets(user?._id)
  return (
    <div className='w-[47%] border-gray-200 border border-t-0'>
      <CreatePost/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
      <Tweet/>
    </div>
  )
}

export default PostFeed
