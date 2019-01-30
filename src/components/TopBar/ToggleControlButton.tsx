import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import s from '../../styles/TopBar/ToggleControlButton';
import LinearGradient from 'react-native-linear-gradient';

import { ControlView } from '../../constants/enumerables';

import { toggleControlView } from '../../actions'

class ToggleControlButton extends Component {
	render() {
		const { toggleControlView, controlView } = this.props;

		return (
			<View
				style={s.container}

			>
				<View
					style={s.controlViewButton}
				>
					<TouchableOpacity onPress={toggleControlView}>
						<Text style={s.buttonText}>
							Record
						</Text>
					</TouchableOpacity>
					<View style={[s.toggleControlIndicator, controlView !== ControlView.Record && s.invisible]} />
				</View>
				<View
					style={s.controlViewButton}
				>
					<TouchableOpacity onPress={toggleControlView}>
						<Text style={s.buttonText}>
							Playback
						</Text>
					</TouchableOpacity>
					<View style={[s.toggleControlIndicator, controlView !== ControlView.Playback && s.invisible]} />
				</View>
			</View>
		);
	}
}

mapStateToProps = (state) => {
	return {
		toggleText: state.toggle.toggleText,
		controlView: state.toggle.controlView
	}
}

export default connect(mapStateToProps, { toggleControlView })(ToggleControlButton);
