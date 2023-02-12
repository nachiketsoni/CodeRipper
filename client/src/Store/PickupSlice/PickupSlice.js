import axios from '../../AxiosConfig/axios';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: {
        name: '',
        email: '',
        contact: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        type: '',
        pickupDate: '',
        pickupTime: '',
        pickupInfo: ''
    },
};

export const pickupSlice = createSlice({
    name: "pickup",
    initialState,
    reducers: {
        saveDetails: (state, action) => {
            state.details = action.payload.details;
        }
    },
});

// Action creators are generated for each case reducer function
export const { saveDetails } = pickupSlice.actions;

export default pickupSlice.reducer;