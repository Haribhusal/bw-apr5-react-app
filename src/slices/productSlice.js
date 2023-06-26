import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: 0,
    selectedProducts: [],
    showCartDropdown: false

}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addItemToCart: (state) => {
            state.cartItems = state.cartItems + 1
        },
        removeItemFromCart: (state) => {
            state.cartItems = state.cartItems - 1;
        },
        selectProduct: (state, action) => {
            state.selectedProducts = [...state.selectedProducts, action.payload]
            state.showCartDropdown = true
        },
        toggleDropdown: (state, action) => {
            state.showCartDropdown = action.payload;
        }
    }
})

export const { addItemToCart, removeItemFromCart, selectProduct, toggleDropdown } = productSlice.actions

export default productSlice.reducer