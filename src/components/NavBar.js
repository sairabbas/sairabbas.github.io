import React from "react"
import NavBarData from "../data/NavBarData"
import FadeInSection from "./FadeInSection";
import "../styles/NavBar.css"

export default class NavBar extends React.Component {
    render() {
        const iconElements = NavBarData.icons.map(item => {
            return (
                <a href={item.path} target="_blank">
                    {item.icon}
                </a>
            )
        })
        return (
            <div className="navbar">
                <div className="navbar-links">
                    {NavBarData.links.map((item, index) => (
                        <FadeInSection delay={`${index + 1}00ms`}>
                            <a href={item.path}>
                                {item.title}
                            </a>
                        </FadeInSection>
                    ))}
                </div>
                <FadeInSection delay={"500ms"}>
                    <div className="navbar-icons">
                        {iconElements}
                    </div>
                </FadeInSection>
            </div>
        )
    }
}