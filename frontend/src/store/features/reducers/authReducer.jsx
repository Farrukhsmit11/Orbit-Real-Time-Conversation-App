import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../actions/authActions";

const initialState = {
    isAuthenticated: false,
    loading: false
}

export const authSlice = createSlice({
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(handleLogin.pending, (state) => {
                state.isAuthenticated = false
                state.loading = true
            })
    }
})


export default authSlice.reducer