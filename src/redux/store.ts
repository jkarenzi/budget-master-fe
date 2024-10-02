import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import categoryReducer from './categorySlice'
import expenseReducer from './expenseSlice'


const store = configureStore({
    reducer:{
        auth: authReducer,
        category: categoryReducer,
        expense: expenseReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store