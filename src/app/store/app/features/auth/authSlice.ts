import { AuthUser } from '@chatwave/utils';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authUser: AuthUser | null;
}

const initialState: AuthState = {
  authUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      state.authUser = action.payload;
    },
    clearAuthUser: (state) => {
      state.authUser = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthUser, clearAuthUser } = authSlice.actions;

export default authSlice.reducer;
