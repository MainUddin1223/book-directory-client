/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api/apiSlice";
const token = localStorage.getItem('token');
const BookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (queries) => {
                const filteredParams = Object.fromEntries(
                    Object.entries(queries).filter(([key, value]) => { key && (value !== null) })
                );  

                return {
                    url: '/book',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `${token}`,
                    },
                    params: filteredParams,
                };
            },
            providesTags: ['books']
        }),
        getMyBooks: builder.query({
            query: () => ({
                url: '/book/my-books',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                }
            }),
            providesTags: ['books']
        }),
        getBookById: builder.query({
            query: (id) => ({
                url: `/book/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`,
                },
            }),
        }),
        postBooks: builder.mutation({
            query: (data) => ({
                url: '/book/create',
                method: 'POST',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
            invalidatesTags: ['books']
        }),
        updateBookById: builder.mutation({
            query: ({ id, data }) => ({
                url: `/book/${id}`,
                method: 'PATCH',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
                body: data,
            }),
            invalidatesTags: ['books']
        }),
        deleteBookById: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                }
            }),
            invalidatesTags: ['books']
        }),
        getWishList: builder.query({
            query: () => ({
                url: `/user/wish-list`,
                method: 'GET',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            }),
            providesTags: ['books']
        }),
        getSavedList: builder.query({
            query: () => ({
                url: `/user/saved-list`,
                method: 'GET',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            }),
            providesTags: ['books']
        }),
        addToSavedList: builder.mutation({
            query: (id) => ({
                url: `/user/saved-list/${id}`,
                method: 'PUT',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['books']
        }),
        addtoWishList: builder.mutation({
            query: (id) => ({
                url: `/user/wish-list/${id}`,
                method: 'PUT',
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['books']
        })
    })
})
export const {
    usePostBooksMutation,
    useGetBooksQuery,
    useGetBookByIdQuery,
    useUpdateBookByIdMutation,
    useDeleteBookByIdMutation,
    useGetMyBooksQuery,
    useAddToSavedListMutation,
    useAddtoWishListMutation,
    useGetSavedListQuery,
    useGetWishListQuery
} = BookApi