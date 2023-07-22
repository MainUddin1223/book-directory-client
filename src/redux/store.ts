import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import bookReducer from './features/book/bookSlice'
import { api } from './api/apiSlice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        filterData: bookReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
