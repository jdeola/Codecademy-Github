import {createSlice} from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name:"search",
    initalState: "",
    reducers: {
        changeActiveSearch: (state, action) => state = action.payload
    };
});

export const { changeActiveSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;
