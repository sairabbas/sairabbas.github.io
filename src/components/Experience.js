import React from "react"
import ExperienceList from "./ExperienceList";
import FadeInSection from "./FadeInSection"
import "../styles/Experience.css"

export default class Experience extends React.Component {
    render() {
        return (
            <div id="experience">
                <FadeInSection delay="100ms">
                    <span className="section-title">
                        / experience
                    </span>
                    <ExperienceList/>
                </FadeInSection>
            </div>
            )
    }
}