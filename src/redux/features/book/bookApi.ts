/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api/apiSlice";
const token = localStorage.getItem('token')
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
                        Authorization: `Bearer ${token}`,
                    },
                    params: filteredParams,
                };
            },
        }),
        getBookById: builder.query({
            query: (id) => ({
                url: `/book/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        postBooks: builder.mutation({
            query: (data) => ({
                url: '/book/create',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
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
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: data,
            })
        }),
        deleteBookById: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
        })
    })
})
export const { usePostBooksMutation, useGetBooksQuery, useLazyGetBookByIdQuery, useUpdateBookByIdMutation, useDeleteBookByIdMutation } = BookApi