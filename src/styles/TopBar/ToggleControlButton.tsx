import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
	container: {
		flex: 4,
		flexDirection: 'row',
		height: 80,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: colors.darkgrey,
	},
	buttonText: {
		fontWeight: '300',
		fontSize: 30,
		color: 'white',
		fontFamily: 'ubuntu'
	},
	controlViewButton: {
		flexDirection: 'column',
	},
	toggleControlIndicator: {
		backgroundColor: 'red',
		height: 10,
		width: '80%',
	},
	invisible: {
		backgroundColor: 'transparent',
	},
});

export default styles;