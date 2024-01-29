import { createSlice } from "@reduxjs/toolkit";

const CardDetailsSlice = createSlice({
    name: "details",
    initialState:{
    items:[]
    },
    reducers:{
        addCardDetails:(state,action) =>{
            (state.items.push(action.payload)) 
        },
        removeCardDetails:(state,action) =>{
            (state.items.pop(action.payload)) &&  (state.items.push(action.payload)) 
        },
    }
})

export const {addCardDetails, removeCardDetails} = CardDetailsSlice.actions;

export default CardDetailsSlice.reducer