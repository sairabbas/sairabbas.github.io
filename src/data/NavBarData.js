import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"

export default {
        links: [
            {
                path: "#home",
                title: "/home"
            },
            {
                path: "#about",
                title: "/about"
            },
            {
                path: "#experience",
                title: "/experience"
            },
            {
                path: "#projects",
                title: "/software-creations"
            }
        ],
        icons: [
            {
                path: "https://www.linkedin.com/in/sairabbas",
                icon: <LinkedInIcon fontSize="large"/>
            },
            {
                path: "https://github.com/sairabbas",
                icon: <GitHubIcon fontSize="large"/>
            },
            {
                path: "mailto:sair_abbas@yahoo.com",
                icon: <EmailRoundedIcon fontSize="large"/>
            }
        ]
}