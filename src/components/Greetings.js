import React from "react";
import "../style/greetings.css";

/**
 * Greetings Component
 * @returns {JSX} React component
 */

function Greetings() {
	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				Tony Jarvis!
			</h1>
			<button className="edit-button">Edit Name</button>
		</div>
	);
}

export default Greetings;
