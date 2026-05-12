import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })

      if (!loginResponse.ok) {
        throw new Error('Identifiants incorrects')
      }
      const loginData = await loginResponse.json()
      const token = loginData.body.token
      localStorage.setItem('token', token)

      const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (!profileResponse.ok) {
        throw new Error('Erreur lors de la récupération du profil')
      }
      const profileData = await profileResponse.json()
      return { token, user: profileData.body }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth', 
  initialState,
  reducers: {

    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
    },
    clearError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.token = action.payload.token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})


export const { logout, clearError } = authSlice.actions
export default authSlice.reducer