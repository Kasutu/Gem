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
});

export default styles;
