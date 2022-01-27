import React, { useState } from "react";
import "../style/formLogin.css";

/**
 * FormLogin Component
 * @returns {JSX} React component
 */

function FormLogin() {
	
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrorMessage("")
		if (username ==="" || password ===""){
			setErrorMessage("Please fill the form to connect");
		}
		console.log(username, password);
	};

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
					<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
