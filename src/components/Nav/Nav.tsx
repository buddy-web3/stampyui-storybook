import React from "react";
import './nav.css'
import {MenuItem} from  '../Menu/MenuItem';
export const NavBar = () =>{
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="logo">AIsafety.info</h1>
                <ul className="menu">
                    <MenuItem
                        primary={true}
                        link="#"
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4765be9befae32c2739bd2c9444b0372d57ef6754df9205de024cee21ce80f3b?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                        text="Articles"
                    />
                    <MenuItem
                        primary={true}
                        link="#"
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6d92c1038a2e95b3f9371f120e22f78d20f757ed372832f0daa5df5d632a4b?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                        text="Stampy chatbot"
                    />
                    <li className="menu-item">
                        <div className="menu-divider"></div>
                    </li>
                    <MenuItem link="#" text="About us" />
                    <MenuItem link="#" text="Help out" />
                </ul>
            </nav>
        </header>
    );
};