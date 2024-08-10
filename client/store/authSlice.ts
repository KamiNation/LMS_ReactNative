import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState } from "@/types/global";

// InitialState
const initialState: authState = {
    isLoggedIn: false,
    isPasswordVisible: false,
    buttonSpinner: false,
    userInfo: {
        email: "adedamolacopy@gmail.com",
        password: "********"
    }
};

export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
        setIsPasswordVisible: (state, action: PayloadAction<boolean>) => {
            state.isPasswordVisible = action.payload;
        },
        setButtonSpinner: (state, action: PayloadAction<boolean>) => {
            state.buttonSpinner = action.payload;
        },
        setUserInfo: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.userInfo = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setIsPasswordVisible, setButtonSpinner, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
