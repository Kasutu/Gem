// navDash styles

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	dashboardWrapper: {
		position: 'absolute',
		bottom: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		paddingHorizontal: 50,
	},
	plusBtnWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#3491FF',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	plusBtnText: {
		color: '#FFF',
		fontSize: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	todayBtnWrapper: {
		backgroundColor: '#3491FF',
		width: 100,
		height: 45,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	todayBtnText: {
		color: '#FFF',
		fontSize: 18,
		textAlign: 'center',
	},
	WeekBtnWrapper: {
		backgroundColor: '#292B2C',
		width: 100,
		height: 45,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	WeekBtnText: {
		color: '#FFF',
		fontSize: 18,
		textAlign: 'center',
	},
});

export default styles;