import React, { useRef } from "react";
import styles from "./homenav.module.css";
// import addBtn from "../../icons/plus.png";
// import homeBtn from "../../icons/home.png";
// import userBtn from "../../icons/user.png";
import { useNavigate } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const HomeNav = () => {
    const navigate = useNavigate();
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`)
    }
    
    return(
        <header>
            <h3>My Portfolio</h3>
            <nav ref={navRef}>
                <a onClick={()=>{ navigate("/home");}}>
                    Home
                </a>
                <a onClick={()=>{navigate("/profile");}}>
                        Developer
                </a>
                <button onClick={showNavBar} className={`${styles.navBtn} ${styles.navClose}`} >
                    <FaTimes/>
                </button>
            </nav>
            <button onClick={showNavBar} className={`${styles.navBtn} `}>
                <FaBars/>
            </button>
        </header>
    )
}

export default HomeNav;