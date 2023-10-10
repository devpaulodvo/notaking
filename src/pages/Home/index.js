import React from "react";
import styles from "./home.module.css";
import HomeNav from "../../component/HomeNav";
import NoteCard from "../../component/NoteCard";
import AddNoteCard from "../../component/AddNoteCard";

const Home = () =>{
    return(
        <React.Fragment>
            <HomeNav/>
            <div className={`${styles.container}`}>
                <div className={`${styles.galleryContainer}`}>
                        <AddNoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                </div>
            </div>
        </React.Fragment>
            
    )
}

export default Home;