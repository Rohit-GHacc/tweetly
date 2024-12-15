import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'
function PostFeed() {
  const {user} = useSelector(store => store.user)
  console.log(user?.name)
  const tweets = useSelector(store=>store?.allTweets?.tweets) || []
  console.log("Saare tweets: ",tweets)
  
  return (
    <div className='w-[47%] border-gray-200 border border-t-0'>
      <CreatePost/>
      {
        tweets.length>0 ? (
        tweets?.map((tweet)=>{
          return (
            <Tweet key = {tweet?._id} tweet={tweet}/>
          )
        })
      ):
      <p>No Tweets to display</p>
      }
      
    </div>
  )
}

export default PostFeed
