import React from "react";
import { Link } from "react-router-dom"

const Soda = () => {
	return(
		<>
			<h1>SODA POP</h1>
			<img src="https://cdn11.bigcommerce.com/s-41e84jdtvf/images/stencil/1280x1280/products/36339/77391/2469__23972.1648417623.jpg?c=1" />
			<h2>
				<Link to="/">Back to Vending Machine</Link>
			</h2>
		</>

	)
}

export default Soda