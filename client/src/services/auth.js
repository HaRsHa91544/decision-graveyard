import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:6900/auth',
    }),
    endpoints: (builder) => ({
        authToken: builder.mutation({
            query: (token) => ({
                url: '/google',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token })
            })
        })
    })
});

export const { useAuthTokenMutation } = authApi;