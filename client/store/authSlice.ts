import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authState } from "@/types/global";

// InitialState
const initialState: authState = {
    isLoggedIn: false,
    isPasswordVisible: false,
    buttonSpinner: false,
    userInfo: {
        name: "kamidemy",
        email: "adedamolacopy@gmail.com",
        password: "!password"
    },
    required: "",
    error: {
        password: ""
    },
    code: Array(4).fill("")
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
        setUserInfo: (state, action: PayloadAction<{name: string; email: string; password: string }>) => {
            state.userInfo = action.payload;
        },
        setRequired: (state, action: PayloadAction<string>) => {
            state.required = action.payload;
        },
        setError: (state, action: PayloadAction<{password: string}>) => {
            state.error = action.payload
        },
        setCode: (state, action: PayloadAction<string[]>) => {
            state.code = action.payload 
        }
    }
});

// Action creators are generated for each case reducer function
export const { setCode, setError, setRequired, setIsLoggedIn, setIsPasswordVisible, setButtonSpinner, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
