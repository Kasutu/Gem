import React, { useState } from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import styles from '../styles/styles';
import Card from '../components/card';
import getDay from '../components/calendar';
import { getData } from '../modules/file-system';
import { days } from '../components/keyHolder';
import renderIf from '../modules/renderIf';

export default function Today() {
	// states
	const [sched, setSched] = useState();
	const [schedItems, setSchedItems] = useState([]);

	function handleAddSched() {
		// only fire with the specific date assign in json
		setSchedItems([...schedItems, sched]);
		setSched(null);
	}

	const removeSched = (index) => {
		let itemsCopy = [...schedItems];
		itemsCopy.splice(index, 1);
		setSchedItems(itemsCopy);
	};

	// buttons
	function add() {
		const data = getData(days[1]);
		setSched(data);
		handleAddSched();

		console.log('added', data);
	}

	function today() {
		console.log('today', schedItems.length);
	}

	function week() {
		console.log('week');
	}

  // init the json object on initialize

	return (
		<View style={styles.container}>
			{/* today's Card*/}

			<ScrollView
				style={styles.cardDisplayWrapperScrollView}
				contentContainerStyle={{
					flexGrow: 1,
				}}
				keyboardShouldPersistTaps="handled"
				fadingEdgeLength={150}
				endFillColor={'#0D0D0D'}
				keyboardDismissMode={'on-drag'}
				// fires when user begin scrolling
				onMomentumScrollBegin={() => {
					console.log('momentum scrolling');
				}}
			>
				<View style={styles.cardDisplayWrapper}>
					{/* title header */}
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>Today</Text>
					</View>
					{/* displays the weekday and date today */}
					<View style={styles.dateWrapper}>
						<Text style={styles.date}>{getDay('today')}</Text>
					</View>
					<View style={styles.items}>
						{/* where the Card cards will go */}
						{renderIf(
							schedItems.length > 0,
							schedItems.map((item, index) => {
								return (
									<TouchableOpacity
										key={index}
										onPress={() => {
											removeSched(index);
										}}
									>
										<Card title={item} description={item} />
									</TouchableOpacity>
								);
							})
						)}
					</View>
				</View>
			</ScrollView>

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
		</View>
	);
}
