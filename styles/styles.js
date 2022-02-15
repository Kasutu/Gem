import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0D0D0D',
	},
	cardDisplayWrapperScrollView: {
		marginBottom: 10,
	},
	cardDisplayWrapper: {
		paddingTop: 80,
		paddingBottom: 80,
		paddingHorizontal: 20,
	},
	titleWrapper: {
		paddingBottom: 10,
		justifyContent: 'center',
	},
	title: {
		color: '#F0F0F0',
		fontSize: 45,
		fontWeight: 'bold',
	},
	dateWrapper: {
		justifyContent: 'center',
	},
	date: {
		color: '#F0F0F0',
		fontSize: 20,
		fontWeight: 'normal',
	},
	items: {
		marginTop: 15,
	},
	// dashboard CSS

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
