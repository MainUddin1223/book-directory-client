/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "@/redux/api/apiSlice";
// const token = localStorage.getItem('token')
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI1NGRhOTlhYjg4ZGJjOGMyMGJiOTciLCJlbWFpbCI6ImZpcnN0QGdtYWlsLmNvbSIsImlhdCI6MTY4OTYwMzQ5NywiZXhwIjoxNjg5Njg5ODk3fQ.n-ya5nE_dGNHKo1yENbp9D_uhk5ThEFeZ2y10O6GeLo'

const BookApi = api.injectEndpoints({
    endpoints: (builder) => ({
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
        }),
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