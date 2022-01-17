import React from "react";
import "../style/accountsList.css";
import { accountsList } from "../utils/const/accountsList";
import Account from "./Account";

/**
 * AccountsList Component displaying all Account Components
 * @returns {JSX} React component
 */

function AccountsList() {
	return (
		<React.Fragment>
			<h2 class="sr-only">Accounts</h2>
			{accountsList.map((account) => (
				<Account title={account.title} amount={account.amount} description={account.description} />
			))}
		</React.Fragment>
	);
}

export default AccountsList;
