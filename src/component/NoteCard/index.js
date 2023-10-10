import React from "react";
import styles from "./notecard.module.css";
import editBtn from "../../icons/edit.png";
import deleteBtn from "../../icons/delete.png";

const NoteCard = () => {
    return(
        <div className={`${styles.ccontainer}`}>
            <h3 className={`${styles.header}`}>
                Test Header
            </h3>
            <p className={`${styles.date}`}>Date Created: 12/25/24</p>
            <p className={`${styles.body}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque et mollis tellus. Mauris ac enim vel purus tristique tincidunt vitae et mauris. 
                Nullam sagittis porttitor dui, eget ullamcorper magna. Morbi eget lacus viverra, suscipit est sed, bibendum augue. 
                Praesent sed mi sodales, congue arcu eget, blandit quam. Vivamus convallis dui et leo tincidunt, iaculis ullamcorper nisl dapibus. 
                Integer faucibus vitae mi eget vulputate. Mauris vitae porttitor neque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque et mollis tellus. Mauris ac enim vel purus tristique tincidunt vitae et mauris. 
                Nullam sagittis porttitor dui, eget ullamcorper magna. Morbi eget lacus viverra, suscipit est sed, bibendum augue. 
                Praesent sed mi sodales, congue arcu eget, blandit quam. Vivamus convallis dui et leo tincidunt, iaculis ullamcorper nisl dapibus. 
                Integer faucibus vitae mi eget vulputate. Mauris vitae porttitor neque.
            </p>
            <div className={`${styles.configContainer}`}>
                <img src={editBtn} alt="edit" className={`${styles.configBtnItem}`}/>
                <img src={deleteBtn} alt="delete" className={`${styles.configBtnItem}`}/>
            </div>
        </div>
    )
}

export default NoteCard;