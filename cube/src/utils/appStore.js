import {configureStore} from "@reduxjs/toolkit"
import cardReducer from "./CardDetailsSlice";

const appStore = configureStore({
    reducer:{
        details: cardReducer
    }
});

export default appStore;