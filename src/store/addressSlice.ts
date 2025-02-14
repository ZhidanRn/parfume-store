import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressState {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
}

const initialState: AddressState = {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddress: (state, action: PayloadAction<AddressState>) => {
            return action.payload;
        },
    },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
