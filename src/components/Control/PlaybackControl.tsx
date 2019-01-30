import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import Modal from "react-native-modal";
import Icon from '../../styles/Icon';
import colors from '../../styles/colors';

import s from '../../styles/Control/PlaybackControl';

import { UnitType } from '../../constants/enumerables';

import { startPlaying, deleteUnit, setActiveFile, deleteUnits } from '../../actions/index'

class PlaybackControl extends Component {
	state = {
		deleteConfirmation: false,
	};

	handleOpenModal = () => {
		this.setState(() => {
			return {
				deleteConfirmation: true
			};
		});
	};

	handleCloseModal = () => {
		this.setState(() => {
			return {
				deleteConfirmation: false
			};
		});
	}

	handleDelete = (unitId) => {
		const { dispatch } = this.props;

		dispatch(setActiveFile(null));
		dispatch(deleteUnit(unitId, UnitType.File));

		this.handleCloseModal();
	};

	handlePlayButton = () => {
		const { dispatch } = this.props;
		dispatch(startPlaying());
	};

	render() {
		const { playing, activeFile, title } = this.props;
		return (
			<View style={s.container}>
				{activeFile ? (

					<View>
						<View style={s.topLine}>
							<Text style={s.text}>{title}.mp3</Text>
							<View style={s.iconContainer}>
								<TouchableOpacity onPress={() => this.handleOpenModal()}>
										<Icon name='garbage' size={25} color={colors.white} />
								</TouchableOpacity>
							</View>
						</View>

						<View style={s.clipScroll}>
							<Text style={s.time}>
								00:10
							</Text>
							<Text style={[s.time, s.scroller]}>
								-----------O-----------------------------------
							</Text>
							<Text style={s.time}>
								00:34
							</Text>
						</View>

						<View style={s.clipNavigation}>
							<TouchableOpacity>
								<Icon name='fastbackward' size={32} color={colors.white} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.handlePlayButton()}>
								{playing ?
									<Image source={require('../../../assets/images/play.png')} style={{ width: 70, height: 70 }} />
										:
									<Image source={require('../../../assets/images/pause.png')} style={{ width: 70, height: 70 }} />
								}
							</TouchableOpacity>
							<TouchableOpacity>
								<Icon name='fastforward' size={32} color={colors.white} />
							</TouchableOpacity>
						</View>

					</View>
					)	: (
					<View>
						<Text>Please select an audio clip</Text>
					</View>
					)
				}

				{/* DELETE CONFIRMATION MODAL */}
				<Modal
					onBackdropPress={() => this.setState({ deleteConfirmation: false })}
					isVisible={this.state.deleteConfirmation}
					style={s.modalContainer}
					avoidKeyboard={true}
				>
					<View style={s.modalContainerInner}>
						<Text style={[s.modalHeader, { fontSize: 20 }]}>Are you sure you want to delete this clip?</Text>
						<Text style={s.breadCrumb}>{title}</Text>
						<View style={s.modalOptions}>
							<TouchableOpacity
								onPress={() => {
									this.handleCloseModal();
								}}
							>
								<Text style={[s.modalOption, s.cancelOption]}>CANCEL</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => {
									this.handleDelete(activeFile)
								}}
							>
								<Text style={[s.modalOption, s.confirmOption]}>CONFIRM</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

mapStateToProps = (state) => {
	return {
		playing: state.toggle.playing,
		activeFile: state.activeFile,
		title: state.activeFile && state.units.files[state.activeFile].title,
	};
};

export default connect(mapStateToProps)(PlaybackControl);
