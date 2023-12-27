import React from "react";
import styles from "./notecard.module.css";
import editBtn from "../../icons/edit.png";
import deleteBtn from "../../icons/delete.png";
import moment from 'moment';

const NoteCard = ({note}) => {
    return(
        <div className={`${styles.ccontainer}`}>
            <h3 className={`${styles.header}`}>
                {note.title}
            </h3>
            <p className={`${styles.date}`}>{moment(note.updatedAt).format('MMMM Do YYYY')}</p>
            <p className={`${styles.body}`}>
                {note.postbody}
            </p>
            <div className={`${styles.configContainer}`}>
                <img src={editBtn} alt="edit" className={`${styles.configBtnItem}`}/>
                <img src={deleteBtn} alt="delete" className={`${styles.configBtnItem}`}/>
            </div>
        </div>
    )
}

export default NoteCard;