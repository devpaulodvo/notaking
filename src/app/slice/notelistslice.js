import { createSlice } from '@reduxjs/toolkit';

export const noteListSlice = createSlice({
    name: 'noteList',
    initialState:{
        notes: []
    },
    reducers:{
        addNotes: (state, action) => {
            state.notes = action.payload
        },
    }
})

export const {addNotes} = noteListSlice.actions

export default noteListSlice.reducer
