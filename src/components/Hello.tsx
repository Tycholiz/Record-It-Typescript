import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {
	name: string;
	// enthusiasmLevel?: number;
	greeting: string;
}

interface State {
	// enthusiasmLevel: number;
	greeting: string;
}

export default class Hello extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			greeting: props.greeting || "yoyoyo",
		};
	}

	// onIncrement = () =>
	// 	this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
	// onDecrement = () =>
	// 	this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
	// getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

	render() {
		return (
			<View style={styles.root}>
				<Text style={styles.greeting}>
					Hello {this.props.greeting}
				</Text>
			</View>
		);
	}
}

// styles
const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		alignSelf: 'center',
	},
	buttons: {
		flexDirection: 'row',
		minHeight: 70,
		alignItems: 'stretch',
		alignSelf: 'center',
		borderWidth: 5,
	},
	button: {
		flex: 1,
		paddingVertical: 0,
	},
	greeting: {
		color: '#999',
		fontWeight: 'bold',
	},
});