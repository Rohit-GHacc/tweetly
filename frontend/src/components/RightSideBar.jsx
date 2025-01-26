import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FollowButton from './FollowButton';

function RightSideBar() {
  const { otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleNavigate = (userId) => {
    const profileUrl = `/profile/${userId}?key=${Date.now()}`;
    navigate(profileUrl);
  };

  return (
    <div className='sticky top-0 py-1 h-screen hidden lg:block overflow-y-auto'>
      <div className='rounded-full flex px-4 items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
        <CiSearch className='text-gray-500' size='24px' />
        <input
          type="text"
          placeholder="Search"
          className="rounded-full p-3 w-full bg-transparent outline-none placeholder-gray-500"
        />
      </div>
      
      <div className='rounded-xl border border-gray-200 p-4 my-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200'>
        <h1 className='mb-4 text-xl font-bold'>Who to follow</h1>
        <div className='space-y-3'>
          {otherUsers?.map((user) => (
            <div
              onClick={() => handleNavigate(user?._id)}
              key={user?._id}
              className='flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer'
            >
              <Link className='flex items-center flex-1 min-w-0'>
                <Avatar
                  className="flex-shrink-0"
                  src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg"
                  size="40"
                  round={true}
                />
                <div className='px-3 truncate'>
                  <div className='font-bold hover:underline text-sm text-gray-900'>{user.name.split(" ")[0]}</div>
                  <div className='text-gray-500 text-sm truncate'>@{user.username}</div>
                </div>
              </Link>
              <div className='flex-shrink-0 ml-2'>
                <FollowButton followId={user?._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
