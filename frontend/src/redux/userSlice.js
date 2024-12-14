import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: null
    },
    reducers:{
        //multiple actions
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        getOtherUsers: (state,action)=>{
            state.otherUsers = action.payload
        }
    }
})

export const {getOtherUsers,getUser} = userSlice.actions
export default userSlice.reducer