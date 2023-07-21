import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = import.meta.env.VITE_BASE_URL

interface IUserState {
    auth: {
        email: string | null
        token: string | null
        message: string | null
        success: boolean
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
        token: null,
        success: false,
        message: ''
    },
    isLoading: false,
    isError: false,
    error: null
}
export const registerApi = createAsyncThunk('/api/auth/signup', async (data: ICredintial) => {
    const url = `${baseURL}/auth/signup`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const responseData = await response.json();
    return responseData;
});
export const loginApi = createAsyncThunk('/api/auth/login', async (data: ICredintial) => {
    const url = `${baseURL}/auth/login`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const responseData = await response.json();
    return responseData;
});
export const authApi = createAsyncThunk('/api/auth', async (data: string) => {
    const url = `${baseURL}/auth`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': data
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
        builder
            .addCase(loginApi.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = null
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                console.log(action.payload)
                state.auth = action.payload
                state.isLoading = false
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message!
            })
            .addCase(registerApi.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = null
            })
            .addCase(registerApi.fulfilled, (state, action) => {
                state.auth = action.payload
                state.isLoading = false
            })
            .addCase(registerApi.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message!
            })
            .addCase(authApi.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.error = null
            })
            .addCase(authApi.fulfilled, (state, action) => {
                state.auth = action.payload
                state.isLoading = false
            })
            .addCase(authApi.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.error = action.error.message!
            })
    }
})
export const { setAuth, setLoading } = authSlice.actions
export default authSlice.reducer