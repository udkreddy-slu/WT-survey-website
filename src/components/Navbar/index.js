// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/Surveys" activeStyle>
                        Surveys
                    </NavLink>
                    <NavLink to="/annual" activeStyle>
                        Report
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Team
                    </NavLink>
                    {/* <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink> */}
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
