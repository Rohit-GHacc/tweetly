import {createSlice} from '@reduxjs/toolkit'

const tweetSlice = createSlice({
    name:'allTweets',
    initialState:{
        mytweets: [],
        refresh: false,
        filter: 'forYou'
    },
    reducers:{
        getAllTweets: (state,action)=>{
            state.mytweets = action.payload
        },
        toggleRefresh: (state)=>{
            state.refresh = !state.refresh
        },
        setFilter: (state,action)=>{
            state.filter = action.payload
        }
    }
})
export const {getAllTweets,toggleRefresh, setFilter} = tweetSlice.actions
export default tweetSlice.reducer;