import React from 'react';
import './App.css';
import {Header} from "./components/layout/Header/Header";
import {Main} from "./components/layout/Main/Main";
import {Skills} from "./components/layout/skills/skills";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
        </>
    );
}

export default App;
