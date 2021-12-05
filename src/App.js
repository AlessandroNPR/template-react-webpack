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
const App = () => {
    const [isOpen, setIsOpen] = useState(true)

    const onChangeMenu = () => {
        setIsOpen(!isOpen)
    }

    return  <Router>
        <Header onChangeMenu={onChangeMenu} isOpen={isOpen}/>
        <div className="main-wrap">
                <Sidebar isOpen={isOpen}/>
                <div className="page" style={{ overflowY: 'auto', marginTop: '60px', left: isOpen ? '250px' : '0'}}>
                    <div style={{padding: '2rem'}}>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/about" element={<h1>about</h1>}/>
                            <Route path="/dashboard" element={<h1>dashboard</h1>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        
    </Router>
}

export default App