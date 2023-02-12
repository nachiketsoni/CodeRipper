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

export const loginAsync = (dets) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/login", dets);
        dispatch(login(data));
    } catch (error) {
        dispatch(errors(error.response.data.error));
    }
};

export const signUpAsync = (dets) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/signup", dets);
        dispatch(login(data));
    } catch (error) {
        dispatch(errors(error.response.data.error));
    }
};

export const loadUserAsync = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/getLoggedInUser");
        dispatch(login(data));
    } catch (error) {
        dispatch(errors(error.response.data.message));
    }
};

export const logoutAsync = () => async (dispatch, getState) => {
    try {
        await axios.get("/logout");
        dispatch(logout());
    } catch (error) {
        dispatch(errors(error.response.data.error));
    }
};

export default userSlice.reducer;