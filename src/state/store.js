import { configureStore } from "@reduxjs/toolkit";
import peliculasReducer from "./peliculas"
const store = configureStore({
    //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        peliculas:peliculasReducer
    }
})

export default store
