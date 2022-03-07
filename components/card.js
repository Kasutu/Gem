import { View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
	let subtitle2 = 'Stub 2052';

	return (
		<View style={styles.card}>
			<View style={styles.cardLeft}>
				<View style={styles.square}>
					<Text style={styles.timeRange}>7 AM</Text>
					<View style={styles.line}></View>
					<Text style={styles.timeRange}>10:30 AM</Text>
				</View>
				{/*
             If the text comes from a prop,
    make sure you pass it like this:
    <Component text={"Line1\nLine2"} />
    instead of <Component text="Line1\nLine2" />
    (notice the added curly braces)
            */}
				<Text style={styles.cardText}>
					<Text style={styles.textTitle}>{props.title}</Text> {'\n'}
					{props.description} {'\n'}
					{subtitle2}
				</Text>
			</View>
			<View style={styles.circular}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#3491FF',
		padding: 15,
		borderRadius: 18,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	cardLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	square: {
		flexDirection: 'column',
		width: 45,
		height: 120,
		backgroundColor: '#1C1C1C',
		borderRadius: 10,
		marginRight: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	cardText: {
		textAlignVertical: 'center',
		maxWidth: '80%',
		color: '#F0F0F0',
		fontWeight: 'normal',
		fontSize: 14,
	},
	textTitle: {
		textAlignVertical: 'center',
		maxWidth: '80%',
		color: '#F0F0F0',
		fontWeight: 'bold',
		fontSize: 14,
	},
	timeRange: {
		color: '#F0F0F0',
		fontWeight: 'normal',
		fontSize: 12,
		textAlign: 'center',
	},
	line: {
		backgroundColor: '#F0F0F0',
		width: 2,
		height: 50,
	},
	circular: {
		width: 18,
		height: 18,
		borderColor: '#F0F0F0',
		borderWidth: 3,
		borderRadius: 100,
	},
});
