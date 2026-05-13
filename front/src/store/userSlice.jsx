import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logout } from './authSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const updateUser = createAsyncThunk(
    'user/modify',
    async ({userName, firstName, lastName}, { rejectWithValue }) => {
        try {
            const userResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({userName, firstName, lastName},)
            })
            if (!userResponse.ok) {
                throw new Error('Identifiants incorrects')
            }
            const userData = await userResponse.json()
            console.log('Réponse API:', userData)
            return userData.body
        }catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


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
            .addCase(updateUser.fulfilled, (state, action) => {
                state.profile = action.payload
            })
    }
})

export default userSlice.reducer
