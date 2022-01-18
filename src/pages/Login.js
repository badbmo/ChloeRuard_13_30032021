import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormLogin from "../components/FormLogin";
import "../style/login.css"

/**
 * Login Page to connect to an user account
 * @returns {JSX} React component
 */

function Login() {
	return (
		<React.Fragment>
			<Header />
			<main className="main bg-dark">
				<FormLogin />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default Login;
