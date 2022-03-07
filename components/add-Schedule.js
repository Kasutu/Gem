import React, { useState } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	Keyboard,
	TextInput,
	KeyboardAvoidingView,
} from 'react-native';
import styles from '../styles/addScheduleStyle';
import { getDay } from '../components/calendar';
import { storeData, getData } from '../modules/file-system';
import { days } from '../components/keyHolder.js';

let formMeta = {
	day: null,
	title: null,
	description: null,
	day: null,
	time: {
		start: null,
		end: null,
	},
};

export default function AddSchedule() {
	// inputs
	// stores the user input in title
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();

	// objects and arrays
	// saved final object data
	// const [INIT_DATA, SET_INIT_DATA] = useState(formMeta);
	const [display, setDisplay] = useState(formMeta);

	// sets the title in form meta
	function updateFormMeta(
		day,
		newTitle,
		newDescription,
		newTimeStart,
		newTimeEnd
	) {
		// copy of the form
		let formMetaCopy = formMeta;

		// sets the new form meta
		formMetaCopy.day = day;
		formMetaCopy.title = newTitle;
		formMetaCopy.description = newDescription;
		formMetaCopy.time.start = newTimeStart;
		formMetaCopy.time.end = newTimeEnd;

		storeData(days[1], formMetaCopy);
		console.log('NEW DATA ----->', formMetaCopy);
	}

	function add() {
		Keyboard.dismiss();

		updateFormMeta(days[1], title, description);

		// reset temp handlers to null
		setTitle(null);
		setDescription(null);

		// store data in local storage
		setDisplay(getData(days[1]));

		console.log('added....');
	}

	function cancel() {
		console.log(getData(days[1]));
		Keyboard.dismiss();
		console.log('canceled....');
	}

	// INSTRUCTIONS
	// text input ={(text) => {setSched(text)}}
	// button press onPress={() => {setSched(sunday)}}
	// remove something ={() => {removeSched()}}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'android' ? 'padding' : 'height'}
		>
			{/* title header */}
			<View style={styles.titleWrapper}>
				<Text style={styles.title}>Add Schedule</Text>
			</View>

			{/* displays the weekday and date today */}
			<View style={styles.dateWrapper}>
				<Text style={styles.date}>{getDay('today')}</Text>
			</View>

			{/* user input wrapper */}
			{/* title */}
			<View style={styles.userInputWrapper}>
				<View style={styles.titleInput}>
					<TextInput
						style={styles.input}
						placeholder="Title"
						value={title}
						onChangeText={(text) => {
							setTitle(text);
						}}
					/>
				</View>

				{/* description */}
				<View style={styles.descriptionInput}>
					<TextInput
						style={styles.input}
						placeholder="Description"
						value={description}
						onChangeText={(text) => {
							setDescription(text);
						}}
					/>
				</View>
				<View style={styles.pickTimeInput}>
					<TextInput style={styles.input} placeholder="Pick Time" />
				</View>

				{/* preview */}
				<View style={styles.previewWrapper}>
					<Text style={styles.preview}>{display.day}</Text>
					<Text style={styles.preview}>{display.title}</Text>
					<Text style={styles.preview}>{display.description}</Text>
				</View>
			</View>

			<View style={styles.dashboardWrapper}>
				{/* cancel button */}
				<TouchableOpacity
					onPress={() => {
						cancel();
					}}
				>
					<View style={styles.WeekBtnWrapper}>
						<Text style={styles.WeekBtnText}>Cancel</Text>
					</View>
				</TouchableOpacity>

				{/* Add button */}
				<TouchableOpacity
					onPress={() => {
						add();
					}}
				>
					<View style={styles.todayBtnWrapper}>
						<Text style={styles.todayBtnText}>Add</Text>
					</View>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
