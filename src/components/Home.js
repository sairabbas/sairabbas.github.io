import React from "react"
import FadeInSection from "./FadeInSection"
import Typist from "react-typist"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"
import "react-typist/dist/Typist.css"
import "../styles/Home.css"

export default class Home extends React.Component {
    render(){
        return (
            <div id="home">
                <Typist avgTypingDelay={120}>
                <span className="home-greeting">
                {"hi, "}
                    <span className="home-name">{"Sair "}</span>
                    {"here."}
                </span>
                </Typist>
                <FadeInSection delay={"200ms"}>
                    <div className="home-subtitle">
                        I create stuff sometimes.
                    </div>
                    <div className="home-desc">
                        I'm a software engineer based in the Bay Area. I have great
                        interest in full-stack development, computer graphics,
                        video game development, and everything in between.
                    </div>
                    <a href="mailto:sair_abbas@yahoo.com" className="home-contact">
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {"  " + "Say hi!"}
                    </a>
                </FadeInSection>
            </div>
        )
    }
}