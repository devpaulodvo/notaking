import React from "react";
import styles from "./profile.module.css";
import Me from "../../me.png";
import HomeNav from "../../component/HomeNav";

const Profile = () => {

    const skillz = [{name: "JavaScript",points: 4,},{name: "React JS",points: 4,}, {name: "Node JS",points: 4,},{name: "HTML",points: 4,},{ name: "CSS",points: 4,},{name: "Software Development", points: 4,},{name: "Frontend",points: 4,},{name: "Backend",points: 4,},{name: "MongoDB",points: 3,},{name: "Adobe Photoshop",points: 5,},{name: "Adobe Illustrator",points: 4,},]

    const mailme = () => {
        window.open('mailto:devpaulodvo@gmail.com.com?subject=Hello World!&body=')
    }
    return(
        <React.Fragment>
            <HomeNav/>
            <div className={`${styles.title}`}>
                <h3>Overview</h3>
                <h1>Developer's Profile</h1>
            </div>
            <div className={`${styles.container} flex`}>
                <div>
                    <div className={`${styles.userProfileContainer} flex items-center flex-col lg:flex-row`}>
                        <img src={Me} alt="Profile"/>
                        <div className={`flex flex-col md:mt-4`}>
                            <h1 className={`text-2xl font-semibold`}>Paulo Dionisio</h1>
                            <p className={`text-xl font-semibold`}>Software Developer</p>
                            <p>Age: 29</p>
                            <p>Gender: Male</p>
                            <p>Address: Cebu, Philippines</p>
                            <p>Contact: +639338299418</p>
                            <p>Email: <span onClick={mailme} className={`cursor-pointer font-bold`}>devpaulodvo@gmail.com</span></p>
                        </div>
                    </div>
                    <div className={`${styles.accountContent}`}>
                        <div className={`${styles.bio}`}>
                            <h1 className={`${styles.h1}`}>About Me</h1>
                            <p>Enthusiastic and detail-oriented software developer with a passion for crafting efficient, 
                                maintainable, and scalable code. My journey into the world of programming began with a fascination for 
                                solving complex problems and has evolved into a career marked by continuous learning and innovation.
                                <br/><br/>I have a Bachelor of Science in Information Technology degree from Holy Cross of Davao College. 
                                My academic background has equipped me with a solid foundation in computer science principles and problem-solving techniques.
                                </p>
                        </div> 
                        <div className={`${styles.bio}`}>
                            <h1 className={`${styles.h1}`}>Technical Expertise</h1>
                            <p>Proficient in a variety of programming languages, including but not limited to HTML, CSS, JavaScript, React JS, React Native, Node JS, Php, tailwindcss. 
                                Experienced in full-stack development, with a focus on creating robust and user-friendly web applications. 
                                Skilled in database design and management,and API development.</p>
                        </div> 

                        <div className={`${styles.skillContent} flex flex-col`}>
                            <h1 className={`${styles.h1}`}>Skill Set</h1>
                            <div className={`${styles.skillz}`}>
                            {
                            skillz.map((val, index)=>{
                                let skill = [];
                                for(let i = 0; i < 5; i++){
                                    if(i < val.points){
                                        skill.push(<div key={i} className={`${styles.dot} ${i===0&&styles.a1} ${i===1&&styles.a2} ${i===2&&styles.a3} ${i===3&&styles.a4} ${i===4&&styles.a5}`}/>);
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

                        <div className={`${styles.bio}`}>
                            <h1 className={`${styles.h1}`}>Connect with Me</h1>
                            <p>Feel free to connect with me on <a href="https://www.linkedin.com/in/devpaulodvo/" target="_blank" rel="noreferrer" className={`font-bold text-cyan-600`}>LinkedIn</a>. 
                                I am always open to discussing new opportunities, collaborating on interesting projects, 
                                or simply engaging in conversations about technology and coding.</p>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;