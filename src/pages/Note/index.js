import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./note.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Note = () => {
    return(
        <React.Fragment>
            <NavLink to={"/home"} className={`${styles.containerz}`}>
                <FaArrowLeft className={`${styles.arrowBack}`} size="1.5em"/>
            </NavLink>
            <div className={`${styles.container}`}>
                <Outlet/>
            </div>
        </React.Fragment>
    )
}

export default Note;