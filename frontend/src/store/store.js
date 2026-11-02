import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/reducers/authReducer"

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})