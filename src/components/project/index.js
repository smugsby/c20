import React from 'react'
import "./style.css"

const Project = () => {
    return (
        <>
            <div className="bioContainer">
                <img className='bioImg' src="assets/images/week2.jpg" alt="Shawn has a big head"></img>
                <div className="bioText">WRITE BIO HERE</div>
            </div>
            <div className="projectsContainer">
                <div className='as1'>
                    <h5>landing page</h5>
                    <a href = "https://smugsby.github.io/week1challenge/" target = "_blank" rel = "noreferrer"><img src='../Week2/assets/images/One Week Challenge.jpg' alt=''></img></a>
                </div>
                <div className='as1'>
                    <h5>landing page</h5>
                    <img src='assets\images\templatephonesites.jpg' alt=''></img>
                </div>
                <div className='as1'>
                    <h5>landing page</h5>
                    <img src='assets\images\templatephonesites.jpg' alt=''></img>
                </div>
                <div className='as1'>
                    <h5>landing page</h5>
                    <img src='assets\images\templatephonesites.jpg' alt=''></img>
                </div>
                
            </div>
        </>
    )
}

export default Project