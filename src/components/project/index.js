import React from 'react'
import "./style.css"

const Project = () => {
    return (
        <>
            <div className="bioContainer">
                <img className='bioImg' src="assets\images\278186468_2514830141981792_8051652052965352497_n.jpg" alt="Shawn has a big head"></img>
                <div className="bioText">WRITE BIO HERE</div>
            </div>
            <div className="projectsContainer">
                <div className='as1'>
                    <h5>landing page</h5>
                    <a href = "https://github.com/smugsby/Week2" target = "_blank" rel = "noreferrer"><img src='assets\images\templatephonesites.jpg' alt=''></img></a>
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