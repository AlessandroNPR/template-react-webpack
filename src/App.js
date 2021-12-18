import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
} from "react-router-dom";
import Header from './Components/Header'
import Home from './Pages/Home'
import {
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer"
import './assets/css/sidebar.css'
import ResizeDetector from "react-resize-detector";
const App = () => {
    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(getWidth())
    const onChangeMenu = () => {
        setIsOpen(!isOpen)
    }
    const getClass = () => {
        if (width > 700) {
            return isOpen ?  "page moveToRightPage" :  "page moveToLeftPage"
        } else {
            return "content-page page"
        }
    }

    const getClassContainer = () => {
        if (width > 700) {
            return ""
        } else {
            return "main-wrap"
        }
    }

    const getClassSidebar = () => {
        if (width <= 700) {
            return isOpen ? "relative-sidebar moveToRight " : "relative-sidebar moveToLeft "
        } else return ""
    }

    const onResize = (width) => setWidth(width);
    return  <Router>
        <ResizeDetector handleWidth onResize={onResize} />
        <Header onChangeMenu={onChangeMenu} width={width} isOpen={isOpen}/>
        <div >
            {width > 700 && <Sidebar width={width} isOpen={isOpen}/>}
                <div style={{ overflowY: 'auto', marginTop: '60px', boxShadow: width > 700 ? '10px 0 5px -2px rgb(57 63 72 / 10%) inset' : 0}} className={getClass()}>

                    <div style={{minHeight: '60.6vh',padding: '2rem'}}>
                        <Routes>
                            <Route exact path="/" element={<Home width={width}/>}/>
                            <Route path="/about" element={<h1>about</h1>}/>
                            <Route path="/dashboard" element={<h1>dashboard</h1>}/>
                        </Routes>
                    </div>
                    <Footer isOpen={isOpen} width={width}/>
                </div>
            {width <= 700 && <div className={getClassSidebar()}>
                <Sidebar width={width} isOpen={isOpen}/>
            </div>}
            </div>
        
    </Router>
}

export default App