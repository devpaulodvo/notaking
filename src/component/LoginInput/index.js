import React from "react";
import styles from "./LoginInput.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout} from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const LoginInput = () => {
    const clientId = "720741167037-08qiamibjef6719ta3k775nqaep1n0n3.apps.googleusercontent.com";
    const navigate = useNavigate();
    const onLogin = () => {
        navigate("/home");
    }

    const onSuccess = (res) => {
        var decoded = jwt_decode(res.credential);
        console.log("Login success: ", res);
        console.log("Login success: ", decoded);
    }


    return(
        <div className={`${styles.container} rounded-md flex flex-col`}>
            <form  className={`${styles.formInput} flex flex-col justify-center`}>
                <div className={`py-3 flex flex-col`}>
                    <label>Username</label>
                    <input type="text" id="uname" name="uname" className={`${styles.fieldInput} rounded-md`}/>
                </div>
                <div className={`py-3 flex flex-col`}>
                    <label>Password</label>
                    <input type="password" id="pword" name="pword" className={`${styles.fieldInput} rounded-md`}/>
                </div>
                <div className={`py-3 flex flex-col`}>
                    <button onClick={onLogin} type="button" className={`${styles.loginButton} rounded-md`}>Login</button>
                </div>
            </form>
            <GoogleLogin
                className={`${styles.googleLogin}`}
                client_id={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
                auto_select
            />
        </div>
    )
}

export default LoginInput;