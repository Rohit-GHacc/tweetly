import React from 'react'
import Avatar from 'react-avatar'
import { VscComment } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineDeleteOutline } from 'react-icons/md'
import axios from 'axios'
import {useSelector} from 'react-redux'
import toast from 'react-hot-toast'
import {toggleRefresh} from '../redux/tweetSlice'
import { useDispatch } from 'react-redux';
import {timeSince} from '../utils/constant'

function Tweet({tweet}) {
    const {user} = useSelector(store => store.user)
    const dispatch= useDispatch()

    const likeDislikeHandler = async (e, id) => {
        e.stopPropagation()
        try {
            const res = await axios.put(`${import.meta.env.VITE_TWEET_API_END_POINT}/like/${id}`,
                {id: user?._id},
                {withCredentials: true}
            )
            dispatch(toggleRefresh())
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong')
            console.error(error)
        }
    }

    const deleteTweet = async (e, id) => {
        e.stopPropagation()
        try {
            const res = await axios.delete(
                `${import.meta.env.VITE_TWEET_API_END_POINT}/delete/${id}`,
                {withCredentials: true}
            )
            dispatch(toggleRefresh())
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong')
            console.error(error)
        }
    }

    const bookmarkHandler = async (e, tweetId) => {
        e.stopPropagation()
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_USER_API_END_POINT}/bookmark/${tweetId}`,
                {id: user?._id},
                {withCredentials: true}
            )
            dispatch(toggleRefresh())
            toast.success(res.data.message)
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || 'Something went wrong')
        }
    }
    const ActionButton = ({onClick, icon: Icon, count, color}) => {
        // Remove the dynamic class construction and use specific Tailwind classes
        const buttonClasses = {
            'blue-500': 'group-hover:bg-blue-100 group-hover:text-blue-500',
            'green-500': 'group-hover:bg-green-100 group-hover:text-green-500',
            'pink-500': 'group-hover:bg-pink-100 group-hover:text-pink-500'
        }[color]

        const textClasses = {
            'blue-500': 'group-hover:text-blue-500',
            'green-500': 'group-hover:text-green-500',
            'pink-500': 'group-hover:text-pink-500'
        }[color]

        return (
            <div className='flex items-center group'>
                <div 
                    onClick={onClick}
                    className={`p-2 rounded-full transition-colors cursor-pointer ${buttonClasses}`}
                >
                    <Icon size='20px' className='sm:w-5 sm:h-5'/>
                </div>
                {count !== undefined && (
                    <span className={`text-sm ${textClasses} ml-1`}>
                        {count > 0 ? count : ''}
                    </span>
                )}
            </div>
        )
    }
    

    return (
        <div className='border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer'>
            <div className='flex p-3 sm:p-4 gap-3'>
                <div className='flex-shrink-0'>
                    <Avatar 
                        className="cursor-pointer transition-transform hover:scale-105" 
                        src={tweet?.user?.profileImage || "https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg"} 
                        size="40" 
                        round={true} 
                    />
                </div>

                <div className='flex-grow min-w-0'>
                    <div className='flex items-center flex-wrap gap-1'>
                        <span className='font-bold hover:underline truncate'>
                            {tweet?.user?.name}
                        </span>
                        <span className='text-gray-500 truncate'>
                            @{tweet?.user?.username}
                        </span>
                        <span className='text-gray-500'>·</span>
                        <span className='text-gray-500 hover:underline'>
                            {timeSince(tweet?.createdAt)}
                        </span>
                    </div>

                    <p className='whitespace-pre-wrap break-words mt-1'>
                        {tweet?.description}
                    </p>

                    <div className='flex justify-between mt-3 text-gray-500 max-w-md'>
                        <ActionButton 
                            icon={VscComment}
                            count={tweet?.comments?.length}
                            color="blue-500"
                        />
                        <ActionButton 
                            icon={BiRepost}
                            count={tweet?.retweets?.length}
                            color="green-500"
                        />
                        <ActionButton 
                            icon={CiHeart}
                            onClick={(e) => likeDislikeHandler(e, tweet?._id)}
                            count={tweet?.like?.length}
                            color="pink-500"
                        />
                        <ActionButton 
                            icon={CiBookmark}
                            onClick={(e) => bookmarkHandler(e, tweet?._id)}
                            count={tweet?.bookmarks?.length}
                            color="blue-500"
                        />
                        {user?._id === tweet?.userId && (
                            <ActionButton 
                                icon={MdOutlineDeleteOutline}
                                onClick={(e) => deleteTweet(e, tweet?._id)}
                                color="red-500"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
