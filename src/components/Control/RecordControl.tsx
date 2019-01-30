import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';
import s from '../../styles/Control/RecordControl';
import Icon from '../../styles/Icon';
import colors from '../../styles/colors';

import { startRecording } from '../../actions/index'

class RecordControl extends Component {
	render() {
		const { recording } = this.props;

		return (
			<View style={s.container}>
				{recording &&
					<TouchableOpacity>
						<Icon name='cross' size={40} color={colors.white} />
					</TouchableOpacity>
				}

				<TouchableOpacity style={s.icon} onPress={this.props.startRecording}>
					{this.props.recording ?
						<Image source={require('../../../assets/images/pause.png')} style={{ width: 80, height: 80 }} />
							:
						<Image source={require('../../../assets/images/microphone.png')} style={{ width: 80, height: 80 }} />
					}
				</TouchableOpacity>

				{recording &&
					<TouchableOpacity>
						<Icon name='checkmark' size={40} color={colors.white} />
					</TouchableOpacity>
				}
			</View>
		);
	}
}

mapStateToProps = (state) => {
	return {
		recording: state.toggle.recording
	}
}

export default connect(mapStateToProps, { startRecording })(RecordControl);
