import React, { useRef } from "react";
import styles from "./homenav.module.css";
import { useNavigate } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
                <NavLink 
                // onClick={()=>{ navigate("/home");}}
                to={"/home"}
                className={({ isActive }) =>
                    [
                    isActive ? `${styles.active}` : "",
                    ].join(" ")
                }
                >
                    Home
                </NavLink>
                <NavLink 
                // onClick={()=>{navigate("/profile");}}
                to={"/profile"}
                className={({ isActive }) =>
                    [
                    isActive ? `${styles.active}` : "",
                    ].join(" ")
                }
                >
                        Developer
                </NavLink>
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