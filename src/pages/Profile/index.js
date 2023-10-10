import React, { useEffect } from "react";
import styles from "./profile.module.css";
import Me from "../../me.png";
import HomeNav from "../../component/HomeNav";

const Profile = () => {

    const skillz = [
        {
            name: "JavaScript",
            points: 4,
        },
        {
            name: "React JS",
            points: 3,
        },
        {
            name: "HTML",
            points: 4,
        },
        {
            name: "CSS",
            points: 4,
        },
        {
            name: "Software Development",
            points: 5,
        },
        {
            name: "Frontend",
            points: 5,
        },
    ]

    return(
        <React.Fragment>
            <HomeNav/>
            <div className={`${styles.title}`}>
                <h3>Overview</h3>
                <h1>User Profile</h1>
            </div>
            <div className={`${styles.container} flex`}>
                <div className={`${styles.userProfileContainer} flex flex-col`}>
                    <img src={Me}/>
                    <p className={`text-2xl font-semibold p-1`}>Paulo Dionisio</p>
                    <p>Programmer</p>
                    <hr/>
                    <div className={`flex flex-col`}>
                        <h1 className={`text-xl font-semibold`}>Personal Data</h1>
                        <p>Age: 29</p>
                        <p>Gender: Male</p>
                        <p>Address: Cebu, Philippines</p>
                        <p>Contact: +639338299418</p>
                    </div>
                </div>
                <div>
                    <div className={`${styles.accountContent}`}>
                        <div className={`${styles.bio}`}>
                            <h1 className={`${styles.h1}`}>Bio</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu odio suscipit, posuere ligula eget, ullamcorper nisi. 
                                Nulla eget lobortis lorem. Phasellus at tincidunt dolor, a lobortis odio. Curabitur pretium 
                                justo dolor, quis fringilla dui vestibulum vitae. Vivamus et diam in velit porttitor vulputate. 
                                Maecenas ac nisl sit amet tellus faucibus volutpat nec in neque.</p>
                        </div>     
                        <div className={`${styles.skillContent} flex flex-col`}>
                            <h1 className={`${styles.h1}`}>Skill Set</h1>
                            <div className={`${styles.skillz}`}>
                            {
                            skillz.map((val, index)=>{
                                let skill = [];
                                for(let i = 0; i < 5; i++){
                                    if(i < val.points){
                                        skill.push(<div key={i} className={`${styles.dot} ${i==0&&styles.a1} ${i==1&&styles.a2} ${i==2&&styles.a3} ${i==3&&styles.a4} ${i==4&&styles.a5}`}/>);
                                    }
                                    else{
                                        skill.push(<div key={i} className={`${styles.dot}`}/>);
                                    }
                                }
                                return(
                                    <div key={index} className={`${styles.skillSet}`}>
                                        <div className={`${styles.skillBar}`}>
                                            <span className={`${styles.skillName}`}>{val.name}</span>
                                            <div className={`${styles.skillLevel} flex flex-col`}>
                                                {skill}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;