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

function fetchData(linkId, sublinkId) {
	let query = ``;

	if (linkId == 1) {
		if (sublinkId == 0) {
			query = `SELECT sublinkid, sublinkname FROM sublinks WHERE linkid=${linkId} ORDER BY sublinkorder DESC;`;
		} else {
			query = `SELECT sublinkname, content FROM sublinks WHERE sublinkid=${sublinkId};`;
		}
	}

	return new Promise((resolve, reject) => {
		if (linkId === 0) {
			resolve();	
		} else {
			connection.query(query, (err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			})
		}
	})
};

module.exports = {
	fetchData
}; 
