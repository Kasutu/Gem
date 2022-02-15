import React, { Component, useCallback, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageExample(props) {
	const [state, setState] = useState('default');

	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem('@storage_Key', value);
		} catch (e) {
			// saving error
		}
	};

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem('@storage_Key');
			if (value !== null) {
				// value previously stored
				return value;
			}
		} catch (e) {
			// error reading value
		}
	};

	function display() {
		// const data = await getData();
		console.log('pressed');
	}

	return (
		<View style={styles.container}>
			<Text>{state}</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					autoCapitalize="none"
					onChangeText={(e) => {
						storeData(e);
					}}
				/>
			</View>
			<Button title="update" onPress={display()} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 50,
		padding: 20,
	},
	inputContainer: {
		margin: 20,
		width: '100%',
		borderWidth: 1,
	},
});
