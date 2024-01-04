import React from "react";
import axios from "axios";
import styles from "./notecard.module.css";
import moment from 'moment';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Route, useRoutes, Routes } from 'react-router-dom';

const NoteCard = ({note}) => {
    const onPen = () => {
        console.log("Pen");
    }

    const onTrash = () => {
        axios.post("http://localhost:3001/deletenotes/delete", note).then((response) =>{
            console.log(response);
        })
        .catch(err => {
            if(err.response){
                console.log(err);
            }
        })
    }

    

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
                <FaPen onClick={onPen} className={`${styles.configBtnItem}`}/>
                <FaRegTrashAlt onClick={onTrash} className={`${styles.configBtnItem}`}/>
            </div>
        </div>
    )
}

export default NoteCard;