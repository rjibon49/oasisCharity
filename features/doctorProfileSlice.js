// doctorProfileSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
};

export const createDoctorProfile = createAsyncThunk(
    "doctorProfile/createDoctorProfile",
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5000/createdoctorprofile', formData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const doctorProfileSlice = createSlice({
    name: "doctorProfile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createDoctorProfile.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(createDoctorProfile.fulfilled, (state) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(createDoctorProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.errorMessage = action.payload ? action.payload.message : "Failed to create doctor profile";
            });
    },
});

export default doctorProfileSlice.reducer;
