import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice.ts";
import {randomUserApi} from "../api/randomUserApi.ts";

export const store = configureStore ({
    reducer: {
        user: userReducer,
        randomUserApi: randomUserApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(randomUserApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;