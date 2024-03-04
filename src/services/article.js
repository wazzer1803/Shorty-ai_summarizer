// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// export const articleApi = createApi({
//     reducerPath: 'articleApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//         prepareHeaders: (headers) => {
//             headers.set('X-RapidAPI-Key', '3ce0a58d48msh8d0f5a68c38ab59p19cb15jsn7b60877c88f6');
//             headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

//             return headers;
//         },
//     }),
//     endpoints: (builder) => ({
//         getSummary: builder.query({
//             // encodeURIComponent() function encodes special characters that may be present in the parameter values
//             // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
//             query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
//         }),
//     }),
// })

// export const { useLazyGetSummaryQuery } = articleApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3ce0a58d48msh8d0f5a68c38ab59p19cb15jsn7b60877c88f6');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi
