import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import Header from "./Coponents/Header/Header";
import Profile from "./Coponents/Profile/Profile";
import Main from './Coponents/Body/Main/Main';
import {BrowserRouter, Route} from "react-router-dom";
import Play from './Coponents/Body/Play/Play';



function App() {
    return(
        <BrowserRouter>
        <div>
            <Header />
            <Route exact path='/' component = {Main} />
            <Route path='/Play' component={Play} />
            <Profile />

        </div>
        </BrowserRouter>
    )
}


export default App;
