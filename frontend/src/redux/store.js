import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import tweetSlice from './tweetSlice'
const store = configureStore({
    reducer:{
        //actions
        allTweets: tweetSlice,
        user: userSlice,
    }
})

export default store