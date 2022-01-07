import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="logo">
                        <a href="/">
                            <img
                                src="https://knackroot.com/wp-content/uploads/2019/07/logo.png"
                                alt=""
                            />
                        </a>
                    </div>
                    
                    <div className="navlinks">
                        <ul>
                            <li>
                                <a href="/">Explore</a>
                            </li>
                            <li>
                                <a href="#service">Stats</a>
                            </li>
                            <li>
                                <a href="about">Resource</a>
                            </li>
                            <li>
                                <a href="#contact">Create</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
