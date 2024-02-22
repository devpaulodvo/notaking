import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewnote } from "../../helpers/viewnote";
import moment from 'moment';
import { FaRegTrashAlt } from "react-icons/fa";
import { deletenote } from "../../helpers/deletenote";
import styles from "./viewnote.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const ViewNote = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    
    const [note, setNoteDetail] = useState([]);

    const testFunc = async (postId) => {
        let result = await viewnote({postId})
        if (!result){
            navigate('/404');
        }
        setNoteDetail(result);
    }

    const deleteNote = () => {
        deletenote({note});
    }

    useEffect(() =>{
            if(postId){
               testFunc(postId);
            }
    },[])

    return(
        <div className={`${styles.container}`}>
            <h1 className={`${styles.title}`}>
                {note.title}
            </h1>
            <p className={`${styles.date}`}>
                {moment(note.updatedAt).format('MMMM Do YYYY')}
            </p>
            <hr className={`${styles.hori}`}/>
            <p className={`${styles.noteBody}`}>
                {note.postbody}
            </p>
            <NavLink to={"/home"}>
                <FaRegTrashAlt onClick={()=>deleteNote()} className={`${styles.trash}`} size="20px"/>
            </NavLink>
        </div>
       
    )
}

export default ViewNote;