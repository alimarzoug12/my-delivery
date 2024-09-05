// src/store/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: localStorage.getItem('firstname') || '',
    lastname: localStorage.getItem('lastname') || '',
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserfirstName: (state, action) => {
            state.firstname = action.payload;
            state.isLoggedIn = true;

            // Persist state in localStorage
            localStorage.setItem('firstname', action.payload);
            localStorage.setItem('isLoggedIn', 'true');
        },
        setUserlastName: (state, action) => {
            state.lastname = action.payload;
            state.isLoggedIn = true;

            // Persist state in localStorage
            localStorage.setItem('lastname', action.payload);
            localStorage.setItem('isLoggedIn', 'true');
        },
        logout: (state) => {
            state.firstname = '';
            state.lastname = '';
            state.isLoggedIn = false;

            // Remove state from localStorage
            localStorage.removeItem('firstname');
            localStorage.removeItem('lastname');
            localStorage.setItem('isLoggedIn', 'false');
        },
    },
});

export const { setUserfirstName, setUserlastName, logout } = userSlice.actions;
export default userSlice.reducer;
