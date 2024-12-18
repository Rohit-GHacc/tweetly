import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: null,
        profile: null,
        follow: false,
        userRefresh: false
    },
    reducers:{
        //multiple actions
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        getOtherUsers: (state,action)=>{
            state.otherUsers = action.payload
        },
        getMyProfile: (state,action)=>{
            state.profile = action.payload
        },
        setFollow: (state,action)=>{
            state.follow = action.payload
        },
        toggleUserRefresh: (state)=>{
            state.userRefresh = !state.userRefresh
        }
    }
})

export const {getOtherUsers,getUser,getMyProfile,toggleUserRefresh} = userSlice.actions
export default userSlice.reducer