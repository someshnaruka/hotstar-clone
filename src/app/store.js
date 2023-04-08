import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import  useReducer  from "../features/userSlice";
import movieReducer from "../features/movies/movieSlice";

 export default configureStore({  //setting up redux store

    reducer:{
        user:useReducer,
        movie:movieReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
 });