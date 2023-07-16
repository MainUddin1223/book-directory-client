import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUserState {
    auth: {
        email: string | null
        token: string | null
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null
}
interface ICredintial {
    email: string,
    password: string
}

const initialState: IUserState = {
    auth: {
        email: null,
        token: null
    },
    isLoading: false,
    isError: false,
    error: null
}
export const loginApi = createAsyncThunk('auth/login', async (data: ICredintial) => {
    const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const responseData = await response.json();
    return responseData;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth.email = action.payload
            state.auth.token = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginApi.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.error = null
        })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.auth.email = action.payload
                state.auth.token = action.payload
                state.isLoading = false
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message!
            })
    }
})
export const { setAuth, setLoading } = authSlice.actions
export default authSlice.reducer