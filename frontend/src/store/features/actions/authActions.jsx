import { createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../../../utils/apiMethods"

export const handleLogin = createAsyncThunk(
    "auth/login",
    async (email, password, { rejectWithValue }) => {
        try {
            const response = await post("/login", {
                email,
                password
            })
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)