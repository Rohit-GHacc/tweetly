import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
function RightSideBar() {
  return (
    <div className=' sticky top-0 py-1 h-[100vh] w-[31%]'>
      <div className='rounded-full flex px-4 items-center bg-gray-100 '>
        <CiSearch size='24px' />
        <input type="text" placeholder='Search' className='rounded-full p-2 bg-gray-100 outline-none ' />
      </div>
      <div className='rounded-xl border border-gray-200 p-2 my-3 w-full'>
        <h1 className='m-2 text-lg font-bold'>Who to follow</h1>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <Avatar className="cursor-pointer inline-block" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true} />
            <div className='px-2'>
            <div className='font-bold'> Sportscenter</div>
            <div className='text-gray-400 text-sm'> @SportsCenter</div>
            </div>
          </div>
          <div className='bg-black text-white px-4 pt-1 pb-2 h-[50%] font-bold text-sm rounded-full cursor-pointer '>
            <button >Follow</button>
          </div>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center '>
            <Avatar className="cursor-pointer inline-block" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true} />
            <div className='px-2'>
            <div className='font-bold'> Sportscenter</div>
            <div className='text-gray-400 text-sm'> @SportsCenter</div>
            </div>
          </div>
          <div className='bg-black text-white px-4 pt-1 pb-2 h-[50%] font-bold text-sm rounded-full cursor-pointer'>
            <button >Follow</button>
          </div>
        </div>
        <div className='flex justify-between items-center p-2'>
          <div className='flex items-center'>
            <Avatar className="cursor-pointer inline-block" src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg" size="40" round={true} />
            <div className='px-2'>
            <div className='font-bold'> Sportscenter</div>
            <div className='text-gray-400 text-sm'> @SportsCenter</div>
            </div>
          </div>
          <div className='bg-black text-white px-4 pt-1 pb-2 h-[50%] font-bold text-sm rounded-full cursor-pointer'>
            <button >Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
