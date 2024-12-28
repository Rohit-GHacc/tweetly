import React, { useEffect, useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
// import { USER_API_END_POINT } from '../utils/constant';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser } from '../redux/userSlice'
function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const [user, setUser] = useState({
    name: '', username: '', email: '', password: ''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("updated hasAccount value: ", hasAccount)
  }, [hasAccount])
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]; // Get the first selected file
  //   if (file) {
  //     setUser((prev) => ({ ...prev, profileImage: file }));
  //   }
  // };


  const loginSignupHandler = async function (e) {
    e.preventDefault();
    console.log("value of hasAccount before clicking button:", hasAccount)
    setHasAccount(hasAccount => !hasAccount)
    console.log("value of hasAccount after clicking button:", hasAccount)
    // console.log(`${hasAccount ? "has an account" : "Does not have an account"}`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log("value of hasAccount:", hasAccount);
    if (hasAccount) {
      //LOGIN

      try {
        console.log("Login submitted")
        const res = await axios.post(`${import.meta.env.VITE_USER_API_END_POINT}/login`, { email: user.email, password: user.password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        }
        )
        dispatch(getUser(res?.data?.user))
        console.log(res)
        if (res.data.success) {
          navigate('/')
          toast.success(res.data.message)
        }
      } catch (error) {

        toast.success(error.response.data.message)
        console.log(error)
      }
    }
    else {
      //SIGN UP
      try {
        console.log("Sign up submitted")
        const res = await axios.post(`${import.meta.env.VITE_USER_API_END_POINT}/register`, user, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        })
        console.log(res)
        if (res.data.success) {
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.success(error.response.data.message)
        console.log(error)
      }
    }
    // console.log(user)

  }
  //this is how you change values of a state object by not overwriting the previous state object
  //overwriting the previous state object is like setUser((e)=>{myname: e.target.value})
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => capitalize(word)) // Reuse the `capitalize` function
      .join(' ');
  }
  function capitalize(str) {
    if (!str) return str; // Handle empty strings
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className="flex items-center justify-evenly w-[90%]">
        <div className='w-[30%]'>
          <FaXTwitter size='400px' />
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-7xl my-8'>Happening now</h1>
          <h2 className='font-bold text-4xl my-4'>Join today.</h2>
          <form onSubmit={handleSubmit} className='flex flex-col  w-[50%]'>
            {!hasAccount && (<>

              <input type="text" name='name' value={capitalizeWords(user.name)} onChange={handleInputChange} placeholder="Enter name" className='outline-blue-500 border border-gray-300 rounded-full px-3 py-1 my-1' />
              <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Enter username" className='outline-blue-500 border border-gray-300 rounded-full px-3 py-1 my-1' /> </>)
            }
            <input type="email" name='email' value={user.email} onChange={handleInputChange} placeholder="Enter email" className='outline-blue-500 border border-gray-300 rounded-full px-3 py-1 my-1' />
            <input type="password" name='password' value={user.password} onChange={handleInputChange} placeholder="Enter password" className='outline-blue-500 border border-gray-300 rounded-full px-3 py-1 my-1' />
            {/* {!hasAccount && (
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
                className='outline-blue-500 border border-gray-300 rounded-full px-3 py-1 my-1'
              />
            )} */}
            <button type='submit' className='bg-blue-500 text-white font-bold px-4 py-1 my-2 rounded-full text-center '>{hasAccount ? "Login" : "Create account"}</button>
            <div className='p-1'>{hasAccount ? "Do not have an account?" : "Already have an account? "}</div>
            <button onClick={loginSignupHandler} className='text-blue-500 border border-gray-300 font-bold px-4 py-1 my-2 rounded-full text-center '>{hasAccount ? "Sign Up" : "Login"}</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
