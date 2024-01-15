import { configureStore } from '@reduxjs/toolkit';
import addNoteReducer from '../slice/addnoteslice';
import noteListReducer from '../slice/notelistslice';

export default configureStore({
  reducer: {
    addNote: addNoteReducer,
    noteList: noteListReducer
  }
})