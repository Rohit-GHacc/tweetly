import React from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md"
import { LiaPollSolid } from "react-icons/lia";
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { RiCalendarScheduleLine } from "react-icons/ri";
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import {TWEET_API_END_POINT} from '../utils/constant'
import axios from 'axios'
import { toggleRefresh, setFilter } from '../redux/tweetSlice';
function CreatePost() {
    const [description,setDescription] = useState('');
    const {user} = useSelector(store => store.user)
    const dispatch = useDispatch()

    const postTweet = async()=>{
        try {
            await axios.post(`${import.meta.env.VITE_TWEET_API_END_POINT}/create`,{description,id:user?._id},{withCredentials: true})
            dispatch(toggleRefresh())
            setDescription('')
        } catch (error) {
            console.log(error)
        }

    }
    // HANDLING FOR YOU AND FOLLOWING
    const {filter} = useSelector(store=>store.allTweets)
    
    return (
        <>
            <div className='  top-0 flex z-50 justify-around md:sticky border-b border-b-gray-200 bg-white bg-opacity-75 backdrop-blur-md'>
                <div onClick={()=>(dispatch(setFilter('forYou')))} className={`${filter==='forYou'? 'border-b-4 text-black border-blue-600': 'border-b-4 border-transparent'} text-gray-600 font-bold w-[50%] p-3 mt-0 text-center hover:bg-gray-200 cursor-pointer`}>For you</div>
                <div onClick={()=>(dispatch(setFilter('following')))} className={`${filter==='following'? 'border-b-4 border-blue-600': 'border-b-4 border-transparent text-black'} text-gray-600 font-bold w-[50%] p-3 mt-0 text-center hover:bg-gray-200 cursor-pointer`}>Following</div>
            </div>
            <div className="hidden  px-3 py-4 md:flex  relative ">
                <Avatar className="cursor-pointer" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true}/>
                <input value = {description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="What is happening?!" className="ml-2 w-full text-lg px-2 outline-none" />
            </div>
                <div className="hidden  md:flex p-4 justify-between border-b border-b-gray-200">
                    <div className='flex justify-around text-blue-500 gap-2  text-[30px] ml-12'>
                        <CiImageOn className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <MdOutlineGifBox className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <LiaPollSolid className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <MdOutlineEmojiEmotions className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <RiCalendarScheduleLine className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                    </div>
                    <button onClick={postTweet} className="rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 py-2 px-4 text-white text-center " disabled={description.length>0? false:true}>Post</button>
                </div>
        </>
    )
}

export default CreatePost
