import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const decisionsApi = createApi({
    reducerPath: 'decisionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:6900/decisions',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        getDecisions: builder.query({
            query: () => ({
                url: '/',
                method: 'GET'
            })
        }),
        addDecision: builder.mutation({
            query: (title, assumption, expectedOutcome, confidence, status) => ({
                url: '/add-decision',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title, assumption, expectedOutcome, confidence, status })
            })
        }),
        markOutcome: builder.mutation({
            query: (id, actualOutcome, lessonLearnt, status) => ({
                url: '/mark-outcome',
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ id, actualOutcome, lessonLearnt, status })
            })
        })
    })
});

export const { useGetDecisionsQuery, useAddDecisionMutation, useMarkOutcomeMutation } = decisionsApi;