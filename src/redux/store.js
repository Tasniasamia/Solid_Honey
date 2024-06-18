import { configureStore } from "@reduxjs/toolkit";
import productFormSlice from "./actions/productFromSlice"
import categorySlice from "./actions/categoriesSlice"

export const store = configureStore({
    reducer: {
        productsForm: productFormSlice,
        category: categorySlice
    }
})