// src/store/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstname: '',
        lastname: '',
        isLoggedIn: false,
    },
    reducers: {
        setUserfirstName: (state, action) => {
            state.firstname = action.payload;
            state.isLoggedIn = true;
        },
        setUserlastName: (state, action) => {
           
            state.lastname = action.payload;
            state.isLoggedIn = true;
         
        },
        logout: (state) => {
            state.firstname = '';
            state.lastname = '';
            state.isLoggedIn = false;
        },
    },
});

export const { setUserfirstName, setUserlastName,logout } = userSlice.actions;
export default userSlice.reducer;
