import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkgrey,
	},
	topLine: {
		flexDirection: 'row',
	},
	text: {
		marginTop: 5,
		marginLeft: 15,
		flex: 1,
		color: colors.white,
		fontFamily: 'ubuntu'
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	clipScroll: {
		flexDirection: 'row',
	},
	time: {
		borderRadius: 1,
		borderWidth: 0.5,
		margin: 10,
		padding: 3,
		color: colors.white
	},
	scroller: {
		borderWidth: 0,
	},
	clipNavigation: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	modalContainer: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainerInner: {
		backgroundColor: colors.darkgrey,
		padding: 17,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		width: 330,
		height: 180,
		marginTop: 180,
	},
	modalHeader: {
		flex: 1,
		fontSize: 25,
		color: colors.white,
		alignSelf: 'flex-start',
		marginBottom: 10,
	},
	breadCrumb: {
		color: colors.white,
		alignSelf: 'flex-start',
		marginLeft: 10,
	},
	modalOptions: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
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
});

export default styles;