
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  contracts: [],      
  
};

const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setContracts(state, action) {
      
      state.contracts = action.payload;
    },
   
  },
});


export const contractsActions = contractsSlice.actions;


export const contractsReducer = contractsSlice.reducer;
