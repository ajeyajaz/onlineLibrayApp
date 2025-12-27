import { configureStore } from "@reduxjs/toolkit";
import newBookReducer from '../utils/newBookSlice'

const store = configureStore({
    reducer: {
        newBook: newBookReducer,
    }
})

export default store;