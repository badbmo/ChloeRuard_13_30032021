import React, { useState } from "react";
import "../style/formLogin.css";
import { getToken, getUser } from "../utils/services/fetchApi";

//redux
import { useDispatch, useSelector } from "react-redux";
import { logIn, getName } from "../redux/actions";
import { Navigate } from "react-router-dom";

/**
 * FormLogin Component
 * @returns {JSX} React component
 */

function FormLogin() {
	const dispatch = useDispatch();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const isLogged = useSelector((state) => state.isLoggedReducer);

	const handleSubmit = async (e) => {
		console.log(username, password);
		e.preventDefault();
		setErrorMessage("");
		if (username === "" || password === "") {
			setErrorMessage("Please fill the form to connect");
			return;
		}

		const credentials = { email: username, password: password };

		const dataToken = await getToken(credentials);
		if (dataToken.status === 200) {
			localStorage.setItem("token", dataToken.body.token);
		} else {
			setErrorMessage(dataToken.message);
		}

		const token = localStorage.getItem("token");
		if (token) {
			dispatch(logIn());
			const dataUser = await getUser(token);
			dispatch(getName(dataUser.body.firstName, dataUser.body.lastName));
		}
	};

	if (isLogged) {
		return <Navigate to="/user" />;
	}

	return (
		<section className="sign-in-content">
			<i className="fa fa-user-circle sign-in-icon"></i>
			<h1>Sign In</h1>
			<div className="form__errorMessage">{errorMessage}</div>
			<form onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className="input-remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<button className="sign-in-button">Sign In</button>
			</form>
		</section>
	);
}

export default FormLogin;
