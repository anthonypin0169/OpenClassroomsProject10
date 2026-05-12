import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logout } from './authSlice'

const initialState = {
    profile: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.profile = action.payload.user
            })
            .addCase(logout, (state) => {
                state.profile = null
            })
    }
})

export default userSlice.reducer
