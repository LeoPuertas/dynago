module.exports = async function(s) {
	// This is for debug purposes
	const miliseconds = (process.env.DEBUG) ? s * 300 : 0;

	return new Promise((resolve, reject) => {
		setTimeout(resolve, miliseconds);
	});
}