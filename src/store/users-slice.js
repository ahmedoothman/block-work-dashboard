
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  users: [],      
  
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      
      state.users = action.payload;
    },
   
  },
});


export const userActions = userSlice.actions;


export const userReducer = userSlice.reducer;
