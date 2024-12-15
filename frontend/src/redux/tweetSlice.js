import {createSlice} from '@reduxjs/toolkit'

const tweetSlice = createSlice({
    name:'allTweets',
    initialState:{
        mytweets: [],
        refresh: false
    },
    reducers:{
        getAllTweets: (state,action)=>{
            state.mytweets = action.payload
        },
        toggleRefresh: (state)=>{
            state.refresh = !state.refresh
        }
    }
})
export const {getAllTweets,toggleRefresh} = tweetSlice.actions
export default tweetSlice.reducer;