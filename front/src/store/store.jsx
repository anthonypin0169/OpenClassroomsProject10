import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice.jsx"

const Store = configureStore({
    reducer : {
        auth : authReducer
    }
})

export default Store