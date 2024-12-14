import React from 'react'
import Avatar from 'react-avatar'
import { VscComment } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
function Tweet() {
    return (
        <div className='border-b border-b-gray-200 hover:bg-gray-100 cursor-pointer '>
            <div className='flex px-2 py-4 gap-2  '>
                <Avatar className="cursor-pointer" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true} />
                <div className='w-full px-1'>
                    <span className='font-bold'>Rohit</span>
                    <p className='inline ml-1 text-gray-400'> @bestperson . 2m</p>
                    <div>I'll be a great person one day for sure. </div>
                    <div className='flex justify-between pt-3 text-sm text-gray-500 '>
                        <div className='flex align-center justify-between hover:text-[#1d9bf0]'> <div className='p-1 hover:bg-blue-100  rounded-full'><VscComment size='24px' className='font-thin '/> </div><span className=' p-1 '> 90.1K</span> </div>
                        <div className='flex align-center hover:text-[#00ba7c]'> <div className='p-1 hover:bg-green-100 rounded-full'><BiRepost size='22px'/></div> <span className='p-1'>500 </span></div>
                        <div className='flex align-center hover:text-[#f91880]'> <div className='p-1 hover:bg-red-100 rounded-full'><CiHeart size='22px'/></div> <span className='p-1'> 500K</span></div>
                        <div className='flex align-center hover:text-[#1d9bf0]'> <div className='p-1 hover:bg-blue-100 rounded-full'><IoIosStats size='22px'/></div> <span className='p-1'> 1M</span></div>
                        <div className='flex align-center gap-1'> <div className='p-1 hover:text-[#1d9bf0] hover:bg-blue-100 rounded-full cursor-pointer'><CiBookmark size='22px'/></div> <div className='p-1 hover:text-[#1d9bf0] hover:bg-blue-100 rounded-full cursor-pointer'><BsUpload size='22px'/></div></div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Tweet
