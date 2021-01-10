const Vue = require('vue'); 
const AppHeader = require('./components/AppHeader'); 
const AppNav = require('./components/AppNav'); 
const AppMain = require('./components/AppMain'); 
const AppFooter = require('./components/AppFooter'); 

const createSSRApp = function(url) {
	let content = 'NotFound'; 

	if (url === '/') {
		content = require('fs').readFileSync('./src/content/Home.html', 'utf-8'); 
	} else if (url.indexOf('storyId') > -1) {
		let storyId = url.split('storyId=')[1]; 
		content = require('fs').readFileSync('./src/content/Story_' + storyId + '.html', 'utf-8'); 
	}

	return Vue.createSSRApp({
		components: {
			'app-header': AppHeader, 
			'app-nav': AppNav, 
			'app-main': AppMain, 
			'app-footer': AppFooter
		}, 
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>Socialist Alliance | Home</title>
					<meta charset="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" type="text/css" href="/socAllPage.css">
					<script type="text/javascript" src="/jquery-1.4.1.min.js"></script>
					<script type="text/javascript" src="/socAllPage.js"></script>
				</head>

				<body class="Home">
					<div id="wrap">
						<app-header></app-header>
						<app-nav></app-nav>
						<app-main content='${content}'></app-main>
						<app-footer></app-footer>
					</div>
				</body>
			</html>
		`
	})
}

module.exports = createSSRApp;
