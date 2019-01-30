/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import store from './store'

import Hello from './components/Hello'

interface Props { }
export default class App extends Component<Props> {
	render() {
		return (
			<Provider store={store}>
				<MenuProvider>
					<App />
				</MenuProvider>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
