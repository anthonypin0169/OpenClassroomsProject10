import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice.jsx"
import userReducer from "./userSlice.jsx"

const Store = configureStore({
    reducer : {
        auth : authReducer,
        user : userReducer
    }
})

export default Store