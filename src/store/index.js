import { configureStore } from '@reduxjs/toolkit';


import { authReducer } from './auth-slice';
import {userReducer} from './users-slice'; 
import { contractsReducer } from './contracts-slice';
const store = configureStore({
  reducer: {  auth: authReducer, users: userReducer, contracts:contractsReducer},
});

export default store;
