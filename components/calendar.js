let month = new Date().getMonth(); //To get the Current Month
let date = new Date().getDate(); //To get the Current Date
let year = new Date().getFullYear(); //To get the Current Year
let day = new Date().getDay();

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

export function getDay(selected) {
	if (selected === 'today') {
		return `${weekdays[day]}, ${months[month]} ${date}, ${year}`;
	}
}
