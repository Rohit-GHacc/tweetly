import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { USER_API_END_POINT } from '../utils/constant'
import axios from 'axios'
import { toggleRefresh } from '../redux/tweetSlice'
import { followingUpdate } from '../redux/userSlice'
function FollowButton({followId}) {
    const dispatch = useDispatch()
    const {profile,user} = useSelector(store=>store.user)
    const [text,setText] = useState('Following')
    const handleMouseOver = ()=>{
      setText('Unfollow')
    }
    const handleMouseOut =()=>{
      setText('Following')
    }
    const followHandler = async(e,id)=>{
        try {
            e.stopPropagation()
          const res = await axios.put(`${USER_API_END_POINT}/follow/${id}`,{id:user?._id},{
            withCredentials: true
          })
          dispatch(toggleRefresh())
          dispatch(followingUpdate(id))
          toast.success(res.data.message)
        } catch (error) {
          toast.error(error.response.data.message)
          console.log(error)
        }
      }
    const unfollowHandler = async(e,id)=>{
        try {
            e.stopPropagation()
          const res = await axios.put(`${USER_API_END_POINT}/unfollow/${id}`,{id:user?._id},{
            withCredentials: true
          })
          dispatch(toggleRefresh())
          dispatch(followingUpdate(id))
          toast.success(res.data.message)
        } catch (error) {
          toast.error(error.response.data.message)
          console.log(error)
        }
      }
  return (
    <div className='m-4 text-right '>
            {
              followId === user?._id ?
              <button className ={`px-4 py-1 hover:bg-gray-200 rounded-full cursor-pointer border border-gray-200 font-bold `}>Edit Profile </button> : 
              user.following.includes(followId) ? 
              <button onClick={(e)=>unfollowHandler(e,followId)} className ={'px-4 py-1 rounded-full cursor-pointer border text-black bg-white font-bold hover:text-red-500 transition duration-300'} onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut}>{text} </button> :
              <button onClick={(e)=>followHandler(e,followId)} className ={`px-4 py-1 rounded-full cursor-pointer border text-white bg-black font-bold  hover:bg-gray-800 transition duration-300`}>Follow </button> 
              
            }
        </div>
  )
}

export default FollowButton
