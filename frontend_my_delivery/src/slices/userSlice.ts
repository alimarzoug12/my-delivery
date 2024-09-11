// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    firstname: string;
    lastname: string;
    email: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    firstname: localStorage.getItem('firstname') || '',
    lastname: localStorage.getItem('lastname') || '',
    email: localStorage.getItem('email') || '',
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserfirstName: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('firstname', action.payload);
            localStorage.setItem('isLoggedIn', 'true');
        },
        setUserlastName: (state, action: PayloadAction<string>) => {
            state.lastname = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('lastname', action.payload);
            localStorage.setItem('isLoggedIn', 'true');
        },
        setUseremail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('email', action.payload);
            localStorage.setItem('isLoggedIn', 'true');
        },
        logout: (state) => {
            state.firstname = '';
            state.lastname = '';
            state.isLoggedIn = false;
            localStorage.removeItem('firstname');
            localStorage.removeItem('lastname');
            localStorage.setItem('isLoggedIn', 'false');
        },
    },
});

export const { setUserfirstName, setUserlastName,setUseremail, logout } = userSlice.actions;
export default userSlice.reducer;
