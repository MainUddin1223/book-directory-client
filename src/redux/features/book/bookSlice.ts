import { createSlice } from "@reduxjs/toolkit";
type IInitialState = {
    filterData: {
        searchTerm: string | null
        genre: string | null
        publicationYear: string | null
    },
    isLoading: boolean
}

const initialState: IInitialState = {
    filterData: {
        searchTerm: '',
        genre: '',
        publicationYear: ''
    },
    isLoading: false
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setFilterData: (state, action) => {
            state.filterData.searchTerm = action.payload
            state.filterData.genre = action.payload
            state.filterData.publicationYear = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})
export const { setFilterData, } = bookSlice.actions;
export default bookSlice.reducer