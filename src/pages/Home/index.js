import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./home.module.css";
import HomeNav from "../../component/HomeNav";
import NoteCard from "../../component/NoteCard";
import AddNoteCard from "../../component/AddNoteCard";
import { useFormik } from 'formik';

const Home = () =>{
    const [noteList, setNotelist] = useState([]);
    const [notePost, setNotePost] = useState([]);

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

    useEffect(() =>{
        axios.get("http://localhost:3001/notes/getall").then((response) =>{
            setNotelist(response.data);
        })
    },[notePost])

        const selectNotes = (initialValues) =>{

            axios.post("http://localhost:3001/notes/getall", initialValues).then((response) =>{
                setNotePost(initialValues);
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