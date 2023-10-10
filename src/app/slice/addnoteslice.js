import { createSlice } from '@reduxjs/toolkit';

export const addNoteSlice = createSlice({
    name: 'addNote',
    initialState:{
        noteTitle: "",
        noteBody: "",
    },
    reducers:{
        editTitle: (state, action) => {
            state.noteTitle = action.payload
        },
        editBody: (state, action) => {
            state.noteBody = action.payload
        }
    }
})

export const {editBody, editTitle} = addNoteSlice.actions

export default addNoteSlice.reducer
