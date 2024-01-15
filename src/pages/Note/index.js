import React from "react";
import HomeNav from "../../component/HomeNav";
import { Outlet, useParams } from "react-router-dom";
import styles from "./note.module.css";

const Note = () => {
    return(
        <React.Fragment>
            <HomeNav/>
            <div className={`${styles.container}`}>
                <Outlet/>
            </div>
        </React.Fragment>
    )
}

export default Note;