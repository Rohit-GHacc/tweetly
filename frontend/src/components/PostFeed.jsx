import React from 'react'
import Avatar from 'react-avatar'
import { FaXTwitter } from 'react-icons/fa6'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'
function PostFeed() {
  // const {user} = useSelector(store => store.user)
  // console.log(user?.name)
  const tweets = useSelector(store => store?.allTweets?.mytweets) || []
  // console.log("Saare tweets: ",tweets)

  return (
    <div className='w-[100%] md:col-span-2 md:border md:border-t-0 md:border-gray-200 '>
      <div className='  top-0 flex md:hidden z-50 justify-between p-2 text-sm sticky  bg-white bg-opacity-75 backdrop-blur-md'>
        <Avatar className="cursor-pointer" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true} />
        <FaXTwitter size='30px' />
        <button className='bg-white rounded-full border border-gray-200 text-gray-600 text-sm px-2 hover:bg-gray-200'>Upgrade</button>
      </div>
      <CreatePost />
      {
        tweets.length > 0 ? (
          tweets?.map((tweet) => {
            return (
              <Tweet key={tweet?._id} tweet={tweet} />
            )
          })
        ) :
          <p className='pt-4 flex justify-center '>No Tweets to display</p>
      }

    </div>
  )
}

export default PostFeed
