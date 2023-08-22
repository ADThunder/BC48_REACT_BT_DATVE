import {configureStore} from "@reduxjs/toolkit";
import { datVeReducer } from "./reducer/datVeReducer";

export const store = configureStore({
    reducer : {
        datVeReducer,
    },
})