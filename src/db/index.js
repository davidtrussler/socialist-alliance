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
	} else if (linkId == 3) {
		if (sublinkId == 0) {
			query = `
				SELECT sublinkid, content, sublinkorder FROM sublinks WHERE sublinkorder=0 AND linkid=${linkId}
				UNION
				(SELECT sublinkid, sublinkname, sublinkorder FROM sublinks WHERE linkid=${linkId} AND sublinkorder!=0
				ORDER BY sublinkorder ASC);`;
		} else {
			query = `
				SELECT sublinkid, content, sublinkorder FROM sublinks WHERE sublinkid=${sublinkId}
				UNION
				(SELECT sublinkid, sublinkname, sublinkorder FROM sublinks WHERE linkid=${linkId} AND sublinkorder!=0
				ORDER BY sublinkorder ASC);`;
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
