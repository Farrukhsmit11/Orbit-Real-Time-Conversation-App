import axios from "axios"

export const handleLogin = createAsyncThunk(
    "auth/login",
    async (email, password, { rejectWithValue }) => {
        try {
            const response = await axios.post("/login", {
                email,
                password
            })
        } catch (error) {
        }
    }
)