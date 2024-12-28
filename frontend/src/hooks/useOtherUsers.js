import axios from 'axios'
// import { USER_API_END_POINT } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getOtherUsers} from '../redux/userSlice'
const useOtherUsers =  (id)=>{
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchOtherUsers = async ()=>{
            try {
                const res = await axios.get(`${import.meta.env.VITE_USER_API_END_POINT}/otherusers/${id}`,{
                    withCredentials: true
                })
                dispatch(getOtherUsers(res.data.otherUsers))
                console.log("other users response: ",res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherUsers()
        // eslint-disable-next-line
    }, [id])
    
}
export default useOtherUsers