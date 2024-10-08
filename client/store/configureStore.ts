import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import createFilter from "redux-persist-transform-filter";


import authReducer from "../store/authSlice"


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}


const rootReducer = combineReducers({
    authentication: authReducer
})


const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
        devTools: process.env.NODE_ENV !== 'production',
});



export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


