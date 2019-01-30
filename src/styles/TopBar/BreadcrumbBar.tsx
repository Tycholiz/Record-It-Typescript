import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: 35,
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 20,
		margin: 7,
	},
	text: {
		flex: 1,
		marginLeft: 10,
		fontFamily: 'ubuntu',
	},
	searchIcon: {
		marginRight: 10,
	},
	modalMask: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
	modalContainer: {
		// flex: 1,
		flexDirection: 'column',
		flexWrap: 'wrap',
		alignItems: 'center',
		marginHorizontal: 43,
		marginTop: 240,
		marginBottom: 240,
		borderRadius: 4,
		backgroundColor: '#2B2B2B',
	},
	modalHeader: {
		flex: 1,
		fontSize: 25
	},
	modalInput: {
		flex: 1,
	},
	modalOptions: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	modalOption: {
	},
	renameOption: {
		borderRadius: 4,
		backgroundColor: 'teal',
	},
	icon: {
		justifyContent: 'center',
	},
	barsIcon: {
		alignSelf: 'flex-end',
		marginRight: 20,
		marginTop: 80,
	},
});

export default styles;