import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editTitle, editBody } from "../../app/slice/addnoteslice";
import styles from "./addnotecard.module.css";
import saveBtn from "../../icons/diskette.png";
import { Formik } from 'formik';

const AddNoteCard = ({ selectNotes}) => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.addNote.noteTitle);
    const body = useSelector(state => state.addNote.noteBody);

    let data = {
        title: title,
        postbody: body,
    }
    
    return(
        <div className={`${styles.ccontainer}`}>
            <div>
            <form className={`${styles.form}`}>
                <input type="text" placeholder="Title" 
                    onChange={(event)=>{dispatch(editTitle(event.target.value))}} className={`${styles.noteHeader}`} value={title}/>
                <textarea type="text" placeholder="Type here..." 
                    onChange={(event)=>{dispatch(editBody(event.target.value))}}  className={`${styles.noteBody}`} value={body}/>
            </form>
            </div>
            <div className={`${styles.configContainer}`}>
                <img onClick={()=>{selectNotes(data)}} src={saveBtn} alt="save" className={`${styles.configBtnItem}`}/>
            </div>
        </div>
    )
}

export default AddNoteCard;