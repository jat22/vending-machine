import React from "react";
import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
	return (
		<div className="NavBar">
			<NavLink to="/vending">Vending Machine</NavLink>
			<NavLink to="/soda">Soda</NavLink>
			<NavLink to="/chips">Chips</NavLink>
			<NavLink to="/candy">Candy</NavLink>
		</div>

	)
}

export default NavBar