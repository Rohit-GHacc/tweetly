import React from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md"
import { LiaPollSolid } from "react-icons/lia";
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { RiCalendarScheduleLine } from "react-icons/ri";
function CreatePost() {
    return (
        <>
            <div className='  top-0 flex z-50 justify-around sticky border-b border-b-gray-200 bg-white bg-opacity-75 backdrop-blur-md'>
                <div className='text-gray-600 font-bold w-[50%] p-3 mt-0 text-center hover:bg-gray-200 cursor-pointer'>For you</div>
                <div className='text-gray-600 font-bold w-[50%] p-3 mt-0 text-center hover:bg-gray-200 cursor-pointer'>Following</div>
            </div>
            <div className="px-3 py-4 flex  relative ">
                <Avatar className="cursor-pointer" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true}/>
                <input type="text" placeholder="What is happening?!" className="ml-2 w-full text-lg px-2 outline-none" />
            </div>
                <div className="flex p-4 justify-between border-b border-b-gray-200">
                    <div className='flex justify-around text-blue-500 gap-2  text-[30px] ml-12'>
                        <CiImageOn className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <MdOutlineGifBox className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <LiaPollSolid className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <MdOutlineEmojiEmotions className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                        <RiCalendarScheduleLine className="hover:bg-blue-100 cursor-pointer rounded-full p-1"/>
                    </div>
                    <button className="rounded-full bg-blue-300 py-2 px-4 text-white text-center">Post</button>
                </div>
        </>
    )
}

export default CreatePost
