import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from '../../styles/Icon';

import s from '../../styles/TopBar/Settings';
import colors from '../../styles/colors';

import { multipleMode } from '../../actions';
import { Mode } from '../../constants/enumerables';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class Settings extends Component {
	_menu = null;

	setMenuRef = ref => {
		this._menu = ref;
	};

	hideMenu = () => {
		requestAnimationFrame(() => {
			this._menu.hide();
		});
	};

	showMenu = () => {
		requestAnimationFrame(() => {
			this._menu.show();
		});
	};

	handleSelectMultiple = () => {
		const { dispatch } = this.props;

		this.hideMenu();
		dispatch(multipleMode(Mode.Select));
	}

	render() {
		return (
			<View style={s.settingsIcon}>
				<TouchableOpacity onPress={this.showMenu} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Menu
						ref={this.setMenuRef}
						button={<Icon name='hamburger-spaced' size={35} color={colors.gray} />}
					>
						<MenuItem onPress={this.hideMenu}>Import</MenuItem>
						<MenuDivider />
						<MenuItem onPress={this.handleSelectMultiple}>Select Multiple</MenuItem>
						<MenuDivider />
						<MenuItem onPress={this.hideMenu}>Cloud Connection</MenuItem>
						<MenuDivider />
						<MenuItem onPress={this.hideMenu}>Encoding</MenuItem>
						<MenuDivider />
						<MenuItem onPress={this.hideMenu}>Close</MenuItem>
					</Menu>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
	};
}

export default connect(mapStateToProps)(Settings);
