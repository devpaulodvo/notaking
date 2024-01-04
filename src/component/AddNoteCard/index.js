import React from "react";
import styles from "./addnotecard.module.css";
import { useFormik } from 'formik';
import { FaSave } from "react-icons/fa";

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

const AddNoteCard = ({ selectNotes}) => {


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
    
    return(
        <div className={`${styles.ccontainer}`}>
            <form onSubmit={formik.handleSubmit} className={`${styles.form}`}>
                {formik.errors.title && formik.touched.title
                ?
                <input id="title" name="title" type="text" placeholder="Required" 
                    onChange={formik.handleChange} className={`${styles.noteHeader} ${styles.noteHeaderError}`} value={formik.values.title}/>
                : 
                <input id="title" name="title" type="text" placeholder="Title" 
                    onChange={formik.handleChange} className={`${styles.noteHeader}`} value={formik.values.title}/>
                }

                {formik.errors.postbody && formik.touched.postbody 
                    ? 
                    <textarea id="postbody" name="postbody" type="text" placeholder="Required" 
                    onChange={formik.handleChange}  className={`${styles.noteBody} ${styles.noteBodyError}`} value={formik.values.postbody}/> 
                    : 
                    <textarea id="postbody" name="postbody" type="text" placeholder="Type here..." 
                    onChange={formik.handleChange}  className={`${styles.noteBody}`} value={formik.values.postbody}/>}

                <button type="submit" className={`${styles.configBtnItem}`}>
                    {/* <img src={saveBtn} alt="save"/> */}
                    <FaSave size={"1.3em"}/>
                </button>
            </form>
        </div>
    )
}

export default AddNoteCard;