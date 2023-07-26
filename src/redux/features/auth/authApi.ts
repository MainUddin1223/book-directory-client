import { api } from "@/redux/api/apiSlice";


const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // getAuth: builder.query({
        //     query: () => ({
        //         url: `/auth`,
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `${token}`,
        //         },

        //     })
        // }),
        signup: builder.mutation({
            query: ({ data }) => ({
                url: `/signup`,
                method: 'POST',
                body: data

            })
        })
    })
})
export const { useSignupMutation } = authApi