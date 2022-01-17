import React from "react";
import "../style/account.css";

/**
 * Account Component
 * @param {string} title account's title
 * @param {string} amount account's amount of money
 * @param {string} description account's description of amount
 * @returns {JSX} React component
 */

function Account(title, amount, description) {
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{title}</h3>
				<p className="account-amount">{amount}</p>
				<p className="account-amount-description">{description}</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}

export default Account;
