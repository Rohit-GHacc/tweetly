import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
function PostFeed() {
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
