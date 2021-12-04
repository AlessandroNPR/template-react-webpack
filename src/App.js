import React from "react";
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return  <Router>
        <Routes >
            <Route exact path="/" element={<h1>Home</h1>}/>
            <Route path="/about" element={<h1>about</h1>}/>
            <Route path="/dashboard" element={<h1>dashboard</h1>}/>
        </Routes>
    </Router>
}

export default App