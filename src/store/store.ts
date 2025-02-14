import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;