import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	Image
} from 'react-native';

// import { Mode } from '../constants/enumerables';

// import TopBar from './TopBar';
// import FolderStructure from './FolderStructure';
// import Control from './Control';

import RadialGradient from 'react-native-radial-gradient'

class App extends Component {
	render() {
		// const { mode } = this.props;
		return (
			<View style={styles.container}>
				{/* <Image
					style={{ flex: 1, position: 'absolute' }}
					source={require('../../assets/images/background.png')}
				/> */}
				<RadialGradient style={{ flex: 1, position: 'absolute' }}
												colors={['black', 'green', 'blue', 'red']}
												stops={[0.1, 0.4, 0.3, 0.75]}
												center={[100, 100]}
												radius={200}>
				{/* {Platform.OS === 'ios' &&
					<StatusBar barStyle="default" />
				}
				<TopBar />
				<FolderStructure />
				{mode === Mode.Normal &&
					<Control />
				} */}
				</RadialGradient>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		mode: state.multiple.mode
	};
}

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight
	},
});
