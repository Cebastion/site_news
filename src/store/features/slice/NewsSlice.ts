import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { INewResponse } from "../../../interface/New.interface";

const API_KEY = '5341ced8079646339c9675ce38a36e80'

export const NewsSliceApi = createApi({
    reducerPath: "NewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://newsapi.org/v2/",
    }),
    endpoints: (builder) => ({
        getNews: builder.query<INewResponse, { category?: string; search?: string }>({
            query: ({ category, search }) => {
                // Базовый URL
                let url = 'top-headlines?language=en&pageSize=20';

                // Если есть категория
                if (category) {
                    url += `&category=${category}`;
                }

                // Если есть поисковый запрос
                if (search) {
                    // Для поиска используем endpoint everything
                    url = `everything?q=${encodeURIComponent(search)}&sortBy=publishedAt&language=en&pageSize=20`;
                }

                url += `&apiKey=${API_KEY}`;
                return url;
            },
        }),
    }),
});

export const { useGetNewsQuery } = NewsSliceApi;

