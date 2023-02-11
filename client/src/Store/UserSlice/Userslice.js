import axios from '../../AxiosConfig/axios';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        errors: (state, action) => {
            state.error = action.payload;
            state.user = null;
            state.isAuthenticated = false;
        },
        logout: (state) => {
            state.error = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, errors, logout } = userSlice.actions;