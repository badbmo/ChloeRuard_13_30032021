import isLoggedReducer from "./isLogged";
import getUserReducer from "./getUserInfos";

import { combineReducers } from "redux";

const allReducers = combineReducers({
	isLoggedReducer,
	getUserReducer,
});

export default allReducers;
