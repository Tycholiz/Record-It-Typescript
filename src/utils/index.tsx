import { UnitType } from '../constants/enumerables';

export const getChildrenOfFolder = (state, folderId) => {
	const { folders, files } = state.units;

	const foldersWithinFolder = Object.keys(folders)
		.map((folderId) => folders[folderId])
		.filter((folder) => folder.parentId === folderId)
	const filesWithinFolder = Object.keys(files)
		.map((fileId) => files[fileId])
		.filter((file) => file.parentId === folderId)

	// const allChildrenOfFolder = { ...foldersWithinFolder, ...filesWithinFolder }
	Array.prototype.push.apply(foldersWithinFolder, filesWithinFolder);
	return foldersWithinFolder;
}

export const getUnitsToDelete = (state, selectedUnits, unitType) => {
	unitType = unitType === UnitType.Folder ? 'folders' : 'files';
	const namesOfUnitsToDelete = [];

	for (let unit = 0; unit < selectedUnits.length; unit++) {
		if (selectedUnits[unit] in state.units[unitType]) {
			namesOfUnitsToDelete.push(state.units[unitType][selectedUnits[unit]])
		}
	}
	return namesOfUnitsToDelete;
}

export const displayBreadCrumb = (state, truncate) => {
	let currentFolderId = state.currentFolder
	const { folders } = state.units;

	const LENGTH_LIMIT = 45;
	const path = [];

	let currentParent = folders[currentFolderId]['parentId']
	if (currentParent == null) {
		return "Home";
	}

	do {
		if (folders[currentFolderId]) path.push(folders[currentFolderId].title)
		currentFolderId = currentParent;
		if (currentParent != null) currentParent = folders[currentParent]['parentId']
	} while (currentParent != null)
	path.push("Home")

	let breadcrumbString = ''
	for (let i = path.length - 1; i >= 0; i--) {
		breadcrumbString += path[i]
		if (i > 0) breadcrumbString += ' > '
	}

	if (breadcrumbString.length <= LENGTH_LIMIT || !truncate) {
		return breadcrumbString;
	} else {
		const START_POINT = breadcrumbString.length - LENGTH_LIMIT;
		const amountOverLimit = breadcrumbString.length - LENGTH_LIMIT
		let truncatedBreadcrumbString = breadcrumbString.substring(START_POINT, LENGTH_LIMIT + amountOverLimit);

		return `...${truncatedBreadcrumbString}`;
	}
}

export const duplicateTitles = (units, destinationFolderId, incomingUnitTitle, unitType) => {
	unitType = unitType === UnitType.Folder ? 'folders' : 'files';

	const allUnitIdsWithinFolder = Object.keys(units[unitType])
	const particularUnitsInDestination = allUnitIdsWithinFolder
		.filter(unitId => units[unitType][unitId].parentId === destinationFolderId)

		.map((id) => {
			return units[unitType][id].title
		});

	return particularUnitsInDestination.includes(incomingUnitTitle);
}

export const childrenOfParent = (state, folderId) => {
	const { folders, files } = state.units;

	const foldersWithinFolder = Object.keys(folders)
		.map((folderId) => folders[folderId])
		.filter((folder) => folder.parentId === folderId)
		.map((obj) => obj.id)

	const filesWithinFolder = Object.keys(files)
		.map((fileId) => files[fileId])
		.filter((file) => file.parentId === folderId)
		.map((obj) => obj.id)

	Array.prototype.push.apply(foldersWithinFolder, filesWithinFolder);
	return foldersWithinFolder;
}

export const getChildrenOfAllParents = (state, selectedUnits) => {
	const childrenToDelete = [];

	for (let parent of selectedUnits) {
		let children = childrenOfParent(state, parent);
		childrenToDelete.push.apply(childrenToDelete, children)
	}
	return childrenToDelete;
}

export const timeConverter = (timeStamp) => {
	var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date = new Date(timeStamp);
	var year = date.getFullYear();
	var month = months_arr[date.getMonth()];
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();

	var timeString = month + ' ' + day + ', ' + year + ' (' + hours + ':' + minutes.substr(-2) + ')';
	return timeString;
}
