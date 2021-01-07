const Vue = require('vue'); 

const createSSRApp = function() {
	return Vue.createSSRApp({
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>Title</title>
					<meta charset="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
				</head>

				<body>
					<header>header</header>
					<main>main</main>
					<footer>footer</footer>
				</body>
			</html>
		`
	})
}

module.exports = createSSRApp;
