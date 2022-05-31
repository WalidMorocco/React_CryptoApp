import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './cartSlice';

export default configureStore({
    reducer: {
        coin: coinReducer
    }
});