import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credits from "./components/Credits"
import NavBar from "./components/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return (
        <div className="app">
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            <Credits/>
            <NavBar/>
        </div>
    )
}