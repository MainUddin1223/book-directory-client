import { api } from "@/redux/api/apiSlice";

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: ({ data }) => ({
                url: `/signup`,
                method: 'POST',
                body: data

            })
        }),
        login: builder.mutation({
            query: ({ data }) => ({
                url: `/login`,
                method: 'POST',
                body: data

            })
        })
    })
})
export const { useSignupMutation, useLoginMutation } = authApi