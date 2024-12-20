import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import FollowButton from './FollowButton';

function RightSideBar() {
  const { otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();
  // const location = useLocation();

  // const handleFollow = (e) => {
  //   e.stopPropagation(); // Prevent parent div's onClick
  //   console.log("Follow button is clicked");
  // };

  const handleNavigate = (userId) => {
    const profileUrl = `/profile/${userId}?key=${Date.now()}`; // Add unique query parameter
    navigate(profileUrl);
  };

  return (
    <div className='sticky top-0 py-1 h-[100vh] w-[31%] hidden lg:block'>
      <div className='rounded-full flex px-4 items-center bg-gray-100 '>
        <CiSearch size='24px' />
        <input
          type="text"
          placeholder="Search"
          className="rounded-full p-2 bg-gray-100 outline-none"
        />
      </div>
      <div className='rounded-xl border border-gray-200 p-2 my-3 w-full'>
        <h1 className='m-2 text-lg font-bold inline-block'>Who to follow</h1>
        {otherUsers?.map((user) => (
          <div
            onClick={() => handleNavigate(user?._id)}
            key={user?._id}
            className='flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer'
          >
            <Link className='flex items-center'>
              <Avatar
                className="cursor-pointer inline-block"
                src="https://pbs.twimg.com/profile_images/1604893971515604992/jvF7FyNu_400x400.jpg"
                size="40"
                round={true}
              />
              <div className='px-2'>
                <div className='font-bold hover:underline'>{user.name}</div>
                <div className='text-gray-400 text-sm'>@{user.username}</div>
              </div>
            </Link>
            <FollowButton followId= {user?._id}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSideBar;
