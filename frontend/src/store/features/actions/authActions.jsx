import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, post } from "../../../utils/apiMethods"
import { TOKEN } from "../../../utils/constants"

export const handleLogin = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue, dispatch }) => {
        try {
            const response = await post("/login", {
                email,
                password
            })
            localStorage.setItem(TOKEN, response.data?.token)
            dispatch(getProfile())
            return response.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data ?? { message: error.message }
            )
        }
    }
)

export const getProfile = createAsyncThunk(
    "auth/getProfile",
    async (_, { rejectWithValue }) => {
        try {
            const data = await get("/get-profile")
            return data.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data ?? { message: error.message }
            )
        }
    }
)

export const handleSignup = createAsyncThunk(
    "auth/signUp",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const res = await post("/registerUser", { name, email, password });
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data ?? { message: error.message }
            )
        }
    }
)