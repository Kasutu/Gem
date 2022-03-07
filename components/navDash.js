import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles/navStyle';

export default function NavDash() {
	// buttons
	function add() {
		/*
    Write data first 
      if fs id done writing  & 'addSched' is at the top of the 'activeStack'
        pop 'activeStack' into the 'schedStack' 
    */

		// const data = getData(days[1]);
		// setSched(data);
		// handleAddSched();

		console.log('added');
	}

	function today() {
		/*
    if week is 'active' and top of the displayStack === 'week'
      pop the displayStack to weekStack
      update 'today' to active state
      update 'week' to inactive state
    */

		console.log('today');
	}

	function week() {
		/*
    if today is 'active' and top of the displayStack === 'today'
      pop the weekView from the weekStack and into the activeStack
      update 'week' to active state
      update 'today' to inactive state
    */

		console.log('week');
	}

	return (
		<>
			{/* dashboard navigation */}
			<View style={styles.dashboardWrapper}>
				{/* Today button */}
				<TouchableOpacity
					onPress={() => {
						today();
					}}
				>
					<View style={styles.todayBtnWrapper}>
						<Text style={styles.todayBtnText}>Today</Text>
					</View>
				</TouchableOpacity>

				{/* plus button */}
				<TouchableOpacity
					onPress={() => {
						add();
					}}
				>
					<View style={styles.plusBtnWrapper}>
						<Text style={styles.plusBtnText}>+</Text>
					</View>
				</TouchableOpacity>

				{/* week button */}
				<TouchableOpacity
					onPress={() => {
						week();
					}}
				>
					<View style={styles.WeekBtnWrapper}>
						<Text style={styles.WeekBtnText}>Week</Text>
					</View>
				</TouchableOpacity>
			</View>
		</>
	);
}
