import axios from 'axios'
import { TWEET_API_END_POINT } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllTweets} from '../redux/tweetSlice'
import { useSelector } from 'react-redux'
const useGetTweets =  (id)=>{
    const dispatch = useDispatch()
    const {refresh, filter} = useSelector(store=>store.allTweets)
    useEffect(() => {
        const fetchAllTweets = async ()=>{
            try {
                const res = await axios.get(`${import.meta.env.VITE_TWEET_API_END_POINT}/tweets/${id}?filter=${filter}`,{
                    withCredentials: true
                })
                dispatch(getAllTweets(res?.data?.tweets))
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllTweets()
        // eslint-disable-next-line
    }, [id,refresh,filter])
    
}
export default useGetTweets