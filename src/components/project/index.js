import React from 'react'
import "./style.css"

const Project = () => {
    return (
        <>
            <div className="bioContainer">
                <img className='bioImg' src="assets/images/week2.jpg" alt="Huff thumb"></img>
                <div className="bioText">Thank you for stopping by. This is my Portfolio... or at least the start of it.<br>Feel free to click some images below and see some of my really early projects.</br></div>
            </div>
            <div className="projectsContainer">
                <div className='as1'>
                    <h5>landing page</h5>
                    <a href = "https://smugsby.github.io/week1challenge/" target = "_blank" rel = "noreferrer"><img src='assets/images/One Week Challenge.jpg' alt=''></img></a>
                </div>
                <div className='as1'>
                    <h5>landing page</h5>
                    <a href = "https://smugsby.github.io/week1challenge/" target = "_blank" rel = "noreferrer"><img src='assets/images/Robot Gladiator Fight Game.jpg' alt=''></img></a>
                </div>
                <div className='as1'>
                    <h5>landing page</h5>
                    <a href = "https://smugsby.github.io/week1challenge/" target = "_blank" rel = "noreferrer"><img src='assets/images/Smugsby.jpg' alt=''></img></a>
                </div>
                <div className='as1'>
                    <h5>landing page</h5>
                    <a href = "https://smugsby.github.io/week1challenge/" target = "_blank" rel = "noreferrer"><img src='assets/images/week2.jpg' alt=''></img></a>
                </div>
                                
            </div>
        </>
    )
}

export default Project