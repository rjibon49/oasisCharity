import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/authSlice";
import doctorProfileReducer from "../features/doctorProfileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctorProfile: doctorProfileReducer
  },
});
