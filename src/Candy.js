import React from "react";
import { Link } from "react-router-dom"

const Candy= () => {
	return(
		<>
			<h1>Candy</h1>
			<img src="https://i5.walmartimages.com/asr/4c76569c-c3e5-4475-85a6-cfdc8d3e5abc.98b230dd9cdd3d713a7e1098b7c6f405.jpeg" />
			<h2>
				<Link to="/">Back to Vending Machine</Link>
			</h2>
		</>
		
	)
}

export default Candy