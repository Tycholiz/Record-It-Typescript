import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Image,
} from 'react-native';
import Icon from '../../styles/Icon';
import colors from '../../styles/colors';

import Modal from "react-native-modal";
import s from '../../styles/TopBar/BreadcrumbBar';

import { displayBreadCrumb } from '../../utils';

class BreadcrumbBar extends Component {
	state = {
		modalOpen: false
	}
	render() {
		const { state } = this.props;
		const { modalOpen } = this.state;

		return (
			<View>
				<TouchableOpacity style={s.container} onPress={() => this.setState({ modalOpen: true })}>
					<Text style={s.text}>{displayBreadCrumb(state, true)}</Text>
					<View style={s.searchIcon}>
						<Icon name='search' size={22} color={colors.darkgrey} />
					</View>
				</TouchableOpacity>
				{/* <Modal
					isVisible={modalOpen}
				>
					<Text>Hey maw</Text>
				</Modal> */}
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentFolder: state.currentFolder,
		state
	};
}

export default connect(mapStateToProps)(BreadcrumbBar);