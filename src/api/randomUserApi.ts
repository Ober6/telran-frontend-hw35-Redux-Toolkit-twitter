import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type RandomUser = {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    location: {
        city: string;
        country: string;
    };
};

export const randomUserApi = createApi({
    reducerPath: "randomUserApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }),
    endpoints: (builder) => ({
        getRandomUser: builder.query({
            query: () => "",
        }),
    }),
});

export const { useGetRandomUserQuery } = randomUserApi;
