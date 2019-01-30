import {
	TOGGLE_CONTROL_VIEW,
	START_RECORDING,
	START_PLAYING,
	ENTER_FOLDER,
	GET_INITIAL_UNITS,
	SET_ACTIVE_FILE,
	CREATE_FOLDER,
	DELETE_UNIT,
	DELETE_UNITS,
	RENAME_UNIT,
	MODIFY_SELECTED_UNIT,
	MULTIPLE_MODE,
	MOVE_UNITS,
} from "../constants/action-types";

import { UnitType } from '../constants/enumerables';

import uuid from 'uuid/v4'

export const toggleControlView = () => ({
	type: TOGGLE_CONTROL_VIEW,
});

export const startRecording = () => ({
	type: START_RECORDING,
});

export const startPlaying = () => ({
	type: START_PLAYING,
});

export const enterFolder = (currentFolder) => ({
	type: ENTER_FOLDER,
	payload: {
		currentFolder,
	}
});

export const getInitialUnits = (currentFolder) => ({
	type: GET_INITIAL_UNITS,
	payload: {
		currentFolder,
	}
});

export const setActiveFile = (fileId) => ({
	type: SET_ACTIVE_FILE,
	payload: {
		fileId,
	}
});

export const createFolder = (currentFolder) => ({
	type: CREATE_FOLDER,
	payload: {
		id: uuid(),
		title: "New folder",
		dateCreated: Date.now(),
		parentId: currentFolder,
		unitType: UnitType.Folder
	}
});

export const deleteUnit = (unitId, unitType) => ({
	type: DELETE_UNIT,
	payload: {
		unitId,
		unitType,
	}
});

export const renameUnit = (unitId, unitType, newTitle) => ({
	type: RENAME_UNIT,
	payload: {
		unitId,
		unitType,
		newTitle
	}
});

export const moveUnits = (unitIds, currentFolder) => ({
	type: MOVE_UNITS,
	payload: {
		unitIds,
		targetFolder: currentFolder
	}
});

export const deleteUnits = (unitIds) => ({
	type: DELETE_UNITS,
	payload: {
		unitIds,
	}
});

export const multipleMode = (mode) => ({
	type: MULTIPLE_MODE,
	payload: {
		mode
	}
});

export const modifySelectedUnit = (modification, unitId) => ({
	type: MODIFY_SELECTED_UNIT,
	payload: {
		modification,
		unitId
	}
});
