import React from "react";
import "../style/greetings.css";
import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../utils/services/fetchApi";
import { getName } from "../redux/actions";

/**
 * Greetings Component allowing to modify firstName and lastName infos
 * @returns {JSX} React component
 */

function Greetings() {
	const dispatch = useDispatch();
	const UserInfos = useSelector((state) => state.getUserReducer);
	const [isEditing, setIsEditing] = useState(false);
	const [newFirstName, setfirstName] = useState("");
	const [newLastName, setlastName] = useState("");

	const handleSubmit = async () => {
		if (newFirstName === "" && newLastName === "") {
			handleForm();
			return;
		}
		const token = localStorage.getItem("token");
		const dataUserUpdated = await putUser(token, credentials());
		dispatch(getName(dataUserUpdated.body.firstName, dataUserUpdated.body.lastName));
		handleForm();
	};

	const credentials = () => {
		if (newFirstName === "") {
			return { firstName: UserInfos.firstName, lastName: newLastName };
		}
		if (newLastName === "") {
			return { firstName: newFirstName, lastName: UserInfos.lastName };
		}
		return { firstName: newFirstName, lastName: newLastName };
	};

	const handleForm = () => {
		setfirstName("");
		setlastName("");
		setIsEditing(!isEditing);
	};

	const displayGreeting = () => {
		return (
			<React.Fragment>
				<h1>
					Welcome back
					<br />
					{UserInfos.firstName} {UserInfos.lastName}!
				</h1>
				<button className="edit-button" onClick={handleForm}>
					Edit Name
				</button>
			</React.Fragment>
		);
	};

	const displayEditForm = () => {
		return (
			<React.Fragment>
				<h1>Welcome back</h1>
				<div className="edit-wrapper">
					<input
						className="edit-input newfirstname-input"
						type="text"
						id="firstname"
						placeholder={UserInfos.firstName}
						value={newFirstName}
						onChange={(e) => setfirstName(e.target.value)}
					/>
					<input
						className="edit-input newlastname-input"
						type="text"
						id="firstname"
						placeholder={UserInfos.lastName}
						value={newLastName}
						onChange={(e) => setlastName(e.target.value)}
					/>
					<button className="edit-button save-button" onClick={handleSubmit}>
						Save
					</button>
					<button className="edit-button cancel-button" onClick={handleForm}>
						Cancel
					</button>
				</div>
			</React.Fragment>
		);
	};

	return <div className="header">{isEditing ? displayEditForm() : displayGreeting()}</div>;
}

export default Greetings;
