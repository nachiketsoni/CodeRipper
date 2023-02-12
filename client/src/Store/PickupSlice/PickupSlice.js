import axios from "../../AxiosConfig/axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    type: "",
    pickupDay: "",
    pickupTime: "",
    pickupInfo: "",
  },
  loading: false,
};

export const pickupSlice = createSlice({
  name: "pickup",
  initialState,
  reducers: {
    saveDetails: (state, action) => {
      state.details = action.payload;
    },
    errors: (state, action) => {
      state.error = action.payload;
      state.user = null;
      state.isAuthenticated = false;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveDetails, errors, loading } = pickupSlice.actions;

export const createPickupAsync = (dets) => async (dispatch, getState) => {
  try {
    dispatch(loading(true));
    const { data } = await axios.post("/createRequest", dets);
    dispatch(loading(false));
  } catch (error) {
    dispatch(errors(error.response.data.error));
    dispatch(loading(false));
  }
};

export default pickupSlice.reducer;
