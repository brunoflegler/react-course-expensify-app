import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1>Expensify</h1>
        <NavLink exact={true} to="/" activeClassName="is-active" > Go home </NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/create" activeClassName="is-active" > Create </NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/edit" activeClassName="is-active" > Edit </NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/help" activeClassName="is-active" > Help </NavLink>&nbsp;&nbsp;&nbsp;
    </header>
)



export default Header;