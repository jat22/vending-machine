import React from "react";
import { Link } from "react-router-dom"

const Chips = () => {
	return(
		<>
			<h1>CHIPS</h1>
			<img src="https://mobileimages.lowes.com/productimages/2554b395-2863-48f3-93b5-fc1b1602a6eb/05403084.jpg" />
			<h2>
				<Link to="/">Back to Vending Machine</Link>
			</h2>
		</>
	)
}

export default Chips