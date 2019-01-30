import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
} from 'react-native';
import s from '../../styles/TopBar/index';

import ToggleControlButton from './ToggleControlButton';
import Settings from './Settings';
import BreadcrumbBar from './BreadcrumbBar';

export default class TopBar extends Component {
	render() {
		return (
			<View style={s.container}>
				<View style={s.topbarUpper}>
					<ToggleControlButton />
					<Settings />
				</View>
				<BreadcrumbBar />
			</View>
		);
	}
}
