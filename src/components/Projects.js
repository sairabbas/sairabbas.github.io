import React from "react"
import Carousel from "react-bootstrap/Carousel"
import FadeInSection from "./FadeInSection"
import ProjectsData from "../data/ProjectsData";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Projects.css"
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";

export default class Projects extends React.Component {
    render() {
        return (
            <div id="projects">
                <FadeInSection delay={"100ms"}>
                <span className="section-title">
               / software-creations
                </span>
                    <Carousel>
                        {ProjectsData.Carousel.map((item, index) => (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className="caption-bg">
                                    <Carousel.Caption>
                                        <h3>{item.title}</h3>
                                        <p>
                                            {item.desc}
                                            <p className="techStack">
                                                {item.techStack}
                                            </p>
                                        </p>
                                        <a href={item.link} target="_blank">
                                            <GitHubIcon fontSize="medium"/>
                                        </a>
                                    </Carousel.Caption>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </FadeInSection>
                <FadeInSection delay="100ms">
                    <ul className="projects-grid">
                        {ProjectsData.Card.map((item, index) => (
                            <FadeInSection delay={`${index + 1}00ms`}>
                                <li className="projects-card">
                                    <div className="card-header">
                                        <div className="folder-icon">
                                            <FolderOpenRoundedIcon
                                                style={{ fontSize: 35 }}
                                            ></FolderOpenRoundedIcon>
                                        </div>
                                        <a href={item.link} target="_blank">
                                            <GitHubIcon fontSize="medium"/>
                                        </a>
                                    </div>
                                    <div className="card-title">{item.title}</div>
                                    <div className="card-desc">{item.desc}</div>
                                    <div className="card-tech">{item.techStack}</div>
                                </li>
                            </FadeInSection>
                        ))}
                    </ul>
                </FadeInSection>
            </div>
        )
    }
}