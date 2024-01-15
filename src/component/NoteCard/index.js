import React from "react";
import axios from "axios";
import styles from "./notecard.module.css";
import moment from 'moment';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NoteCard = ({note, mySwe}) => {

    const onTrash = () => {
        axios.post("http://localhost:3001/deletenotes/delete", note).then((response) =>{
            mySwe();
        })
        .catch(err => {
            if(err.response){
                console.log(err);
            }
        })
    }

    return(
        
            <div className={`${styles.ccontainer}`}>
                <NavLink to={`/note/view/${note.id}`}>
                    <h3 className={`${styles.header}`}>
                        {note.title}
                    </h3>
                <p className={`${styles.date}`}>{moment(note.updatedAt).format('MMMM Do YYYY')}</p>
                <p className={`${styles.body}`}>
                    {note.postbody}
                </p>
                </NavLink>
                <div className={`${styles.configContainer}`}>
                    <NavLink to={`/note/edit/${note.id}`}>
                        <FaPen className={`${styles.configBtnItem}`}/>
                    </NavLink>
                    <FaRegTrashAlt onClick={onTrash} className={`${styles.configBtnItem}`}/>
                </div>
            </div>
    )
}

export default NoteCard;