import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		flexGrow: 1,
	},
	innerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap',
	},
	navButtonWrapper: {
		flexDirection: 'row',
		marginVertical: 3,
		height: 40,
	},
	navButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 4,
		borderRadius: 5,
		backgroundColor: colors.darkgrey,
	},
	navButtonText: {
		fontSize: 20,
		fontFamily: 'ubuntu-bold',
	},
	upOneLevel: {
		color: colors.tertiaryColor,
	},
	newFolder: {
		color: colors.secondaryColor,
	},
	selectMultipleTopBar: {
		position: 'absolute',
		top: -125,
		right: 0,
		bottom: 0,
		left: 0,
		height: 80,
		backgroundColor: colors.darkgrey
	},
	containerMultipleButtonRow: {
		flex: 1.5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	selectMultipleUnitButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		margin: 3,
	},
	selectMultipleText: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 23,
		textShadowColor: 'rgba(0, 0, 0, 0.65)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 8
	},
	modalContainer: {
		flex: 0,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	modalContainerInner: {
		backgroundColor: colors.darkgrey,
		padding: 12,
		// justifyContent: 'center',
		alignItems: 'flex-start',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		width: 330,
		height: 300,
		marginTop: 150,
	},
	modalHeader: {
		// flex: 1,
		fontSize: 25,
		color: colors.white,
		// alignSelf: 'flex-start',
		marginBottom: 13,
	},
	unitTypeListSection: {
		marginTop: 5,
	},
	unitTypeTitle: {
		color: colors.white,
		// alignSelf: 'flex-start',
		// marginLeft: 10,
	},
	deleteListContainer: {
		flex: 1,
		flexDirection: 'column',
		flexGrow: 1,
		width: '100%',
	},
	deleteListContainerInner: {
		// flexDirection: 'row',
		// justifyContent: 'space-evenly',
		flexWrap: 'wrap',
	},
	unitToDelete: {
		color: colors.secondaryColor,
		marginLeft: 12,
	},
	modalOptions: {
		// flex: 1,
		flex: 0,
		flexDirection: 'row',
		// justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		marginTop: 10,
	},
	modalOption: {
		fontSize: 22,
		margin: 4,
	},
	confirmOption: {
		borderRadius: 4,
		color: colors.secondaryColor,
	},
	cancelOption: {
		borderRadius: 4,
		color: colors.primaryColor,
	},
	unitIcon: {
		width: 50,
		height: 40,
		marginTop: 10,
	},
});

export default styles;