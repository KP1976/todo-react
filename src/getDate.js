const getDate = () => {
	const today = new Date();
	let day = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();

	if (month < 10) {
		month = '0' + month.toString();
	}

	if (day < 10) {
		day = '0' + day.toString();
	}

	if (hours < 10) {
		hours = '0' + hours.toString();
	}

	if (minutes < 10) {
		minutes = '0' + minutes.toString();
	}

	let date = `${day}.${month}.${year} godz. ${hours}:${minutes}:${seconds}`;
	return date;
};

export default getDate;
