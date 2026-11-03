import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, handleSignup } from "../actions/authActions";

const initialState = {
    isAuthenticated: false,
    loginLoading: false,
    error: null,
    signUpLoading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(handleLogin.pending, (state) => {
                state.isAuthenticated = false;
                state.loginLoading = true;
                state.error = null;
            })

            .addCase(handleLogin.fulfilled, (state) => {
                state.isAuthenticated = true;
                state.loginLoading = false;
                state.error = null;
            })

            .addCase(handleLogin.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.loginLoading = false;
                state.error = action.payload ?? action.error.message;
            });

        builder
            .addCase(handleSignup.pending, (state) => {
                state.signUpLoading = true;
                state.error = null;
            })

            .addCase(handleSignup.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.signUpLoading = false;
                state.error = null;
            })

            .addCase(handleSignup.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.signUpLoading = false;
                state.error = action.payload ?? action.error.message;
            }); 
    },
});

export default authSlice.reducer;
