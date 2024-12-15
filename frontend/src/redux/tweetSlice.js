import {createSlice} from '@reduxjs/toolkit'

const tweetSlice = createSlice({
    name:'allTweets',
    initialState:{
        tweets: []
    },
    reducers:{
        getAllTweets: (state,action)=>{
            state.tweets = action.payload
        }
    }
})
export const {getAllTweets} = tweetSlice.actions
export default tweetSlice.reducer;