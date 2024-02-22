import React from "react";
import styles from "./notfound.module.css";

const NotFound = () => {
    return(
        <React.Fragment>
            <div className={`${styles.container}`}>
                <div className={`${styles.content}`}>
                    <h1>Brrrrrr...</h1>
                    <p>The page you are looking for is not found. Please go back!</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NotFound;