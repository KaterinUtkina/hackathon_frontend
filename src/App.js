import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import MainPage from "./components/MainPage/MainPage";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper_flex_container">
                <Aside aside={props.state.aside}/>
                <MainPage hackathonCards={props.state.hackathonCards}/>
            </div>
        </div>
    );
}

export default App;
