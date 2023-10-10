import { configureStore } from '@reduxjs/toolkit';
import addNoteReducer from '../slice/addnoteslice';

export default configureStore({
  reducer: {
    addNote: addNoteReducer
  }
})