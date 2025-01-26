import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice'

function EditProfile({ onClose }) {
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    bio: user?.bio || '',
    profileImage: user?.profileImage || '',
    bannerImage: user?.bannerImage || ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser(formData))
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold">Edit Profile</h2>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-1 rounded-full font-bold hover:bg-gray-800"
          >
            Save
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <img
              className="w-full h-32 sm:h-48 object-cover"
              src={formData.bannerImage || "https://via.placeholder.com/500x200"}
              alt="Banner"
            />
            <img
              className="absolute bottom-0 left-4 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
              src={formData.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
            />
          </div>

          <div className="mt-16 space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full outline-blue-500 border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full outline-blue-500 border border-gray-300 rounded-md px-4 py-2"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Bio"
              rows="3"
              className="w-full outline-blue-500 border border-gray-300 rounded-md px-4 py-2 resize-none"
            />
            <input
              type="text"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              placeholder="Profile Image URL"
              className="w-full outline-blue-500 border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="text"
              name="bannerImage"
              value={formData.bannerImage}
              onChange={handleChange}
              placeholder="Banner Image URL"
              className="w-full outline-blue-500 border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
