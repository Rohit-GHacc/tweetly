import React from 'react'
import Avatar from 'react-avatar'
import { VscComment } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
// import { IoIosStats } from "react-icons/io";
// import { BsUpload } from "react-icons/bs";
import { MdOutlineDeleteOutline } from 'react-icons/md'
import axios from 'axios'

// import {TWEET_API_END_POINT, USER_API_END_POINT} from '../utils/constant'
import {useSelector} from 'react-redux'
import toast from 'react-hot-toast'
import {toggleRefresh} from '../redux/tweetSlice'
import { useDispatch } from 'react-redux';
import {timeSince} from '../utils/constant'
function Tweet({tweet}) {
    const {user} = useSelector(store => store.user)
    const dispatch= useDispatch()
    const likeDislikeHandler = async (id)=>{
        try {
            const res = await axios.put(`${import.meta.env.VITE_TWEET_API_END_POINT}/like/${id}`,{id: user?._id},{
                withCredentials: true
            })
            dispatch(toggleRefresh())
            console.log(res)
            toast.success(res.data.message)
        } catch (error) {
            // toast.response.error.message(error)
            toast.success(error.response.data.message)
            console.log(error)
        }
    }

    const deleteTweet = async (id)=>{
        try {
            const res = await axios.delete(`${import.meta.env.VITE_TWEET_API_END_POINT}/delete/${id}`,{withCredentials:true})
            dispatch(toggleRefresh())
            toast.success(res.data.message)
        } catch (error) {
            toast.success(error.response.data.message)
            console.log(error)
        }
    }

    const bookmarkHandler = async (tweetId)=>{
        try {
            //unbookmark the tweet
                const res = await axios.put(`${import.meta.env.VITE_USER_API_END_POINT}/bookmark/${tweetId}`,{id: user?._id},{
                    withCredentials: true
                })
                dispatch(toggleRefresh())
                // user.bookmarks = user.bookmarks.filter((id)=> id !== tweetId)
                toast.success(res.data.message)
            
            // else{
            //     //unbookmark the tweet
            //     user.bookmarks.push(tweetId)
            //     toast.success(res.data.message)
            // }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className='border-b border-b-gray-200 hover:bg-gray-100 cursor-pointer '>
            <div className='flex px-2 py-4 gap-2  '>
                <Avatar className="cursor-pointer" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true} />
                <div className='w-full px-1'>
                    <span className='font-bold'>{`${tweet?.user?.name}`}</span>
                    <p className='inline ml-1 text-gray-400'>{` @${tweet?.user?.username} . ${timeSince(tweet?.createdAt)}`} </p>
                    <div>{tweet?.description} </div>
                    <div className='flex justify-between pt-3 text-sm text-gray-500 '>
                        <div className='flex align-center justify-between hover:text-[#1d9bf0]'> <div className='p-1 hover:bg-blue-100  rounded-full'><VscComment size='24px' className='font-thin '/> </div><span className=' p-1 '> 90.1K</span> </div>
                        <div className='flex align-center hover:text-[#00ba7c]'> <div className='p-1 hover:bg-green-100 rounded-full'><BiRepost size='22px'/></div> <span className='p-1'>500 </span></div>
                        <div onClick={()=>(likeDislikeHandler(tweet?._id))} className='flex align-center hover:text-[#f91880]'> <div className='p-1 hover:bg-red-100 rounded-full'><CiHeart size='22px'/></div> <span className='p-1'> {tweet?.like.length}</span></div>
                        <div className='flex align-center gap-1'> <div onClick={()=>bookmarkHandler(tweet?._id)} className='p-1 hover:text-[#1d9bf0] hover:bg-blue-100 rounded-full cursor-pointer'><CiBookmark size='22px'/></div> <div className='p-1 hover:text-[#1d9bf0] hover:bg-blue-100 rounded-full cursor-pointer'>{tweet?.bookmarks.length}</div></div>
                        { user?._id === tweet?.userId && <div onClick={()=>deleteTweet(tweet?._id)} className='flex align-center hover:text-[#1d9bf0]'> <div className='p-1 hover:bg-blue-100 rounded-full'><MdOutlineDeleteOutline size='22px'/></div></div>}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Tweet
