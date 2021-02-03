const dotenv = require('dotenv'); 
const mysql = require('mysql'); 

dotenv.config(); 

let connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);

		return;
	}

	console.log('Database connected as id ' + connection.threadId);
});

function fetchContent(sublinkId, callback) {
	let query = 'SELECT content FROM sublinks WHERE sublinkid=' + sublinkId;

	return new Promise((resolve, reject) => {
		connection.query(query, (err, res) => {
			if (err) {
				reject(err); 
			} else {
				resolve(res); 
			}
		})
	}).then((response) => {
		callback(
			response[0]
		)
	}).catch(reject => {
		return reject;
	})
}; 

function fetchSublinks(linkId) {
	let query = `SELECT sublinkid, sublinkname FROM sublinks WHERE linkid=${linkId} ORDER BY sublinkorder DESC;`;

	return new Promise((resolve, reject) => {
		connection.query(query, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		})
	})
};

module.exports = {
	fetchContent,
	fetchSublinks
}; 
