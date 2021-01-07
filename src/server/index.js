const express = require('express'); 
const server = express(); 
const port = 4000; 

server.use(express.static('public')); 

server.get('*', (req, res) => {
	const app = createSSRApp();

function generateMarkup(req) {
	return `
		<header>header</header>
		<main>main</main>
		<footer>footer</footer>
	`
}

function handleRender(req, res) {
  const markup = generateMarkup(req); 

	res.send(renderFullPage(markup)); 
}; 

function renderFullPage(markup) {
	return `
		<!doctype html>
		<html lang="en-GB">
			<head>
				<title>Title</title>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>
			<body>
			  ${markup}
			</body>
		</html>
	`
}; 

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
