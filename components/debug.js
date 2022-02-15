import React, { useState } from 'react';
import styles from '../styles/addScheduleStyle';
import { Text, View, TouchableOpacity } from 'react-native';
import { getData } from '../modules/file-system';
import { days } from './keyHolder';

export default function Debug() {
	const [day, setDay] = useState();
	const [title, setTitle] = useState();
	const [disc, setDisc] = useState();

	function load() {
		const data = getData(days[1]);
		setDay(data.day);
		setTitle(data.title);
		setDisc(data.description);

		console.log(data);
		console.log('loaded');
	}

	return (
		<>
			<View>
				{/* preview */}
				<View style={styles.previewWrapper}>
					<Text>{day}</Text>
					<Text>{title}</Text>
					<Text>{disc}</Text>
				</View>
			</View>
			<View style={styles.dashboardWrapper}>
				{/* Add button */}
				<TouchableOpacity
					onPress={() => {
						load();
					}}
				>
					<View style={styles.todayBtnWrapper}>
						<Text style={styles.todayBtnText}>load</Text>
					</View>
				</TouchableOpacity>
			</View>
		</>
	);
}
