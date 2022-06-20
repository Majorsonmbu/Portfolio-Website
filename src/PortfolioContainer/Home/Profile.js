import React from 'react'
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="profile-header">
                            <span className="profile-heading">
                                {" "}
                                 ABOUT ME 
                            </span>
                        </div>

                        <div className="colz-icon">
                        <a href='https://www.linkedin.com/in/mbulelo-ngema-731930194'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>

                        <a href='https://www.instagram.com/_majorsonmbu/'>
                             <i className='fa fa-instagram'></i>
                        </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Mbulelo</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={ [
                                        "Enthusiastic Software Dev 😎️💻️", 
                                        1000,
                                        "Software Engineer 💻️😎️", 
                                        1000,
                                        "Android Mobile App Dev 📲️📱️🎮️",
                                         1000,
                                        "Aspiring React/React Native Dev 🌐️🎨️👨‍🎨️", 
                                        1000       
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                UNIVERSITY OF CAPE TOWN - Final Year Computer Science And Computer Engineering
        
                            </span>
                        </span>
                    </div>

                    <div className="skills">
                        <div className="java">  </div>
                        {" "}
                       
                    </div>


                    <div className="profile-options">
                        <a href='https://www.linkedin.com/in/mbulelo-ngema-731930194'>
                            <button className="btn primary-btn">
                                Hire Me{" "}
                            </button>
                        </a>
                        
                        <a href="Mbulelo's Resume.pdf" download="Mbulelo Mbulelo's Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume </button>
                        </a>
                    </div>
                </div>

                <span className="contact">
                    Contact: +27604214574  
                     Email: mbulelohlathi.24@gmail.com
                </span>

                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>

            </div>
        </div>
    );
}