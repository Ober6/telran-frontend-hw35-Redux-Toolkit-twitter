import {createSlice} from "@reduxjs/toolkit";
import {randomUserApi} from "../../api/randomUserApi.ts";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "User",
        avatar: "https://png.pngtree.com/png-clipart/20211121/original/pngtree-funny-avatar-vector-icons-png-png-image_6948004.png",
        followers: 0,
        subscribers: 0,
},
    reducers:{
        follow: (state, action) => {
            state.followers += action.payload;
        },
        unfollow: (state, action) => {
             state.followers = Math.max(0, state.followers - action.payload);
        },
        subscribe: (state, action) => {
            state.subscribers += action.payload;
        },
        unsubscribe: (state, action) => {
            state.subscribers = Math.max(0, state.subscribers - action.payload);
        },
        rename: (state, action) => {
            state.name = action.payload;
        },
        changeAvatar: (state, action) => {
            state.avatar = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addMatcher(
            randomUserApi.endpoints.getRandomUser.matchFulfilled,
            (state, { payload }) => {
                // Example assumes API returns an array with results[0].picture.large
                if (payload?.results?.[0]?.picture?.large) {
                    state.avatar = payload.results[0].picture.large;
                }
                if (payload?.results?.[0]?.name) {
                    state.name = `${payload.results[0].name.first} ${payload.results[0].name.last}`;
                }
            }
        );
    },

});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;