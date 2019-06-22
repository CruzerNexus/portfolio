import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bulma-components";

import './Header.css'

const HeadBar = () => (
    <Navbar className="Header">
        <div className="Content">
            <h1 className="Name">Greg "Cruzer" Cruz</h1>
            <div>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/Contact"><Button>Contact</Button></Link>
            </div>
        </div>
    </Navbar>
);

export default HeadBar;
