import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { editTitle, editBody } from "../../app/slice/addnoteslice";
import styles from "./home.module.css";
import HomeNav from "../../component/HomeNav";
import NoteCard from "../../component/NoteCard";
import AddNoteCard from "../../component/AddNoteCard";

const Home = () =>{
    const dispatch = useDispatch();
    const [noteList, setNotelist] = useState([]);
    const [notePost, setNotePost] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:3001/notes/getall").then((response) =>{
            setNotelist(response.data);
        })
    },[notePost])

        const selectNotes = (initialValues) =>{

            axios.post("http://localhost:3001/notes/getall", initialValues).then((response) =>{
                setNotePost(initialValues);
                dispatch(editTitle(""));
                dispatch(editBody(""));
            })
        }


    return(
        <React.Fragment>
            <HomeNav/>
            <div className={`${styles.container}`}>
                <div className={`${styles.galleryContainer}`}>
                        <AddNoteCard selectNotes={selectNotes}/>
                        {
                            noteList.map((note, index) =>{
                                return <NoteCard key={index} note={note}/>
                            })
                        }
                </div>
            </div>
        </React.Fragment>
            
    )
}

export default Home;