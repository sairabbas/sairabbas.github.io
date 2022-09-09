import React from "react"
import FadeInSection from "./FadeInSection"
import "../styles/About.css"

export default class About extends React.Component {
    render(){
        const tech_stack = [
            "Javascript ES6+",
            "Java",
            "React.js",
            "C++",
            "Python",
            "HTML & CSS"
        ]
        return(
            <div id="about">
                <FadeInSection delay={"100ms"}>
                <span className="section-title">
                / about me
                </span>
                    <p className="about-desc">
                        I'm a college graduate with a <b>Software Engineering</b> bachelor's degree from
                        <a href="https://www.sjsu.edu/bsse/" target="_blank">
                            {" "}
                            San Jose State University
                        </a>
                        . I am currently seeking full-time <b>Software Development Engineering</b> positions.
                        <br></br>
                        Here are some technologies I have worked with before:
                    </p>
                    <ul className="tech-stack">
                        {tech_stack.map(function (item, index) {
                            return (
                                <FadeInSection delay={`${index + 1}00ms`}>
                                    <li>{item}</li>
                                </FadeInSection>
                            )
                        })}
                    </ul>
                    <p className="about-desc">
                        Outside of work, I'm interested in the developments of science. I'm also a moviegoer (any fans of the MCU out there?) and I play
                        a lot of video games.
                    </p>
                </FadeInSection>
                <FadeInSection delay={"100ms"}>
                    <img className="about-image" src={require('../images/pfp.jpg')}/>
                </FadeInSection>
            </div>
        )
    }
}