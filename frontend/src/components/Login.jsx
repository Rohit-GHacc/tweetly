import React, { useEffect, useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser } from '../redux/userSlice'

function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '', 
    username: '', 
    email: '', 
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginSignupHandler = (e) => {
    e.preventDefault();
    setHasAccount(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user.email || !user.password || (!hasAccount && (!user.name || !user.username))) {
      toast.error('Please fill all required fields')
      return
    }

    setLoading(true)

    try {
      const endpoint = hasAccount ? 'login' : 'register'
      const payload = hasAccount ? 
        { email: user.email, password: user.password } : 
        user

      const res = await axios.post(
        `${import.meta.env.VITE_USER_API_END_POINT}/${endpoint}`, 
        payload,
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      )

      if (res.data.success) {
        if (hasAccount) {
          dispatch(getUser(res?.data?.user))
          navigate('/')
        } else {
          // After successful registration, login automatically
          const loginRes = await axios.post(
            `${import.meta.env.VITE_USER_API_END_POINT}/login`,
            { email: user.email, password: user.password },
            {
              headers: {'Content-Type': 'application/json'},
              withCredentials: true
            }
          )
          if (loginRes.data.success) {
            dispatch(getUser(loginRes?.data?.user))
            navigate('/')
          }
        }
        toast.success(res.data.message)
      }

    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function capitalizeWords(sentence) {
    if (!sentence) return ''
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8'>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo for larger screens */}
        <div className='hidden md:flex md:w-1/3 lg:w-2/5 justify-center'>
          <FaXTwitter className="w-48 h-48 lg:w-80 lg:h-80" />
        </div>

        {/* Logo for mobile */}
        <div className='md:hidden w-12 h-12'>
          <FaXTwitter className="w-full h-full" />
        </div>

        {/* Main content */}
        <div className='w-full md:w-2/3 lg:w-3/5 max-w-xl'>
          <h1 className='font-extrabold text-3xl text-center md:text-left sm:text-4xl md:text-5xl lg:text-7xl mb-4'>
            Happening now
          </h1>
          <h2 className='font-bold text-2xl text-center md:text-left sm:text-3xl md:text-4xl mb-6'>
            Join today.
          </h2>

          <form onSubmit={handleSubmit} className='w-full space-y-3'>
            {!hasAccount && (
              <>
                <input 
                  type="text" 
                  name='name' 
                  value={capitalizeWords(user.name)} 
                  onChange={handleInputChange} 
                  placeholder="Enter name" 
                  className='w-full outline-blue-500 border border-gray-300 rounded-full px-4 py-2 text-base transition-colors focus:border-blue-500'
                />
                <input 
                  type="text" 
                  name='username' 
                  value={user.username} 
                  onChange={handleInputChange} 
                  placeholder="Enter username" 
                  className='w-full outline-blue-500 border border-gray-300 rounded-full px-4 py-2 text-base transition-colors focus:border-blue-500'
                />
              </>
            )}
            
            <input 
              type="email" 
              name='email' 
              value={user.email} 
              onChange={handleInputChange} 
              placeholder="Enter email" 
              className='w-full outline-blue-500 border border-gray-300 rounded-full px-4 py-2 text-base transition-colors focus:border-blue-500'
            />
            <input 
              type="password" 
              name='password' 
              value={user.password} 
              onChange={handleInputChange} 
              placeholder="Enter password" 
              className='w-full outline-blue-500 border border-gray-300 rounded-full px-4 py-2 text-base transition-colors focus:border-blue-500'
            />

            <button 
              type='submit' 
              disabled={loading}
              className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full text-center text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Please wait...' : (hasAccount ? "Login" : "Create account")}
            </button>

            <div className='text-center py-2'>
              {hasAccount ? "Don't have an account?" : "Already have an account?"}
            </div>

            <button 
              onClick={loginSignupHandler}
              type="button"
              className='w-full text-blue-500 border border-gray-300 hover:bg-gray-50 font-bold px-4 py-2 rounded-full text-center text-base transition-colors'
            >
              {hasAccount ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
