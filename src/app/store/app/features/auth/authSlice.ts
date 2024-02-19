import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  access_token: string | null;
  refresh_token: string | null;
  authUser: any;
}

const initialState: AuthState = {
  access_token: null,
  refresh_token: null,
  authUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state) => {
      state.access_token = localStorage.getItem('access_token');
    },
    setRefreshToken: (state) => {
      state.refresh_token = localStorage.getItem('refresh_token');
    },
    setAuthUser: (state, action: PayloadAction<number>) => {
      //
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccessToken, setRefreshToken, setAuthUser } =
  authSlice.actions;

export default authSlice.reducer;
