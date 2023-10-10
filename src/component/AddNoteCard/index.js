import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editTitle, editBody } from "../../app/slice/addnoteslice";

import styles from "./addnotecard.module.css";
import saveBtn from "../../icons/diskette.png";

const AddNoteCard = () => {
    const dispatch = useDispatch();
    
    const title = useSelector(state => state.addNote.noteTitle);
    const body = useSelector(state => state.noteBody);

    return(
        <div className={`${styles.ccontainer}`}>
            <div>
            <form className={`${styles.form}`}>
                <input type="text" placeholder="Title" 
                    onChange={(event)=>{dispatch(editTitle(event.target.value))}} className={`${styles.noteHeader}`} value={title}/>
                <textarea type="text" placeholder="Type here..." 
                    onChange={(event)=>{dispatch(editBody(event.target.value))}}  className={`${styles.noteBody}`} name="postContent" value={body}/>
            </form>
            </div>
            <div className={`${styles.configContainer}`}>
                <img src={saveBtn} alt="save" className={`${styles.configBtnItem}`}/>
            </div>
        </div>
    )
}

export default AddNoteCard;