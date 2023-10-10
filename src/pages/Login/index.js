import React from "react";
import styles from "./login.module.css";
import LoginInput from "../../component/LoginInput";

const Logins = () => {
    return(
        <div className={`${styles.container}`}>
            <LoginInput/>
        </div>
    )
}

export default Logins;