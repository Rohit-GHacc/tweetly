import axios from 'axios'
// import { USER_API_END_POINT } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getMyProfile} from '../redux/userSlice'
const useGetProfile = async (id)=>{
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMyProfile = async ()=>{
            try {
                const res = await axios.get(`${import.meta.env.VITE_USER_API_END_POINT}/profile/${id}`,{
                    withCredentials: true
                })
                dispatch(getMyProfile(res.data.user))
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyProfile()
        // eslint-disable-next-line
    }, [id])
    
}
export default useGetProfile