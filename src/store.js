import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './coinsSlice';

export default configureStore({
    reducer: {
        coin: coinReducer
    }
});