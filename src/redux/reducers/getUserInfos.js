const initialState = {
	firstName: undefined,
	lastName: undefined,
};

const getUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_NAME":
			return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName };
		default:
			return state;
	}
};

export default getUserReducer;
