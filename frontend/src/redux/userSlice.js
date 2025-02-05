import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user", 
    initialState: {
        user: null,
        otherUsers: null,
        profile: null,
        // follow: false,
        // userRefresh: false
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
        followingUpdate: (state,action)=>{
            if(state.user.following.includes(action.payload)){
                //unfollow
                state.user.following = state.user.following.filter((itemId)=>{
                    return itemId !== action.payload
                })
            }else {
                //follow
                state.user.following.push(action.payload);
            }
        },
        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload
            }
            if(state.profile && state.profile._id === state.user._id) {
                state.profile = {
                    ...state.profile,
                    ...action.payload
                }
            }
        }
        // tried following methods for updating follow/unfollow but didn't work
        // setFollow: (state,action)=>{
        //     state.follow = action.payload
        // },
        // toggleUserRefresh: (state)=>{
        //     state.userRefresh = !state.userRefresh
        // }
    }
})

export const {getOtherUsers, getUser, getMyProfile, followingUpdate, updateUser} = userSlice.actions
export default userSlice.reducer