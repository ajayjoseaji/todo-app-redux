import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../slices/todoSlice";

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
})
