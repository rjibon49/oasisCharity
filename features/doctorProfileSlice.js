// doctorProfileSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
  doctorProfile: null,
  allDoctorProfiles: [],
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

export const viewDoctorProfile = createAsyncThunk(
  "doctorProfile/viewDoctorProfile",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/viewdoctorprofile/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateDoctorProfile = createAsyncThunk(
    "doctorProfile/updateDoctorProfile",
    async (formData, thunkAPI) => {
        try {
            const { doctorProfileId, ...restData } = formData;
            const response = await axios.put(`http://localhost:5000/updatedoctorprofile/${doctorProfileId}`, restData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const viewAllDoctorProfiles = createAsyncThunk(
  "doctorProfile/viewAllDoctorProfiles",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/viewalldoctorprofiles');
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
      .addCase(createDoctorProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.doctorProfile = action.payload;
      })
      .addCase(createDoctorProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload ? action.payload.message : "Failed to create doctor profile";
      })
      .addCase(viewDoctorProfile.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(viewDoctorProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.doctorProfile = action.payload;
      })
      .addCase(viewDoctorProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload ? action.payload.message : "Failed to get doctor profile";
      })
      .addCase(updateDoctorProfile.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateDoctorProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.doctorProfile = action.payload;
      })
      .addCase(updateDoctorProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload ? action.payload.message : "Failed to update doctor profile";
      })
      .addCase(viewAllDoctorProfiles.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(viewAllDoctorProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allDoctorProfiles = action.payload;
      })
      .addCase(viewAllDoctorProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload ? action.payload.message : "Failed to get all doctor profiles";
      });
  },
});

export default doctorProfileSlice.reducer;
