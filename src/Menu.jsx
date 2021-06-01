import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
        <>
            <div className="menu_style">
                <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                <NavLink exact activeClassName="active_class" to="/Search">Search</NavLink>
                <NavLink exact activeClassName="active_class" to="/Service">Service</NavLink>
                <NavLink exact activeClassName="active_class" to="/About">About</NavLink>
            </div>
        </>
    )
}

export default Menu;