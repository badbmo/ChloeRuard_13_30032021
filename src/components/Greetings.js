import React from "react";
import "../style/greetings.css";

//redux
import { useSelector } from "react-redux";

/**
 * Greetings Component
 * @returns {JSX} React component
 */

function Greetings() {

	const UserInfos = useSelector((state) => state.getUserReducer);

	return (
		<div className="header">
			<h1>
				Welcome back
				<br />
				{UserInfos.firstName} {UserInfos.lastName}!
			</h1>
			<button className="edit-button">Edit Name</button>
		</div>
	);
}

export default Greetings;
