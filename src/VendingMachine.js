import React from "react";
import { Link } from "react-router-dom"

const VendingMachine = () => {

	return (
		<div>
			<h2>
				<Link to="/soda">Soda</Link>
			</h2>
			<h2>
				<Link to="/chips">Chips</Link>			
			</h2>
			<h2>
				<Link to="/candy">Candy</Link>
			</h2>
		</div>
	)
}

export default VendingMachine