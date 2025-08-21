import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./favorites";


export const store = configureStore({
    reducer:{
        favoritesMeal: favoritesSlice.reducer
    }
})