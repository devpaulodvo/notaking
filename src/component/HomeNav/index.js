import React from "react";
import styles from "./homenav.module.css";
// import addBtn from "../../icons/plus.png";
import homeBtn from "../../icons/home.png";
import userBtn from "../../icons/user.png";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
    const navigate = useNavigate();

    return(
        <div className={`${styles.container}`}>
                <div className={`${styles.navList}`}>
                    Welcome,<span className={`${styles.name}`}>&nbsp;Paulo Dionisio</span>
                </div>
                <div className={`${styles.navList}`}>
                    <img onClick={()=>{
                        navigate("/home");
                    }} src={homeBtn} alt="home" className={`${styles.addBtn}`}/>
                </div>
                <div className={`${styles.navList}`}>
                    <img onClick={()=>{
                        navigate("/profile");
                    }} src={userBtn} alt="user" className={`${styles.addBtn}`}/>
                </div>
        </div>
    )
}

export default HomeNav;