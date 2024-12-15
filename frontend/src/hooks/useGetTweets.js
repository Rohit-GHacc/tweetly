import axios from 'axios'
import { TWEET_API_END_POINT } from '../utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllTweets} from '../redux/tweetSlice'
import { useSelector } from 'react-redux'
const useGetTweets =  (id)=>{
    const dispatch = useDispatch()
    const {refresh} = useSelector(store=>store.allTweets)
    useEffect(() => {
        const fetchAllTweets = async ()=>{
            try {
                const res = await axios.get(`${ TWEET_API_END_POINT}/alltweets/${id}`,{
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
    }, [id,refresh])
    
}
export default useGetTweets