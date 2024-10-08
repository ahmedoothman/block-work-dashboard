import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const initialState = { user: { name: Cookies.get('name') } || null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      // set token in cookie
      if (action.payload.token) {
        Cookies.set('token', action.payload.token, { expires: 1 });
      }
      state.user = action.payload.data.user;
    },
    logout(state) {
      // Cookies.remove('token');
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
