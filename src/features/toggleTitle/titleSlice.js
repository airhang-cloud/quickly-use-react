import { createSlice } from "@reduxjs/toolkit";

export const titleSlice = createSlice({
    name: "title",
    initialState: {
        value: "default"
    },
    reducers: {
        setTitle: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setTitle } = titleSlice.actions
export default titleSlice.reducer