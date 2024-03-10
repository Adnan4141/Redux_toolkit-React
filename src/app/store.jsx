import { configureStore } from "@reduxjs/toolkit";
// import counterReducer  from "../feature/counter/CounterReducer";
import postReducer from "../feature/posts/postSlice";

const store = configureStore({
    reducer:{
        // counter:counterReducer,
        posts:postReducer,
        
    }
});

export default store;