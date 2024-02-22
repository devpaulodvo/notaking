import React, { useRef } from "react";
import styles from "./homenav.module.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { NavLink, useLocation, matchPath } from "react-router-dom";

const HomeNav = () => {
    const navRef = useRef();
    const { pathname } = useLocation();
    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`)
    }

    const setNavlinkClasses = (paths) =>
    paths.some((path) => matchPath(path, pathname))
    ? `${styles.active}`
    : "";
    
    return(
        <header>
            <NavLink to={"/"}>
                <h1>Notes App</h1>
            </NavLink>
            <nav ref={navRef}>
                <NavLink to={"/home"} className={setNavlinkClasses(["/home", "/note/*"])}>
                    Home
                </NavLink>
                <NavLink to={"/profile"} className={setNavlinkClasses(["/", "profile"])}> 
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