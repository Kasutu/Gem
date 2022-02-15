import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0D0D0D',
	},
	cardDisplayWrapper: {
		paddingTop: 80,
		paddingBottom: 80,
		paddingHorizontal: 20,
		width: '100%',
		height: '100%',
		justifyContent: 'space-around',
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
	previewWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 80,
		width: '100%',
	},
	preview: {
		color: '#F0F0F0',
		fontSize: 20,
		fontWeight: 'normal',
	},

	// inputs
	userInputWrapper: {
		width: '100%',
		paddingTop: 80,
		paddingBottom: 80,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleInput: {
		backgroundColor: '#F0F0F0',
		width: '90%',
		height: 50,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 15,
	},
	descriptionInput: {
		backgroundColor: '#F0F0F0',
		width: '90%',
		height: 50,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 15,
	},
	pickTimeInput: {
		backgroundColor: '#F0F0F0',
		width: '90%',
		height: 50,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 15,
	},
	input: {
		width: '90%',
	},

	// dashboard CSS

	dashboardWrapper: {
		position: 'absolute',
		bottom: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		// paddingHorizontal: 30,
	},
	todayBtnWrapper: {
		backgroundColor: '#3491FF',
		width: 100,
		height: 50,
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
		height: 50,
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
