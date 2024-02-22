import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./home.module.css";
import NoteCard from "../../component/NoteCard";
import AddNoteCard from "../../component/AddNoteCard";
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import {addNotes} from '../../app/slice/notelistslice';

const Home = () =>{
    const [notePost, setNotePost] = useState([]);
    const [mySwitch, setMySwitch] = useState(false);
    const dispatch = useDispatch()
    
    const nl = useSelector((state)=>state.noteList.notes);

    const validate = values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        } 
        if (!values.postbody) {
            errors.postbody = 'Required';
          }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
          title: "",
          postbody: "",
        },
        validate,
        onSubmit: values => {
        selectNotes({title: values.title, postbody: values.postbody});
        formik.resetForm();
        },
    });
    
    const mySwe = () => {
        setMySwitch(!mySwitch);
    }

    useEffect(() =>{
        axios.get("http://localhost:3001/notes/getall").then((response) =>{
            dispatch(addNotes(response.data))
        })
    },[notePost, mySwitch])

        const selectNotes = (initialValues) =>{

            axios.post("http://localhost:3001/notes/getall", initialValues).then((response) =>{
                setNotePost(initialValues);
            })
        }

    return(
        <React.Fragment>
            <div className={`${styles.container}`}>
                <div className={`${styles.galleryContainer}`}>
                        <AddNoteCard selectNotes={selectNotes}/>
                        {
                        nl.map((note, index) =>{
                            return <NoteCard mySwe={mySwe} key={index} note={note}/>
                        })
                        }
                </div>
            </div>
        </React.Fragment>
            
    )
}

export default Home;