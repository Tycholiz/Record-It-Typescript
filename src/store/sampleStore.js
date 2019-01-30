const state = {
	activeFile: '223',
	currentFolder: '1',
	selectMultiple: [],
	toggle: {
		controlView: 'playback',
		recording: false,
	},
	multiple: {
		mode: 'normal',
		selectedUnits: [],
	},
	units: {
		files: {
			'944': {
				id: '944',
				title: 'solo',
				duration: 44356,
				parentId: '22',
				unitType: 'file',
			},
			'253': {
				id: '253',
				title: 'intro idea',
				duration: 22573,
				parentId: '22',
				unitType: 'file',
			},
		},
		folders: {
			'22': {
				id: '22',
				title: 'Chimera',
				dateCreated: 1502500102,
				parentId: null,
				unitType: 'folder',
			},
			'29': {
				id: '29',
				title: 'Complete songs',
				dateCreated: 150237935,
				parentId: '22',
				unitType: 'folder',
			},
		}
	}
}