import { SET_ACTIVE_FILE } from "../constants/action-types";

const reducer = (state = "222", action) => {
	switch (action.type) {
		case SET_ACTIVE_FILE:
			return action.payload.fileId
		default:
			return state;
	}
};
export default reducer;
