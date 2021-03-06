const Vue = require('vue'); 
const fs = require('fs'); 
const AppHeader = require('./components/AppHeader'); 
const AppNav = require('./components/AppNav'); 
const AppMain = require('./components/AppMain'); 
const AppFooter = require('./components/AppFooter'); 

const createSSRApp = function(url) {
	let content = '<p>Not Found</p>'; 
	let linkId = 0; 
	let sublinkId = 0; 
	let title = ''; 

	if (url.indexOf('linkid') > -1) {
		linkId = url.split('linkid=')[1].split('&')[0]; 
	}; 

	if (url.indexOf('sublinkid') > -1) {
		sublinkId = url.split('sublinkid=')[1];
	}

	if (url === '/') {
		content = fs.readFileSync('./src/content/Home.html', 'utf-8'); 
		title = 'Home'; 
	} else if (url === '/events') {
		content = fs.readFileSync('./src/content/Events.html', 'utf-8'); 
		title = 'Events'; 
	} else if (url === '/about') {
		content = fs.readFileSync('./src/content/About.html', 'utf-8'); 
		title = 'About Us'; 
	} else if (url === '/contact') {
		content = fs.readFileSync('./src/content/Contact.html', 'utf-8'); 
		title = 'Contact Us'; 
	} else if (url.indexOf('storyId') > -1) {
		let storyId = url.split('storyId=')[1]; 
		content = fs.readFileSync('./src/content/Story_' + storyId + '.html', 'utf-8'); 
		title = 'Home'; 
	} else if (linkId == 3) {
		title = 'CNWP'; 

		if (sublinkId == 0) {
			content = fs.readFileSync('./src/content/Link_' + linkId + '.html', 'utf-8'); 
		} else {
			if (fs.existsSync('./src/content/Link_3-Sublink_' + sublinkId + '.html')) {
				content = fs.readFileSync('./src/content/Link_3-Sublink_' + sublinkId + '.html', 'utf-8');
			} else {
				content = '<p>Not Found</p>'; 
			}
		}
	} else if (linkId == 2) {
		title = 'Left Unity'; 

		if (sublinkId == 0) {
			content = fs.readFileSync('./src/content/Link_' + linkId + '.html', 'utf-8'); 
		} else {
			if (fs.existsSync('./src/content/Link_' + linkId + '-Sublink_' + sublinkId + '.html')) {
				content = fs.readFileSync('./src/content/Link_' + linkId + '-Sublink_' + sublinkId + '.html', 'utf-8');
			} else {
				content = '<p>Not Found</p>'; 
			}
		}
	} else if (linkId == 4) {
		title = 'Reports'; 

		if (sublinkId == 0) {
			content = fs.readFileSync('./src/content/Link_' + linkId + '.html', 'utf-8'); 
		} else {
			if (fs.existsSync('./src/content/Link_' + linkId + '-Sublink_' + sublinkId + '.html')) {
				content = fs.readFileSync('./src/content/Link_' + linkId + '-Sublink_' + sublinkId + '.html', 'utf-8');
			} else {
				content = '<p>Not Found</p>'; 
			}
		}
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
					<title>Socialist Alliance | ${title}</title>
					<meta charset="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" type="text/css" href="/socAllPage.css">
					<script type="text/javascript" src="/jquery-1.4.1.min.js"></script>
					<script type="text/javascript" src="/socAllPage.js"></script>
				</head>

				<body class="${title}">
					<div id="wrap">
						<app-header></app-header>
						<app-nav linkId='${linkId}' url='${url}'></app-nav>
						<app-main content='${content}'></app-main>
						<app-footer></app-footer>
					</div>
				</body>
			</html>
		`
	})
}

module.exports = createSSRApp;
