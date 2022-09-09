import React from "react"
import FadeInSection from "./FadeInSection"
import FadeIn from 'react-fade-in'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ExperienceData from "../data/ExperienceData"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            className="tab-panel"
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`
    }
}
export default function ExperienceList(){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', height: 300}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {ExperienceData.Experiences.map((item, index) => (
                    <Tab label={item.company} {...a11yProps(index)} />
                ))}
            </Tabs>
            <FadeInSection delay="100ms">
                {ExperienceData.Experiences.map((item, index) => (
                    <TabPanel value={value} index={index}>
                    <span className="experience-title">
                        {item.title + " "}
                    </span>
                        <span className="experience-company">
                        {item.company}
                    </span>
                        <div className="experience-duration">
                            {item.duration}
                        </div>
                        <ul className="experience-desc">
                            {item.desc.map(function (descItem, index) {
                                return (
                                    <FadeIn delay={100} transitionDuration={(index * 500) + 500}>
                                        <li>
                                            {descItem}
                                        </li>
                                    </FadeIn>
                                )
                            })}
                        </ul>
                    </TabPanel>
                ))}
            </FadeInSection>
        </Box>
    )
}