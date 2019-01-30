import {
	TOGGLE_CONTROL_VIEW,
	START_RECORDING,
	START_PLAYING,
	RECORD,
	PLAYBACK,
	TOGGLE_OPTIONS,
} from "../constants/action-types";

import { Mode, ControlView, UnitType } from '../constants/enumerables';

const initialState = {
	controlView: ControlView.Record,
	recording: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_CONTROL_VIEW:
			return {
				...state,
				controlView: state.controlView === ControlView.Record ? ControlView.Playback : ControlView.Record,
			};
		case START_RECORDING:
			return {
				...state,
				recording: !state.recording
			};
		case START_PLAYING:
			return {
				...state,
				playing: !state.playing
			};
		default:
			return state;
	}
};
export default reducer;
